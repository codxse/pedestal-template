// Compiled by ClojureScript 1.9.562 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.log');
goog.require('om.next.cache');
goog.require('om.next.impl.parser');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('om.util');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.api');
goog.require('clojure.string');
goog.require('goog.debug.Console');
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",-1440077198,null),null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq.call(null,dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__62995 = split_on_static.call(null,dt__$1);
var pre = cljs.core.nth.call(null,vec__62995,(0),null);
var vec__62998 = cljs.core.nth.call(null,vec__62995,(1),null);
var seq__62999 = cljs.core.seq.call(null,vec__62998);
var first__63000 = cljs.core.first.call(null,seq__62999);
var seq__62999__$1 = cljs.core.next.call(null,seq__62999);
var _ = first__63000;
var first__63000__$1 = cljs.core.first.call(null,seq__62999__$1);
var seq__62999__$2 = cljs.core.next.call(null,seq__62999__$1);
var sym = first__63000__$1;
var remaining = seq__62999__$2;
var post = vec__62998;
var dt_SINGLEQUOTE___$1 = cljs.core.into.call(null,dt_SINGLEQUOTE_,pre);
if(cljs.core.seq.call(null,post)){
if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"field","field",338095027,null))){
var vec__63001 = cljs.core.split_at.call(null,(2),remaining);
var field_info = cljs.core.nth.call(null,vec__63001,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__63001,(1),null);
var G__63007 = cljs.core.seq.call(null,dt__$2);
var G__63008 = dt_SINGLEQUOTE___$1;
var G__63009 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.conj,cljs.core.vec.call(null,field_info));
dt__$1 = G__63007;
dt_SINGLEQUOTE_ = G__63008;
statics = G__63009;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__63004 = split_on_symbol.call(null,remaining);
var protocol_info = cljs.core.nth.call(null,vec__63004,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__63004,(1),null);
var G__63010 = cljs.core.seq.call(null,dt__$2);
var G__63011 = dt_SINGLEQUOTE___$1;
var G__63012 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),cljs.core.into,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__63010;
dt_SINGLEQUOTE_ = G__63011;
statics = G__63012;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__63013 = null;
var G__63014 = dt_SINGLEQUOTE___$1;
var G__63015 = statics;
dt__$1 = G__63013;
dt_SINGLEQUOTE_ = G__63014;
statics = G__63015;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dt","dt",-368444759),dt_SINGLEQUOTE_,new cljs.core.Keyword(null,"statics","statics",-1984882809),statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__5278__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.call(null,(function (p1__63016_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63016_SHARP_)].join(''),/\//));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__5278__auto__)){
var invalid = temp__5278__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",-1698724833,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"prev-props","prev-props",1081981230,null),new cljs.core.Symbol(null,"prev-state","prev-state",1365252518,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__63017){
var vec__63021 = p__63017;
var name = cljs.core.nth.call(null,vec__63021,(0),null);
var sig = cljs.core.nth.call(null,vec__63021,(1),null);
var method = vec__63021;
var sig_SINGLEQUOTE_ = cljs.core.get.call(null,om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sig_SINGLEQUOTE_),cljs.core.count.call(null,sig))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", need "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig_SINGLEQUOTE_)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(= (count sig') (count sig))")].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reshape","reshape",1588089910),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),(function (p__63067){
var vec__63068 = p__63067;
var seq__63069 = cljs.core.seq.call(null,vec__63068);
var first__63070 = cljs.core.first.call(null,seq__63069);
var seq__63069__$1 = cljs.core.next.call(null,seq__63069);
var name = first__63070;
var first__63070__$1 = cljs.core.first.call(null,seq__63069__$1);
var seq__63069__$2 = cljs.core.next.call(null,seq__63069__$1);
var vec__63071 = first__63070__$1;
var this$ = cljs.core.nth.call(null,vec__63071,(0),null);
var args = vec__63071;
var body = seq__63069__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__63031__auto__","ret__63031__auto__",-215981145,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__63031__auto__","ret__63031__auto__",-215981145,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),(function (p__63074){
var vec__63075 = p__63074;
var seq__63076 = cljs.core.seq.call(null,vec__63075);
var first__63077 = cljs.core.first.call(null,seq__63076);
var seq__63076__$1 = cljs.core.next.call(null,seq__63076);
var name = first__63077;
var first__63077__$1 = cljs.core.first.call(null,seq__63076__$1);
var seq__63076__$2 = cljs.core.next.call(null,seq__63076__$1);
var vec__63078 = first__63077__$1;
var this$ = cljs.core.nth.call(null,vec__63078,(0),null);
var next_props = cljs.core.nth.call(null,vec__63078,(1),null);
var args = vec__63078;
var body = seq__63076__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63032__auto__","this__63032__auto__",1460544172,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63033__auto__","next-props__63033__auto__",1240105066,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63032__auto__","this__63032__auto__",1460544172,null)),(function (){var x__46358__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63033__auto__","next-props__63033__auto__",1240105066,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63032__auto__","this__63032__auto__",1460544172,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),(function (p__63081){
var vec__63082 = p__63081;
var seq__63083 = cljs.core.seq.call(null,vec__63082);
var first__63084 = cljs.core.first.call(null,seq__63083);
var seq__63083__$1 = cljs.core.next.call(null,seq__63083);
var name = first__63084;
var first__63084__$1 = cljs.core.first.call(null,seq__63083__$1);
var seq__63083__$2 = cljs.core.next.call(null,seq__63083__$1);
var vec__63085 = first__63084__$1;
var this$ = cljs.core.nth.call(null,vec__63085,(0),null);
var next_props = cljs.core.nth.call(null,vec__63085,(1),null);
var next_state = cljs.core.nth.call(null,vec__63085,(2),null);
var args = vec__63085;
var body = seq__63083__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63035__auto__","next-props__63035__auto__",228241931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__63036__auto__","next-state__63036__auto__",-1297890564,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)),(function (){var x__46358__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63035__auto__","next-props__63035__auto__",228241931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = next_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__63036__auto__","next-state__63036__auto__",-1297890564,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$pendingState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__63036__auto__","next-state__63036__auto__",-1297890564,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__63037__auto__","ret__63037__auto__",269534972,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__63038__auto__","ident__63038__auto__",-1559924102,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__63039__auto__","next-ident__63039__auto__",-1787677621,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)),(function (){var x__46358__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__63038__auto__","ident__63038__auto__",-1559924102,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__63039__auto__","next-ident__63039__auto__",-1787677621,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__63040__auto__","idxr__63040__auto__",942574573,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__63040__auto__","idxr__63040__auto__",942574573,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__63040__auto__","idxr__63040__auto__",942574573,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__63041__auto__","indexes__63041__auto__",-487547164,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__63041__auto__","indexes__63041__auto__",-487547164,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__63038__auto__","ident__63038__auto__",-1559924102,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__63039__auto__","next-ident__63039__auto__",-1787677621,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__46358__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63034__auto__","this__63034__auto__",-1463997845,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__63037__auto__","ret__63037__auto__",269534972,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
}),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),(function (p__63088){
var vec__63089 = p__63088;
var seq__63090 = cljs.core.seq.call(null,vec__63089);
var first__63091 = cljs.core.first.call(null,seq__63090);
var seq__63090__$1 = cljs.core.next.call(null,seq__63090);
var name = first__63091;
var first__63091__$1 = cljs.core.first.call(null,seq__63090__$1);
var seq__63090__$2 = cljs.core.next.call(null,seq__63090__$1);
var vec__63092 = first__63091__$1;
var this$ = cljs.core.nth.call(null,vec__63092,(0),null);
var prev_props = cljs.core.nth.call(null,vec__63092,(1),null);
var prev_state = cljs.core.nth.call(null,vec__63092,(2),null);
var args = vec__63092;
var body = seq__63090__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63042__auto__","this__63042__auto__",1585177873,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__63043__auto__","prev-props__63043__auto__",647481237,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__63044__auto__","prev-state__63044__auto__",-1843996481,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63042__auto__","this__63042__auto__",1585177873,null)),(function (){var x__46358__auto__ = prev_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prev-props","om.next/-prev-props",-1189686117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__63043__auto__","prev-props__63043__auto__",647481237,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63042__auto__","this__63042__auto__",1585177873,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = prev_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__63044__auto__","prev-state__63044__auto__",-1843996481,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$previousState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),body,(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63042__auto__","this__63042__auto__",1585177873,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),(function (p__63095){
var vec__63096 = p__63095;
var seq__63097 = cljs.core.seq.call(null,vec__63096);
var first__63098 = cljs.core.first.call(null,seq__63097);
var seq__63097__$1 = cljs.core.next.call(null,seq__63097);
var name = first__63098;
var first__63098__$1 = cljs.core.first.call(null,seq__63097__$1);
var seq__63097__$2 = cljs.core.next.call(null,seq__63097__$1);
var vec__63099 = first__63098__$1;
var this$ = cljs.core.nth.call(null,vec__63099,(0),null);
var args = vec__63099;
var body = seq__63097__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63045__auto__","this__63045__auto__",-610258375,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63045__auto__","this__63045__auto__",-610258375,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63046__auto__","indexer__63046__auto__",654168532,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63045__auto__","this__63045__auto__",-610258375,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63046__auto__","indexer__63046__auto__",654168532,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63046__auto__","indexer__63046__auto__",654168532,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63045__auto__","this__63045__auto__",-610258375,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),(function (p__63102){
var vec__63103 = p__63102;
var seq__63104 = cljs.core.seq.call(null,vec__63103);
var first__63105 = cljs.core.first.call(null,seq__63104);
var seq__63104__$1 = cljs.core.next.call(null,seq__63104);
var name = first__63105;
var first__63105__$1 = cljs.core.first.call(null,seq__63104__$1);
var seq__63104__$2 = cljs.core.next.call(null,seq__63104__$1);
var vec__63106 = first__63105__$1;
var this$ = cljs.core.nth.call(null,vec__63106,(0),null);
var args = vec__63106;
var body = seq__63104__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63047__auto__","this__63047__auto__",-151447304,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63047__auto__","this__63047__auto__",-151447304,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__63048__auto__","r__63048__auto__",1113235751,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63047__auto__","this__63047__auto__",-151447304,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__63049__auto__","cfg__63049__auto__",-34996426,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__63048__auto__","r__63048__auto__",1113235751,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__63050__auto__","st__63050__auto__",-1707217266,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__63049__auto__","cfg__63049__auto__",-34996426,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63051__auto__","indexer__63051__auto__",-556698690,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__63049__auto__","cfg__63049__auto__",-34996426,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__63050__auto__","st__63050__auto__",-1707217266,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__63050__auto__","st__63050__auto__",-1707217266,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63047__auto__","this__63047__auto__",-151447304,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__63050__auto__","st__63050__auto__",-1707217266,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63047__auto__","this__63047__auto__",-151447304,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63051__auto__","indexer__63051__auto__",-556698690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63051__auto__","indexer__63051__auto__",-556698690,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63047__auto__","this__63047__auto__",-151447304,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
}),new cljs.core.Symbol(null,"render","render",232498073,null),(function (p__63109){
var vec__63110 = p__63109;
var seq__63111 = cljs.core.seq.call(null,vec__63110);
var first__63112 = cljs.core.first.call(null,seq__63111);
var seq__63111__$1 = cljs.core.next.call(null,seq__63111);
var name = first__63112;
var first__63112__$1 = cljs.core.first.call(null,seq__63111__$1);
var seq__63111__$2 = cljs.core.next.call(null,seq__63111__$1);
var vec__63113 = first__63112__$1;
var this$ = cljs.core.nth.call(null,vec__63113,(0),null);
var args = vec__63113;
var body = seq__63111__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63052__auto__","this__63052__auto__",824848458,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63052__auto__","this__63052__auto__",824848458,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*reconciler*","om.next/*reconciler*",2063201960,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63052__auto__","this__63052__auto__",824848458,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*depth*","om.next/*depth*",161261240,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","depth","om.next/depth",-1750843006,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63052__auto__","this__63052__auto__",824848458,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*shared*","om.next/*shared*",-270307055,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","shared","om.next/shared",426941171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63052__auto__","this__63052__auto__",824848458,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*instrument*","om.next/*instrument*",-1428199886,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","instrument","om.next/instrument",1410710376,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63052__auto__","this__63052__auto__",824848458,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*parent*","om.next/*parent*",-764653121,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63052__auto__","this__63052__auto__",824848458,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
})], null),new cljs.core.Keyword(null,"defaults","defaults",976027214),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"isMounted","isMounted",-1263254906,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","getValueByKeys","goog.object/getValueByKeys",-1135358948,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_renderedComponent"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__63055__auto__","next-state__63055__auto__",213915654,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__63056__auto__","next-children__63056__auto__",795356556,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$value"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","OmProps","om.next/OmProps",-1258962915,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","unwrap","om.next/unwrap",-621667282,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__63055__auto__","next-state__63055__auto__",213915654,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-props","om.next/-props",1063294959,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__63056__auto__","next-children__63056__auto__",795356556,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__63055__auto__","next-state__63055__auto__",213915654,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__63057__auto__","ident__63057__auto__",1774592915,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__63058__auto__","next-ident__63058__auto__",1120047693,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__63054__auto__","next-props__63054__auto__",1362043935,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__63057__auto__","ident__63057__auto__",1774592915,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__63058__auto__","next-ident__63058__auto__",1120047693,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__63059__auto__","idxr__63059__auto__",-1307999678,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__63059__auto__","idxr__63059__auto__",-1307999678,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__63059__auto__","idxr__63059__auto__",-1307999678,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__63060__auto__","indexes__63060__auto__",1180888277,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__63060__auto__","indexes__63060__auto__",1180888277,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__63057__auto__","ident__63057__auto__",1774592915,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__63058__auto__","next-ident__63058__auto__",1120047693,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__46358__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__63061__auto__","prev-props__63061__auto__",857172232,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__63062__auto__","prev-state__63062__auto__",-271533906,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63063__auto__","indexer__63063__auto__",208554190,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63063__auto__","indexer__63063__auto__",208554190,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63063__auto__","indexer__63063__auto__",208554190,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__63064__auto__","r__63064__auto__",637361612,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__63065__auto__","cfg__63065__auto__",386165504,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__63064__auto__","r__63064__auto__",637361612,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__63066__auto__","st__63066__auto__",2045339737,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__63065__auto__","cfg__63065__auto__",386165504,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63063__auto__","indexer__63063__auto__",208554190,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__63065__auto__","cfg__63065__auto__",386165504,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__63066__auto__","st__63066__auto__",2045339737,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__63066__auto__","st__63066__auto__",2045339737,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__63066__auto__","st__63066__auto__",2045339737,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63063__auto__","indexer__63063__auto__",208554190,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__63063__auto__","indexer__63063__auto__",208554190,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63053__auto__","this__63053__auto__",-1041134373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))))], null);
om.next.reshape = (function om$next$reshape(dt,p__63116){
var map__63157 = p__63116;
var map__63157__$1 = ((((!((map__63157 == null)))?((((map__63157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63157):map__63157);
var reshape = cljs.core.get.call(null,map__63157__$1,new cljs.core.Keyword(null,"reshape","reshape",1588089910));
var defaults = cljs.core.get.call(null,map__63157__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var reshape_STAR_ = ((function (map__63157,map__63157__$1,reshape,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,reshape,cljs.core.first.call(null,x)))){
var reshapef = cljs.core.get.call(null,reshape,cljs.core.first.call(null,x));
om.next.validate_sig.call(null,x);

return reshapef.call(null,x);
} else {
return x;
}
});})(map__63157,map__63157__$1,reshape,defaults))
;
var add_defaults_step = ((function (map__63157,map__63157__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__63178){
var vec__63188 = p__63178;
var name = cljs.core.nth.call(null,vec__63188,(0),null);
var impl = cljs.core.nth.call(null,vec__63188,(1),null);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([name]),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.seq_QMARK_,ret))))){
var vec__63191 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null)),ret);
var before = cljs.core.nth.call(null,vec__63191,(0),null);
var vec__63194 = cljs.core.nth.call(null,vec__63191,(1),null);
var seq__63195 = cljs.core.seq.call(null,vec__63194);
var first__63196 = cljs.core.first.call(null,seq__63195);
var seq__63195__$1 = cljs.core.next.call(null,seq__63195);
var p = first__63196;
var after = seq__63195__$1;
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,before),p,cljs.core.cons.call(null,name,impl)),after);
} else {
return ret;
}
});})(map__63157,map__63157__$1,reshape,defaults))
;
var add_defaults = ((function (map__63157,map__63157__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.call(null,add_defaults_step,dt__$1,defaults);
});})(map__63157,map__63157__$1,reshape,defaults))
;
var add_object_protocol = ((function (map__63157,map__63157__$1,reshape,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null),dt__$1))){
return cljs.core.conj.call(null,dt__$1,new cljs.core.Symbol(null,"Object","Object",61210754,null));
} else {
return dt__$1;
}
});})(map__63157,map__63157__$1,reshape,defaults))
;
return add_defaults.call(null,add_object_protocol.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var args63212 = [];
var len__46645__auto___63234 = arguments.length;
var i__46646__auto___63235 = (0);
while(true){
if((i__46646__auto___63235 < len__46645__auto___63234)){
args63212.push((arguments[i__46646__auto___63235]));

var G__63236 = (i__46646__auto___63235 + (1));
i__46646__auto___63235 = G__63236;
continue;
} else {
}
break;
}

var G__63214 = args63212.length;
switch (G__63214) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63212.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.call(null,name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__63222){
var vec__63226 = p__63222;
var field = cljs.core.nth.call(null,vec__63226,(0),null);
var value = cljs.core.nth.call(null,vec__63226,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__46358__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
});
var docstring = ((typeof cljs.core.first.call(null,forms) === 'string')?cljs.core.first.call(null,forms):null);
var forms__$1 = (function (){var G__63230 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest.call(null,G__63230);
} else {
return G__63230;
}
})();
var map__63229 = om.next.collect_statics.call(null,forms__$1);
var map__63229__$1 = ((((!((map__63229 == null)))?((((map__63229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63229):map__63229);
var dt = cljs.core.get.call(null,map__63229__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var statics = cljs.core.get.call(null,map__63229__$1,new cljs.core.Keyword(null,"statics","statics",-1984882809));
var _ = om.next.validate_statics.call(null,dt);
var rname = (cljs.core.truth_(env)?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),name)):name);
var ctor = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__46358__auto__ = cljs.core.with_meta.call(null,name,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta.call(null,name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null):null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63206__auto__","this__63206__auto__",150758447,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component","js/React.Component",752301916,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63206__auto__","this__63206__auto__",150758447,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-initLocalState",".-initLocalState",-1875308467,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63206__auto__","this__63206__auto__",150758447,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63206__auto__","this__63206__auto__",150758447,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".initLocalState",".initLocalState",-104173886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63206__auto__","this__63206__auto__",150758447,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63206__auto__","this__63206__auto__",150758447,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63206__auto__","this__63206__auto__",150758447,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
var set_react_proto_BANG_ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","clone","goog.object/clone",-508199474,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component.prototype","js/React.Component.prototype",259217051,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
var ctor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null)),(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__46358__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})()))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__46358__auto__ = ctor__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),om.next.reshape.call(null,dt,om.next.reshape_map))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-displayName","om.next/-displayName",250349469,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = display_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-om$isComponent","om.next/-om$isComponent",-1994912590,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core.map.call(null,((function (docstring,forms__$1,map__63229,map__63229__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__63207_SHARP_){
return field_set_BANG_.call(null,name,p1__63207_SHARP_);
});})(docstring,forms__$1,map__63229,map__63229__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core.mapv.call(null,((function (docstring,forms__$1,map__63229,map__63229__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__63208_SHARP_){
var G__63233 = p1__63208_SHARP_;
if((p1__63208_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.call(null,G__63233,cljs.core.assoc,new cljs.core.Keyword(null,"static","static",1214358571),true);
} else {
return G__63233;
}
});})(docstring,forms__$1,map__63229,map__63229__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__46358__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__46358__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__46358__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__46358__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__63209__auto__","this__63209__auto__",-7176912,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__63210__auto__","writer__63210__auto__",608030647,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__63211__auto__","opt__63211__auto__",1857892249,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__63210__auto__","writer__63210__auto__",608030647,null)),(function (){var x__46358__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = 3;

var ret__46690__auto___63242 = (function (){
om.next.defui = (function om$next$defui(var_args){
var args__46652__auto__ = [];
var len__46645__auto___63243 = arguments.length;
var i__46646__auto___63244 = (0);
while(true){
if((i__46646__auto___63244 < len__46645__auto___63243)){
args__46652__auto__.push((arguments[i__46646__auto___63244]));

var G__63245 = (i__46646__auto___63244 + (1));
i__46646__auto___63244 = G__63245;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((3) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__46653__auto__);
});

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.call(null,name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq63238){
var G__63239 = cljs.core.first.call(null,seq63238);
var seq63238__$1 = cljs.core.next.call(null,seq63238);
var G__63240 = cljs.core.first.call(null,seq63238__$1);
var seq63238__$2 = cljs.core.next.call(null,seq63238__$1);
var G__63241 = cljs.core.first.call(null,seq63238__$2);
var seq63238__$3 = cljs.core.next.call(null,seq63238__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__63239,G__63240,G__63241,seq63238__$3);
});

return null;
})()
;
om.next.defui.cljs$lang$macro = true;

var ret__46690__auto___63249 = (function (){
om.next.ui = (function om$next$ui(var_args){
var args__46652__auto__ = [];
var len__46645__auto___63250 = arguments.length;
var i__46646__auto___63251 = (0);
while(true){
if((i__46646__auto___63251 < len__46645__auto___63250)){
args__46652__auto__.push((arguments[i__46646__auto___63251]));

var G__63252 = (i__46646__auto___63251 + (1));
i__46646__auto___63251 = G__63252;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((2) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__46653__auto__);
});

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"ui_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","defui","om.next/defui",1665242576,null)),(function (){var x__46358__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),forms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq63246){
var G__63247 = cljs.core.first.call(null,seq63246);
var seq63246__$1 = cljs.core.next.call(null,seq63246);
var G__63248 = cljs.core.first.call(null,seq63246__$1);
var seq63246__$2 = cljs.core.next.call(null,seq63246__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__63247,G__63248,seq63246__$2);
});

return null;
})()
;
om.next.ui.cljs$lang$macro = true;

om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.call(null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__63255 = fn_scope;
var G__63255__$1 = (((G__63255 == null))?null:cljs.core.first.call(null,G__63255));
var G__63255__$2 = (((G__63255__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__63255__$1));
if((G__63255__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63255__$2)].join('');
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__46358__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__63253__auto__","l__63253__auto__",1683637239,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*logger*","om.next/*logger*",-530662591,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__46358__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.log","error","goog.log/error",-1510663407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__63253__auto__","l__63253__auto__",1683637239,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invariant Violation"),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__46358__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),(function (){var x__46358__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," (in function: `"),(function (){var x__46358__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"`)"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__46358__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})())));
}
});
var ret__46690__auto___63256 = om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_.call(null,condition,message,_AMPERSAND_env);
} else {
return null;
}
});
om.next.invariant.cljs$lang$macro = true;

if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
var expr_SINGLEQUOTE_ = cljs.core.first.call(null,expr);
if(cljs.core.map_QMARK_.call(null,expr_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_.call(null,expr)){
var G__63258 = expr;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,expr))){
return cljs.core.first.call(null,G__63258);
} else {
return G__63258;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid query expr "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__63259_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__63259_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__63259_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__63259_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__63260 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__63260;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__63293 = clojure.zip.down.call(null,loc);
var G__63294 = path__$1;
loc = G__63293;
path__$1 = G__63294;
continue;
} else {
var vec__63289 = path__$1;
var seq__63290 = cljs.core.seq.call(null,vec__63289);
var first__63291 = cljs.core.first.call(null,seq__63290);
var seq__63290__$1 = cljs.core.next.call(null,seq__63290);
var k = first__63291;
var ks = seq__63290__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core._EQ_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,(function (){var G__63292 = loc;
if(cljs.core.seq_QMARK_.call(null,node)){
return clojure.zip.down.call(null,G__63292);
} else {
return G__63292;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__63295 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__63296 = cljs.core.next.call(null,ks);
loc = G__63295;
path__$1 = G__63296;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__63297 = loc_SINGLEQUOTE_;
var G__63298 = ks;
loc = G__63297;
path__$1 = G__63298;
continue;
}
} else {
var G__63299 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__63300 = ks;
loc = G__63299;
path__$1 = G__63300;
continue;
}
} else {
var G__63301 = clojure.zip.right.call(null,loc);
var G__63302 = path__$1;
loc = G__63301;
path__$1 = G__63302;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?(function (){var join_value = cljs.core.second.call(null,cljs.core.first.call(null,expr));
var join_value__$1 = (((om.util.recursion_QMARK_.call(null,join_value)) && (cljs.core.seq.call(null,ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.ffirst.call(null,expr),om.next.focus_query_STAR_.call(null,join_value__$1,ks,null)]);
})():((cljs.core.seq_QMARK_.call(null,expr))?(function (){var x__46358__auto__ = om.next.focused_join.call(null,cljs.core.first.call(null,expr),ks,null,null);
return cljs.core._conj.call(null,(function (){var x__46358__auto____$1 = cljs.core.second.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto____$1);
})(),x__46358__auto__);
})():expr
));
var G__63304 = expr_SINGLEQUOTE_;
if(!((expr_meta == null))){
return cljs.core.with_meta.call(null,G__63304,expr_meta);
} else {
return G__63304;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__63308 = path;
var seq__63309 = cljs.core.seq.call(null,vec__63308);
var first__63310 = cljs.core.first.call(null,seq__63309);
var seq__63309__$1 = cljs.core.next.call(null,seq__63309);
var k = first__63310;
var ks = seq__63309__$1;
var match = ((function (vec__63308,seq__63309,first__63310,seq__63309__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__63308,seq__63309,first__63310,seq__63309__$1,k,ks))
;
var value = ((function (vec__63308,seq__63309,first__63310,seq__63309__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join.call(null,x,ks,query,union_expr);
});})(vec__63308,seq__63309,first__63310,seq__63309__$1,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,om.next.focus_query_STAR_.call(null,cljs.core.get.call(null,query,k),ks,query)]);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_.call(null,query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args63311 = [];
var len__46645__auto___63317 = arguments.length;
var i__46646__auto___63318 = (0);
while(true){
if((i__46646__auto___63318 < len__46645__auto___63317)){
args63311.push((arguments[i__46646__auto___63318]));

var G__63319 = (i__46646__auto___63318 + (1));
i__46646__auto___63318 = G__63319;
continue;
} else {
}
break;
}

var G__63313 = args63311.length;
switch (G__63313) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63311.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__45412__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__45412__auto__){
var and__45412__auto____$1 = cljs.core.some.call(null,om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__45412__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__45412__auto____$1;
}
} else {
return and__45412__auto__;
}
})())){
var vec__63314 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__63314,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__63314,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__63321 = focus_SINGLEQUOTE___$1;
var G__63322 = bound;
var G__63323 = cljs.core.conj.call(null,path,k);
focus = G__63321;
bound = G__63322;
path = G__63323;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__46142__auto__ = (((this$ == null))?null:this$);
var m__46143__auto__ = (om.next.ident[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,this$,props);
} else {
var m__46143__auto____$1 = (om.next.ident["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__46142__auto__ = (((this$ == null))?null:this$);
var m__46143__auto__ = (om.next.params[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,this$);
} else {
var m__46143__auto____$1 = (om.next.params["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__46142__auto__ = (((this$ == null))?null:this$);
var m__46143__auto__ = (om.next.query[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,this$);
} else {
var m__46143__auto____$1 = (om.next.query["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__46142__auto__ = (((this$ == null))?null:this$);
var m__46143__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,this$,new_state);
} else {
var m__46143__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__46142__auto__ = (((this$ == null))?null:this$);
var m__46143__auto__ = (om.next._get_state[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,this$);
} else {
var m__46143__auto____$1 = (om.next._get_state["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__46142__auto__ = (((this$ == null))?null:this$);
var m__46143__auto__ = (om.next._get_rendered_state[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,this$);
} else {
var m__46143__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__46142__auto__ = (((this$ == null))?null:this$);
var m__46143__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,this$);
} else {
var m__46143__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__45412__auto__ = (x instanceof cljs.core.Symbol);
if(and__45412__auto__){
return goog.string.startsWith([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),"?");
} else {
return and__45412__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__63324_SHARP_){
return om.next.bind_query.call(null,p1__63324_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next.replace_var.call(null,query,params)
));
var G__63327 = ret;
if(cljs.core.truth_((function (){var and__45412__auto__ = qm;
if(cljs.core.truth_(and__45412__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IMeta$))){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
}
} else {
return and__45412__auto__;
}
})())){
return cljs.core.with_meta.call(null,G__63327,qm);
} else {
return G__63327;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__63330 = om.next.get_reconciler.call(null,component);
var G__63330__$1 = (((G__63330 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__63330));
var G__63330__$2 = (((G__63330__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__63330__$1));
var G__63330__$3 = (((G__63330__$2 == null))?null:cljs.core.deref.call(null,G__63330__$2));
var G__63330__$4 = (((G__63330__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__63330__$3));
if((G__63330__$4 == null)){
return null;
} else {
return cljs.core.get.call(null,G__63330__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args63331 = [];
var len__46645__auto___63334 = arguments.length;
var i__46646__auto___63335 = (0);
while(true){
if((i__46646__auto___63335 < len__46645__auto___63334)){
args63331.push((arguments[i__46646__auto___63335]));

var G__63336 = (i__46646__auto___63335 + (1));
i__46646__auto___63335 = G__63336;
continue;
} else {
}
break;
}

var G__63333 = args63331.length;
switch (G__63333) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63331.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.call(null,component,om.next.component__GT_query_data.call(null,component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(query_data,om.next.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query violation, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(component),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" reuses "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" query")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(nil? c')")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(query_data,om.next.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),om.next.react_type.call(null,component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query violation, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" reuses "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" query")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(nil? c)")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.call(null,((function (component,class_path_query_data,data_path){
return (function (p1__63340_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__63340_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
var q = cljs.core.first.call(null,qs__$1);
var node = clojure.zip.node.call(null,q);
if(!(om.util.recursion_QMARK_.call(null,node))){
return node;
} else {
var G__63341 = component;
var G__63342 = class_path_query_data;
var G__63343 = cljs.core.pop.call(null,data_path);
component = G__63341;
class_path_query_data = G__63342;
data_path = G__63343;
continue;
}
} else {
return om.next.get_class_or_instance_query.call(null,component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$)))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
var temp__5276__auto__ = om.next.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__5276__auto__)){
var query_data = temp__5276__auto__;
return om.next.get_component_query.call(null,x,query_data);
} else {
var cp = om.next.class_path.call(null,x);
var r = om.next.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next.get_indexer.call(null,r))),cp);
return om.next.get_indexed_query.call(null,x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__5276__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5276__auto__)){
var rk = temp__5276__auto__;
return rk;
} else {
var temp__5276__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__5276__auto____$1)){
var idx = temp__5276__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cl.name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args63346 = [];
var len__46645__auto___63354 = arguments.length;
var i__46646__auto___63355 = (0);
while(true){
if((i__46646__auto___63355 < len__46645__auto___63354)){
args63346.push((arguments[i__46646__auto___63355]));

var G__63356 = (i__46646__auto___63355 + (1));
i__46646__auto___63355 = G__63356;
continue;
} else {
}
break;
}

var G__63348 = args63346.length;
switch (G__63348) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63346.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__63349){
var map__63350 = p__63349;
var map__63350__$1 = ((((!((map__63350 == null)))?((((map__63350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63350):map__63350);
var opts = map__63350__$1;
var validator = cljs.core.get.call(null,map__63350__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__63350__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.call(null,map__63350__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__63350,map__63350__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__45412__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__45412__auto__)){
return instrument_QMARK_;
} else {
return and__45412__auto__;
}
})())){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om.next.factory.call(null,class$,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__63353 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63353)].join('');
} else {
return G__63353;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,({"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_}),om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__63358__i = 0, G__63358__a = new Array(arguments.length -  1);
while (G__63358__i < G__63358__a.length) {G__63358__a[G__63358__i] = arguments[G__63358__i + 1]; ++G__63358__i;}
  children = new cljs.core.IndexedSeq(G__63358__a,0,null);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__63359){
var props = cljs.core.first(arglist__63359);
var children = cljs.core.rest(arglist__63359);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__63350,map__63350__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args63360 = [];
var len__46645__auto___63363 = arguments.length;
var i__46646__auto___63364 = (0);
while(true){
if((i__46646__auto___63364 < len__46645__auto___63363)){
args63360.push((arguments[i__46646__auto___63364]));

var G__63365 = (i__46646__auto___63364 + (1));
i__46646__auto___63364 = G__63365;
continue;
} else {
}
break;
}

var G__63362 = args63360.length;
switch (G__63362) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63360.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args63367 = [];
var len__46645__auto___63370 = arguments.length;
var i__46646__auto___63371 = (0);
while(true){
if((i__46646__auto___63371 < len__46645__auto___63370)){
args63367.push((arguments[i__46646__auto___63371]));

var G__63372 = (i__46646__auto___63371 + (1));
i__46646__auto___63371 = G__63372;
continue;
} else {
}
break;
}

var G__63369 = args63367.length;
switch (G__63369) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63367.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop.call(null,component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__45424__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args63374 = [];
var len__46645__auto___63379 = arguments.length;
var i__46646__auto___63380 = (0);
while(true){
if((i__46646__auto___63380 < len__46645__auto___63379)){
args63374.push((arguments[i__46646__auto___63380]));

var G__63381 = (i__46646__auto___63380 + (1));
i__46646__auto___63380 = G__63381;
continue;
} else {
}
break;
}

var G__63376 = args63374.length;
switch (G__63376) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63374.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__63377 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__63377],null));
} else {
return G__63377;
}
})();
var G__63378 = shared;
if(!(cljs.core.empty_QMARK_.call(null,ks))){
return cljs.core.get_in.call(null,G__63378,ks);
} else {
return G__63378;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__63384 = c.state;
goog.object.set(G__63384,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__63384;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__63387 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.vary_meta.call(null,G__63387,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__63387;
}
} else {
var G__63388 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.assoc.call(null,G__63388,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__63388;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args63389 = [];
var len__46645__auto___63394 = arguments.length;
var i__46646__auto___63395 = (0);
while(true){
if((i__46646__auto___63395 < len__46645__auto___63394)){
args63389.push((arguments[i__46646__auto___63395]));

var G__63396 = (i__46646__auto___63395 + (1));
i__46646__auto___63395 = G__63396;
continue;
} else {
}
break;
}

var G__63391 = args63389.length;
switch (G__63391) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63389.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__63392 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.props.call(null,G__63392);
} else {
return G__63392;
}
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__63393 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__63393],null));
} else {
return G__63393;
}
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false)){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__5276__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__5276__auto__)){
var r = temp__5276__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args63400 = [];
var len__46645__auto___63404 = arguments.length;
var i__46646__auto___63405 = (0);
while(true){
if((i__46646__auto___63405 < len__46645__auto___63404)){
args63400.push((arguments[i__46646__auto___63405]));

var G__63406 = (i__46646__auto___63405 + (1));
i__46646__auto___63405 = G__63406;
continue;
} else {
}
break;
}

var G__63402 = args63400.length;
switch (G__63402) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63400.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__5278__auto__ = component.state;
if(cljs.core.truth_(temp__5278__auto__)){
var state = temp__5278__auto__;
var or__45424__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args63408 = [];
var len__46645__auto___63418 = arguments.length;
var i__46646__auto___63419 = (0);
while(true){
if((i__46646__auto___63419 < len__46645__auto___63418)){
args63408.push((arguments[i__46646__auto___63419]));

var G__63420 = (i__46646__auto___63419 + (1));
i__46646__auto___63419 = G__63420;
continue;
} else {
}
break;
}

var G__63417 = args63408.length;
switch (G__63417) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__46668__auto__ = (new cljs.core.IndexedSeq(args63408.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__46668__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq63409){
var G__63410 = cljs.core.first.call(null,seq63409);
var seq63409__$1 = cljs.core.next.call(null,seq63409);
var G__63411 = cljs.core.first.call(null,seq63409__$1);
var seq63409__$2 = cljs.core.next.call(null,seq63409__$1);
var G__63412 = cljs.core.first.call(null,seq63409__$2);
var seq63409__$3 = cljs.core.next.call(null,seq63409__$2);
var G__63413 = cljs.core.first.call(null,seq63409__$3);
var seq63409__$4 = cljs.core.next.call(null,seq63409__$3);
var G__63414 = cljs.core.first.call(null,seq63409__$4);
var seq63409__$5 = cljs.core.next.call(null,seq63409__$4);
var G__63415 = cljs.core.first.call(null,seq63409__$5);
var seq63409__$6 = cljs.core.next.call(null,seq63409__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63410,G__63411,G__63412,G__63413,G__63414,G__63415,seq63409__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args63422 = [];
var len__46645__auto___63427 = arguments.length;
var i__46646__auto___63428 = (0);
while(true){
if((i__46646__auto___63428 < len__46645__auto___63427)){
args63422.push((arguments[i__46646__auto___63428]));

var G__63429 = (i__46646__auto___63428 + (1));
i__46646__auto___63428 = G__63429;
continue;
} else {
}
break;
}

var G__63424 = args63422.length;
switch (G__63424) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63422.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_rendered_state.call(null,component):(function (){var G__63426 = component;
var G__63426__$1 = (((G__63426 == null))?null:G__63426.state);
if((G__63426__$1 == null)){
return null;
} else {
return goog.object.get(G__63426__$1,"omcljs$state");
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$ILocalState$)))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__5278__auto__ = (function (){var G__63434 = c;
var G__63434__$1 = (((G__63434 == null))?null:G__63434.state);
if((G__63434__$1 == null)){
return null;
} else {
return goog.object.get(G__63434__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var pending = temp__5278__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args63435 = [];
var len__46645__auto___63438 = arguments.length;
var i__46646__auto___63439 = (0);
while(true){
if((i__46646__auto___63439 < len__46645__auto___63438)){
args63435.push((arguments[i__46646__auto___63439]));

var G__63440 = (i__46646__auto___63439 + (1));
i__46646__auto___63439 = G__63440;
continue;
} else {
}
break;
}

var G__63437 = args63435.length;
switch (G__63437) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63435.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"omcljs$state": new_state}),cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






/**
 * Given an environment, a query and a set of remotes return a hash map of remotes
 * mapped to the query specific to that remote.
 */
om.next.gather_sends = (function om$next$gather_sends(p__63443,q,remotes){
var map__63450 = p__63443;
var map__63450__$1 = ((((!((map__63450 == null)))?((((map__63450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63450):map__63450);
var env = map__63450__$1;
var parser = cljs.core.get.call(null,map__63450__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__63450,map__63450__$1,env,parser){
return (function (p1__63442_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__63442_SHARP_,parser.call(null,env,q,p1__63442_SHARP_)],null));
});})(map__63450,map__63450__$1,env,parser))
),cljs.core.filter.call(null,((function (map__63450,map__63450__$1,env,parser){
return (function (p__63452){
var vec__63453 = p__63452;
var _ = cljs.core.nth.call(null,vec__63453,(0),null);
var v = cljs.core.nth.call(null,vec__63453,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__63450,map__63450__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = om.next.full_query.call(null,c,with_target.call(null,target,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))));
return cljs.core.into.call(null,tx__$1,cljs.core.remove.call(null,cljs.core.set.call(null,tx__$1)),transformed);
});
var exprs = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var ast = om.next.impl.parser.expr__GT_ast.call(null,expr);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = om.next.ref__GT_components.call(null,r,key);
var G__63460 = cljs.core.next.call(null,exprs);
var G__63461 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__63456_SHARP_,p2__63457_SHARP_){
return add_focused_query.call(null,key,tgt,p1__63456_SHARP_,p2__63457_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__63459 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_.call(null,cs)){
return cljs.core.conj.call(null,G__63459,expr);
} else {
return G__63459;
}
})(),cs);
exprs = G__63460;
tx_SINGLEQUOTE_ = G__63461;
continue;
} else {
var G__63462 = cljs.core.next.call(null,exprs);
var G__63463 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__63462;
tx_SINGLEQUOTE_ = G__63463;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
} else {
return tx;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args63464 = [];
var len__46645__auto___63481 = arguments.length;
var i__46646__auto___63482 = (0);
while(true){
if((i__46646__auto___63482 < len__46645__auto___63481)){
args63464.push((arguments[i__46646__auto___63482]));

var G__63483 = (i__46646__auto___63482 + (1));
i__46646__auto___63482 = G__63483;
continue;
} else {
}
break;
}

var G__63466 = args63464.length;
switch (G__63466) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63464.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__63467,reads){
var map__63468 = p__63467;
var map__63468__$1 = ((((!((map__63468 == null)))?((((map__63468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63468):map__63468);
var params = cljs.core.get.call(null,map__63468__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__63468__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__45424__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return om.next.component_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_.call(null,reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next.component_QMARK_.call(null,x))?om.next.get_reconciler.call(null,x):x);
var c = ((om.next.component_QMARK_.call(null,x))?x:null);
var xs = ((!((c == null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null):cljs.core.PersistentVector.EMPTY);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));

var temp__5278__auto___63485 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5278__auto___63485)){
var l_63486 = temp__5278__auto___63485;
goog.log.info(l_63486,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto____$1 = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__5278__auto____$1)){
var ident = temp__5278__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ident)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__45424__auto__ = c;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_63487 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_63488 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__45424__auto__ = rootq_63487;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_63488)){
} else {
var seq__63471_63489 = cljs.core.seq.call(null,sends_63488);
var chunk__63472_63490 = null;
var count__63473_63491 = (0);
var i__63474_63492 = (0);
while(true){
if((i__63474_63492 < count__63473_63491)){
var vec__63475_63493 = cljs.core._nth.call(null,chunk__63472_63490,i__63474_63492);
var remote_63494 = cljs.core.nth.call(null,vec__63475_63493,(0),null);
var __63495 = cljs.core.nth.call(null,vec__63475_63493,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_63494);

var G__63496 = seq__63471_63489;
var G__63497 = chunk__63472_63490;
var G__63498 = count__63473_63491;
var G__63499 = (i__63474_63492 + (1));
seq__63471_63489 = G__63496;
chunk__63472_63490 = G__63497;
count__63473_63491 = G__63498;
i__63474_63492 = G__63499;
continue;
} else {
var temp__5278__auto___63500 = cljs.core.seq.call(null,seq__63471_63489);
if(temp__5278__auto___63500){
var seq__63471_63501__$1 = temp__5278__auto___63500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63471_63501__$1)){
var c__46335__auto___63502 = cljs.core.chunk_first.call(null,seq__63471_63501__$1);
var G__63503 = cljs.core.chunk_rest.call(null,seq__63471_63501__$1);
var G__63504 = c__46335__auto___63502;
var G__63505 = cljs.core.count.call(null,c__46335__auto___63502);
var G__63506 = (0);
seq__63471_63489 = G__63503;
chunk__63472_63490 = G__63504;
count__63473_63491 = G__63505;
i__63474_63492 = G__63506;
continue;
} else {
var vec__63478_63507 = cljs.core.first.call(null,seq__63471_63501__$1);
var remote_63508 = cljs.core.nth.call(null,vec__63478_63507,(0),null);
var __63509 = cljs.core.nth.call(null,vec__63478_63507,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_63508);

var G__63510 = cljs.core.next.call(null,seq__63471_63501__$1);
var G__63511 = null;
var G__63512 = (0);
var G__63513 = (0);
seq__63471_63489 = G__63510;
chunk__63472_63490 = G__63511;
count__63473_63491 = G__63512;
i__63474_63492 = G__63513;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_.call(null,r,sends_63488);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args63514 = [];
var len__46645__auto___63524 = arguments.length;
var i__46646__auto___63525 = (0);
while(true){
if((i__46646__auto___63525 < len__46645__auto___63524)){
args63514.push((arguments[i__46646__auto___63525]));

var G__63526 = (i__46646__auto___63525 + (1));
i__46646__auto___63525 = G__63526;
continue;
} else {
}
break;
}

var G__63523 = args63514.length;
switch (G__63523) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__46668__auto__ = (new cljs.core.IndexedSeq(args63514.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__46668__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.call(null,component,cljs.core.apply.call(null,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq63515){
var G__63516 = cljs.core.first.call(null,seq63515);
var seq63515__$1 = cljs.core.next.call(null,seq63515);
var G__63517 = cljs.core.first.call(null,seq63515__$1);
var seq63515__$2 = cljs.core.next.call(null,seq63515__$1);
var G__63518 = cljs.core.first.call(null,seq63515__$2);
var seq63515__$3 = cljs.core.next.call(null,seq63515__$2);
var G__63519 = cljs.core.first.call(null,seq63515__$3);
var seq63515__$4 = cljs.core.next.call(null,seq63515__$3);
var G__63520 = cljs.core.first.call(null,seq63515__$4);
var seq63515__$5 = cljs.core.next.call(null,seq63515__$4);
var G__63521 = cljs.core.first.call(null,seq63515__$5);
var seq63515__$6 = cljs.core.next.call(null,seq63515__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63516,G__63517,G__63518,G__63519,G__63520,G__63521,seq63515__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__63529 = component.refs;
if((G__63529 == null)){
return null;
} else {
return goog.object.get(G__63529,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args63530 = [];
var len__46645__auto___63533 = arguments.length;
var i__46646__auto___63534 = (0);
while(true){
if((i__46646__auto___63534 < len__46645__auto___63533)){
args63530.push((arguments[i__46646__auto___63534]));

var G__63535 = (i__46646__auto___63534 + (1));
i__46646__auto___63534 = G__63535;
continue;
} else {
}
break;
}

var G__63532 = args63530.length;
switch (G__63532) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63530.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"omcljs$value": next_props}),({"omcljs$state": next_state}));
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__46358__auto__ = om.next.react_type.call(null,c__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})();
while(true){
var temp__5276__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var p = temp__5276__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__63537 = p;
var G__63538 = cljs.core.cons.call(null,om.next.react_type.call(null,p),ret);
c__$1 = G__63537;
ret = G__63538;
continue;
} else {
var G__63539 = p;
var G__63540 = ret;
c__$1 = G__63539;
ret = G__63540;
continue;
}
} else {
return ret;
}
break;
}
});
/**
 * Return the component class path associated with a component.
 */
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next.raw_class_path.call(null,c);
var cp = cljs.core.seq.call(null,raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first.call(null,cp);
if(cljs.core.contains_QMARK_.call(null,seen,c__$1)){
var G__63541 = cljs.core.next.call(null,cp);
var G__63542 = ret;
var G__63543 = seen;
cp = G__63541;
ret = G__63542;
seen = G__63543;
continue;
} else {
var G__63544 = cljs.core.next.call(null,cp);
var G__63545 = cljs.core.conj.call(null,ret,c__$1);
var G__63546 = cljs.core.conj.call(null,seen,c__$1);
cp = G__63544;
ret = G__63545;
seen = G__63546;
continue;
}
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
 * Returns true if a component's classpath is recursive
 */
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,om.next.raw_class_path.call(null,c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__63548 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63548)].join('');
} else {
return G__63548;
}
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("get-ident invoked on component with nil props"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? m))")].join('')));
}

return om.next.ident.call(null,x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
return om.next.queue_render_BANG_.call(null,(function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args63549 = [];
var len__46645__auto___63552 = arguments.length;
var i__46646__auto___63553 = (0);
while(true){
if((i__46646__auto___63553 < len__46645__auto___63552)){
args63549.push((arguments[i__46646__auto___63553]));

var G__63554 = (i__46646__auto___63553 + (1));
i__46646__auto___63553 = G__63554;
continue;
} else {
}
break;
}

var G__63551 = args63549.length;
switch (G__63551) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63549.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__5278__auto___63556 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__5278__auto___63556)){
var old_reconciler_63557 = temp__5278__auto___63556;
om.next.remove_root_BANG_.call(null,old_reconciler_63557,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__46142__auto__ = (((c == null))?null:c);
var m__46143__auto__ = (om.next.tx_intercept[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,c,tx);
} else {
var m__46143__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__45412__auto__ = c;
if(cljs.core.truth_(and__45412__auto__)){
var and__45412__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__45412__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__45412__auto____$1;
}
} else {
return and__45412__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5278__auto__)){
var l = temp__5278__auto__;
return goog.log.info(l,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ref__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transacted '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var old_state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg));
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var xs = (function (){var G__63573 = cljs.core.PersistentVector.EMPTY;
var G__63573__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__63573,c):G__63573);
if(!((ref__$1 == null))){
return cljs.core.conj.call(null,G__63573__$1,ref__$1);
} else {
return G__63573__$1;
}
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,xs,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
} else {
var seq__63574_63584 = cljs.core.seq.call(null,snds);
var chunk__63575_63585 = null;
var count__63576_63586 = (0);
var i__63577_63587 = (0);
while(true){
if((i__63577_63587 < count__63576_63586)){
var vec__63578_63588 = cljs.core._nth.call(null,chunk__63575_63585,i__63577_63587);
var remote_63589 = cljs.core.nth.call(null,vec__63578_63588,(0),null);
var __63590__$2 = cljs.core.nth.call(null,vec__63578_63588,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_63589);

var G__63591 = seq__63574_63584;
var G__63592 = chunk__63575_63585;
var G__63593 = count__63576_63586;
var G__63594 = (i__63577_63587 + (1));
seq__63574_63584 = G__63591;
chunk__63575_63585 = G__63592;
count__63576_63586 = G__63593;
i__63577_63587 = G__63594;
continue;
} else {
var temp__5278__auto___63595 = cljs.core.seq.call(null,seq__63574_63584);
if(temp__5278__auto___63595){
var seq__63574_63596__$1 = temp__5278__auto___63595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63574_63596__$1)){
var c__46335__auto___63597 = cljs.core.chunk_first.call(null,seq__63574_63596__$1);
var G__63598 = cljs.core.chunk_rest.call(null,seq__63574_63596__$1);
var G__63599 = c__46335__auto___63597;
var G__63600 = cljs.core.count.call(null,c__46335__auto___63597);
var G__63601 = (0);
seq__63574_63584 = G__63598;
chunk__63575_63585 = G__63599;
count__63576_63586 = G__63600;
i__63577_63587 = G__63601;
continue;
} else {
var vec__63581_63602 = cljs.core.first.call(null,seq__63574_63596__$1);
var remote_63603 = cljs.core.nth.call(null,vec__63581_63602,(0),null);
var __63604__$2 = cljs.core.nth.call(null,vec__63581_63602,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_63603);

var G__63605 = cljs.core.next.call(null,seq__63574_63596__$1);
var G__63606 = null;
var G__63607 = (0);
var G__63608 = (0);
seq__63574_63584 = G__63605;
chunk__63575_63585 = G__63606;
count__63576_63586 = G__63607;
i__63577_63587 = G__63608;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_.call(null,r,snds);

om.next.schedule_sends_BANG_.call(null,r);
}

var temp__5278__auto___63609 = new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5278__auto___63609)){
var f_63610 = temp__5278__auto___63609;
var tx_data_63611 = cljs.core.merge.call(null,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg))], null));
f_63610.call(null,tx_data_63611,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"ret","ret",-468222814),v,new cljs.core.Keyword(null,"sends","sends",-1708040810),snds], null));
} else {
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__63620 = expr;
if(om.util.mutation_QMARK_.call(null,expr)){
return cljs.core.vary_meta.call(null,G__63620,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__63620;
}
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__63612_SHARP_){
return annotate.call(null,p1__63612_SHARP_,ident);
})),tx);
});
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_.call(null,c__$1)){
return true;
} else {
var G__63621 = om.next.parent.call(null,c__$1);
c__$1 = G__63621;
continue;

}
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args63622 = [];
var len__46645__auto___63632 = arguments.length;
var i__46646__auto___63633 = (0);
while(true){
if((i__46646__auto___63633 < len__46645__auto___63632)){
args63622.push((arguments[i__46646__auto___63633]));

var G__63634 = (i__46646__auto___63633 + (1));
i__46646__auto___63633 = G__63634;
continue;
} else {
}
break;
}

var G__63624 = args63622.length;
switch (G__63624) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63622.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__45424__auto__ = om.next.component_QMARK_.call(null,x);
if(or__45424__auto__){
return or__45424__auto__;
} else {
return om.next.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__63625 = tx;
if((function (){var and__45412__auto__ = om.next.component_QMARK_.call(null,x);
if(and__45412__auto__){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$Ident$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
}
} else {
return and__45412__auto__;
}
})()){
return om.next.annotate_mutations.call(null,G__63625,om.next.get_ident.call(null,x));
} else {
return G__63625;
}
})();
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_.call(null,x))){
var l__62145__auto___63636 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_.call(null,x))){
} else {
goog.log.error(l__62145__auto___63636,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invariant Violation"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (in function: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`)")].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("transact! should be called on a component"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("that implements IQuery or has a parent that"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("implements IQuery")].join(''))].join(''));
}

return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),null,null,tx__$1);
} else {
var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$2));
} else {
var vec__63628 = ((((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.om$next$ITxIntercept$)))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__63628,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__63628,(1),null);
var G__63637 = om.next.parent.call(null,p);
var G__63638 = x_SINGLEQUOTE_;
var G__63639 = tx__$3;
p = G__63637;
x__$1 = G__63638;
tx__$2 = G__63639;
continue;
}
break;
}

}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__63640){
var map__63643 = p__63640;
var map__63643__$1 = ((((!((map__63643 == null)))?((((map__63643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63643):map__63643);
var opts = map__63643__$1;
var read = cljs.core.get.call(null,map__63643__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__63643__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
});
om.next.get_dispatch_key = (function om$next$get_dispatch_key(prop){
var G__63646 = prop;
if((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",-1201019570,null)))){
return cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast).call(null,G__63646);
} else {
return G__63646;
}
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__63649 = rendered_data_path;
if(!(cljs.core.empty_QMARK_.call(null,rendered_data_path))){
return cljs.core.pop.call(null,G__63649);
} else {
return G__63649;
}
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__63647_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__63647_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.call(null,class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__45424__auto__ = cljs.core.map_QMARK_.call(null,clojure.zip.node.call(null,q));
if(or__45424__auto__){
return or__45424__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.peek.call(null,data_path__$1)]),union_keys);
}
})())?(function (){var union_key = cljs.core.peek.call(null,data_path__$1);
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template.call(null,om.next.focus_query.call(null,om.next.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__63650 = cljs.core.pop.call(null,cp);
var G__63651 = cljs.core.pop.call(null,data_path__$1);
var G__63652 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__63653 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__63650;
data_path__$1 = G__63651;
new_query__$1 = G__63652;
ret = G__63653;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var root_class = (function (){var G__63661 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.react_type.call(null,G__63661);
} else {
return G__63661;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__62145__auto___63778 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_.call(null,class$))) || ((om.next.iquery_QMARK_.call(null,class$)) && (!(cljs.core.empty_QMARK_.call(null,query))))){
} else {
goog.log.error(l__62145__auto___63778,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invariant Violation"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((("build-index*" == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (in function: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("build-index*"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`)")].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("`IQuery` implementation must return a non-empty query."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Check the `IQuery` implementation of component `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((om.next.component_QMARK_.call(null,class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`.")].join(''))].join(''));
}

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([class$]),classpath);
var classpath__$1 = (function (){var G__63743 = classpath;
if((!((class$ == null))) && (cljs.core.not.call(null,recursive_QMARK_))){
return cljs.core.conj.call(null,G__63743,class$);
} else {
return G__63743;
}
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750)], null));
if(cljs.core.truth_(class$)){
var root_query_63779 = ((cljs.core.empty_QMARK_.call(null,path))?rootq:clojure.zip.root.call(null,cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,root_query_63779,path),path));
} else {
}

var recursive_join_QMARK_ = (function (){var and__45412__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__45412__auto__)){
var and__45412__auto____$1 = cljs.core.some.call(null,((function (and__45412__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (e){
var and__45412__auto____$1 = om.util.join_QMARK_.call(null,e);
if(cljs.core.truth_(and__45412__auto____$1)){
return !(om.util.recursion_QMARK_.call(null,om.util.join_value.call(null,e)));
} else {
return and__45412__auto____$1;
}
});})(and__45412__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,query);
if(cljs.core.truth_(and__45412__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__45412__auto____$1;
}
} else {
return and__45412__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__45412__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__45412__auto__)){
var and__45412__auto____$1 = union_expr;
if(cljs.core.truth_(and__45412__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__45412__auto____$1;
}
} else {
return and__45412__auto__;
}
})();
if(cljs.core.truth_((function (){var or__45424__auto__ = cljs.core.not.call(null,recursive_QMARK_);
if(or__45424__auto__){
return or__45424__auto__;
} else {
var or__45424__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__45424__auto____$1)){
return or__45424__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_.call(null,query)){
var map__63744 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__63744__$1 = ((((!((map__63744 == null)))?((((map__63744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63744):map__63744);
var props = cljs.core.get.call(null,map__63744__$1,false);
var joins = cljs.core.get.call(null,map__63744__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__63744,map__63744__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__63654_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__63654_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,om.next.get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([class$]))));
});})(map__63744,map__63744__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__63746 = cljs.core.seq.call(null,joins);
var chunk__63747 = null;
var count__63748 = (0);
var i__63749 = (0);
while(true){
if((i__63749 < count__63748)){
var join = cljs.core._nth.call(null,chunk__63747,i__63749);
var vec__63750_63780 = om.util.join_entry.call(null,join);
var prop_63781 = cljs.core.nth.call(null,vec__63750_63780,(0),null);
var query_SINGLEQUOTE__63782 = cljs.core.nth.call(null,vec__63750_63780,(1),null);
var prop_dispatch_key_63783 = om.next.get_dispatch_key.call(null,prop_63781);
var recursion_QMARK__63784 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__63782);
var union_recursion_QMARK__63785 = (function (){var and__45412__auto__ = recursion_QMARK__63784;
if(and__45412__auto__){
return union_expr;
} else {
return and__45412__auto__;
}
})();
var query_SINGLEQUOTE__63786__$1 = ((recursion_QMARK__63784)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__63782);
var path_SINGLEQUOTE__63787 = cljs.core.conj.call(null,path,prop_63781);
var rendered_path_SINGLEQUOTE__63788 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__63787));
var cs_63789 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__63788);
var cascade_query_QMARK__63790 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_63789),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__63786__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_63789)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__63786__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__63791 = ((cascade_query_QMARK__63790)?om.next.get_query.call(null,cljs.core.first.call(null,cs_63789)):query_SINGLEQUOTE__63786__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__63746,chunk__63747,count__63748,i__63749,vec__63750_63780,prop_63781,query_SINGLEQUOTE__63782,prop_dispatch_key_63783,recursion_QMARK__63784,union_recursion_QMARK__63785,query_SINGLEQUOTE__63786__$1,path_SINGLEQUOTE__63787,rendered_path_SINGLEQUOTE__63788,cs_63789,cascade_query_QMARK__63790,query_SINGLEQUOTE__SINGLEQUOTE__63791,join,map__63744,map__63744__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__63655_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__63655_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop_dispatch_key_63783,cljs.core.PersistentHashSet.createAsIfByAssoc([class$])]));
});})(seq__63746,chunk__63747,count__63748,i__63749,vec__63750_63780,prop_63781,query_SINGLEQUOTE__63782,prop_dispatch_key_63783,recursion_QMARK__63784,union_recursion_QMARK__63785,query_SINGLEQUOTE__63786__$1,path_SINGLEQUOTE__63787,rendered_path_SINGLEQUOTE__63788,cs_63789,cascade_query_QMARK__63790,query_SINGLEQUOTE__SINGLEQUOTE__63791,join,map__63744,map__63744__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__63790) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__63786__$1,query_SINGLEQUOTE__SINGLEQUOTE__63791))){
var cp__GT_q_SINGLEQUOTE__63792 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__63787,query_SINGLEQUOTE__SINGLEQUOTE__63791,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__63792);
} else {
}

var class_SINGLEQUOTE__63793 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__63791));
if((recursion_QMARK__63784) && ((class_SINGLEQUOTE__63793 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__63793,query_SINGLEQUOTE__SINGLEQUOTE__63791,path_SINGLEQUOTE__63787,classpath__$1,((recursion_QMARK__63784)?union_expr:null),union_keys);
}

var G__63794 = seq__63746;
var G__63795 = chunk__63747;
var G__63796 = count__63748;
var G__63797 = (i__63749 + (1));
seq__63746 = G__63794;
chunk__63747 = G__63795;
count__63748 = G__63796;
i__63749 = G__63797;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__63746);
if(temp__5278__auto__){
var seq__63746__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63746__$1)){
var c__46335__auto__ = cljs.core.chunk_first.call(null,seq__63746__$1);
var G__63798 = cljs.core.chunk_rest.call(null,seq__63746__$1);
var G__63799 = c__46335__auto__;
var G__63800 = cljs.core.count.call(null,c__46335__auto__);
var G__63801 = (0);
seq__63746 = G__63798;
chunk__63747 = G__63799;
count__63748 = G__63800;
i__63749 = G__63801;
continue;
} else {
var join = cljs.core.first.call(null,seq__63746__$1);
var vec__63753_63802 = om.util.join_entry.call(null,join);
var prop_63803 = cljs.core.nth.call(null,vec__63753_63802,(0),null);
var query_SINGLEQUOTE__63804 = cljs.core.nth.call(null,vec__63753_63802,(1),null);
var prop_dispatch_key_63805 = om.next.get_dispatch_key.call(null,prop_63803);
var recursion_QMARK__63806 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__63804);
var union_recursion_QMARK__63807 = (function (){var and__45412__auto__ = recursion_QMARK__63806;
if(and__45412__auto__){
return union_expr;
} else {
return and__45412__auto__;
}
})();
var query_SINGLEQUOTE__63808__$1 = ((recursion_QMARK__63806)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__63804);
var path_SINGLEQUOTE__63809 = cljs.core.conj.call(null,path,prop_63803);
var rendered_path_SINGLEQUOTE__63810 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__63809));
var cs_63811 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__63810);
var cascade_query_QMARK__63812 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_63811),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__63808__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_63811)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__63808__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__63813 = ((cascade_query_QMARK__63812)?om.next.get_query.call(null,cljs.core.first.call(null,cs_63811)):query_SINGLEQUOTE__63808__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__63746,chunk__63747,count__63748,i__63749,vec__63753_63802,prop_63803,query_SINGLEQUOTE__63804,prop_dispatch_key_63805,recursion_QMARK__63806,union_recursion_QMARK__63807,query_SINGLEQUOTE__63808__$1,path_SINGLEQUOTE__63809,rendered_path_SINGLEQUOTE__63810,cs_63811,cascade_query_QMARK__63812,query_SINGLEQUOTE__SINGLEQUOTE__63813,join,seq__63746__$1,temp__5278__auto__,map__63744,map__63744__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__63655_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__63655_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop_dispatch_key_63805,cljs.core.PersistentHashSet.createAsIfByAssoc([class$])]));
});})(seq__63746,chunk__63747,count__63748,i__63749,vec__63753_63802,prop_63803,query_SINGLEQUOTE__63804,prop_dispatch_key_63805,recursion_QMARK__63806,union_recursion_QMARK__63807,query_SINGLEQUOTE__63808__$1,path_SINGLEQUOTE__63809,rendered_path_SINGLEQUOTE__63810,cs_63811,cascade_query_QMARK__63812,query_SINGLEQUOTE__SINGLEQUOTE__63813,join,seq__63746__$1,temp__5278__auto__,map__63744,map__63744__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__63812) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__63808__$1,query_SINGLEQUOTE__SINGLEQUOTE__63813))){
var cp__GT_q_SINGLEQUOTE__63814 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__63809,query_SINGLEQUOTE__SINGLEQUOTE__63813,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__63814);
} else {
}

var class_SINGLEQUOTE__63815 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__63813));
if((recursion_QMARK__63806) && ((class_SINGLEQUOTE__63815 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__63815,query_SINGLEQUOTE__SINGLEQUOTE__63813,path_SINGLEQUOTE__63809,classpath__$1,((recursion_QMARK__63806)?union_expr:null),union_keys);
}

var G__63816 = cljs.core.next.call(null,seq__63746__$1);
var G__63817 = null;
var G__63818 = (0);
var G__63819 = (0);
seq__63746 = G__63816;
chunk__63747 = G__63817;
count__63748 = G__63818;
i__63749 = G__63819;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__63756 = cljs.core.seq.call(null,query);
var chunk__63757 = null;
var count__63758 = (0);
var i__63759 = (0);
while(true){
if((i__63759 < count__63758)){
var vec__63760 = cljs.core._nth.call(null,chunk__63757,i__63759);
var prop = cljs.core.nth.call(null,vec__63760,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__63760,(1),null);
var path_SINGLEQUOTE__63820 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__63821 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_63822 = cljs.core.filter.call(null,((function (seq__63756,chunk__63757,count__63758,i__63759,path_SINGLEQUOTE__63820,class_SINGLEQUOTE__63821,vec__63760,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__63656_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__63821,om.next.react_type.call(null,p1__63656_SHARP_));
});})(seq__63756,chunk__63757,count__63758,i__63759,path_SINGLEQUOTE__63820,class_SINGLEQUOTE__63821,vec__63760,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__63823 = (function (){var and__45412__auto__ = class_SINGLEQUOTE__63821;
if(cljs.core.truth_(and__45412__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_63822),(1));
} else {
return and__45412__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__63824 = (cljs.core.truth_(cascade_query_QMARK__63823)?om.next.get_query.call(null,cljs.core.first.call(null,cs_63822)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__45412__auto__ = cascade_query_QMARK__63823;
if(cljs.core.truth_(and__45412__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__63824);
} else {
return and__45412__auto__;
}
})())){
var qs_63825 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_63826 = cljs.core.first.call(null,qs_63825);
var qnode_63827 = clojure.zip.node.call(null,(function (){var G__63763 = q_63826;
if((class$ == null)){
return om.next.query_template.call(null,G__63763,path);
} else {
return G__63763;
}
})());
var new_query_63828 = cljs.core.assoc.call(null,qnode_63827,prop,query_SINGLEQUOTE__SINGLEQUOTE__63824);
var q_SINGLEQUOTE__63829 = (function (){var G__63764 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_63826),path),new_query_63828);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__63764),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__63764;
}
})();
var qs_SINGLEQUOTE__63830 = cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_SINGLEQUOTE__63829]),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_63826])),qs_63825);
var cp__GT_q_SINGLEQUOTE__63831 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([classpath__$1,qs_SINGLEQUOTE__63830]),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__63829),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__63831);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__63821,query_SINGLEQUOTE__SINGLEQUOTE__63824,path_SINGLEQUOTE__63820,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__63832 = seq__63756;
var G__63833 = chunk__63757;
var G__63834 = count__63758;
var G__63835 = (i__63759 + (1));
seq__63756 = G__63832;
chunk__63757 = G__63833;
count__63758 = G__63834;
i__63759 = G__63835;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__63756);
if(temp__5278__auto__){
var seq__63756__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63756__$1)){
var c__46335__auto__ = cljs.core.chunk_first.call(null,seq__63756__$1);
var G__63836 = cljs.core.chunk_rest.call(null,seq__63756__$1);
var G__63837 = c__46335__auto__;
var G__63838 = cljs.core.count.call(null,c__46335__auto__);
var G__63839 = (0);
seq__63756 = G__63836;
chunk__63757 = G__63837;
count__63758 = G__63838;
i__63759 = G__63839;
continue;
} else {
var vec__63765 = cljs.core.first.call(null,seq__63756__$1);
var prop = cljs.core.nth.call(null,vec__63765,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__63765,(1),null);
var path_SINGLEQUOTE__63840 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__63841 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_63842 = cljs.core.filter.call(null,((function (seq__63756,chunk__63757,count__63758,i__63759,path_SINGLEQUOTE__63840,class_SINGLEQUOTE__63841,vec__63765,prop,query_SINGLEQUOTE_,seq__63756__$1,temp__5278__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__63656_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__63841,om.next.react_type.call(null,p1__63656_SHARP_));
});})(seq__63756,chunk__63757,count__63758,i__63759,path_SINGLEQUOTE__63840,class_SINGLEQUOTE__63841,vec__63765,prop,query_SINGLEQUOTE_,seq__63756__$1,temp__5278__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__63843 = (function (){var and__45412__auto__ = class_SINGLEQUOTE__63841;
if(cljs.core.truth_(and__45412__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_63842),(1));
} else {
return and__45412__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__63844 = (cljs.core.truth_(cascade_query_QMARK__63843)?om.next.get_query.call(null,cljs.core.first.call(null,cs_63842)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__45412__auto__ = cascade_query_QMARK__63843;
if(cljs.core.truth_(and__45412__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__63844);
} else {
return and__45412__auto__;
}
})())){
var qs_63845 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_63846 = cljs.core.first.call(null,qs_63845);
var qnode_63847 = clojure.zip.node.call(null,(function (){var G__63768 = q_63846;
if((class$ == null)){
return om.next.query_template.call(null,G__63768,path);
} else {
return G__63768;
}
})());
var new_query_63848 = cljs.core.assoc.call(null,qnode_63847,prop,query_SINGLEQUOTE__SINGLEQUOTE__63844);
var q_SINGLEQUOTE__63849 = (function (){var G__63769 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_63846),path),new_query_63848);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__63769),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__63769;
}
})();
var qs_SINGLEQUOTE__63850 = cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_SINGLEQUOTE__63849]),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_63846])),qs_63845);
var cp__GT_q_SINGLEQUOTE__63851 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([classpath__$1,qs_SINGLEQUOTE__63850]),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__63849),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__63851);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__63841,query_SINGLEQUOTE__SINGLEQUOTE__63844,path_SINGLEQUOTE__63840,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__63852 = cljs.core.next.call(null,seq__63756__$1);
var G__63853 = null;
var G__63854 = (0);
var G__63855 = (0);
seq__63756 = G__63852;
chunk__63757 = G__63853;
count__63758 = G__63854;
i__63759 = G__63855;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
;
build_index_STAR_.call(null,root_class,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),om.next.react_type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__62145__auto___63856 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_.call(null,ident)){
} else {
goog.log.error(l__62145__auto___63856,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invariant Violation"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (in function: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`)")].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("malformed Ident. An ident must be a vector of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("two elements (a keyword and an EDN value). Check "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("the Ident implementation of component `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`.")].join(''))].join(''));
}

var l__62145__auto___63857 = om.next._STAR_logger_STAR_;
if(!((cljs.core.second.call(null,ident) == null))){
} else {
goog.log.error(l__62145__auto___63857,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invariant Violation"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (in function: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`)")].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("component "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'s ident ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") has a `nil` second element."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" This warning can be safely ignored if that is intended.")].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__63771 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__63771,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__63771;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),om.next.react_type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__63773 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__63773,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__63773;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([k]);
} else {
var temp__5276__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",-303587249).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__5276__auto__)){
var cs = temp__5276__auto__;
return cs;
} else {
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (temp__5276__auto__,indexes__$1,___$1){
return (function (p1__63657_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__63657_SHARP_], null));
});})(temp__5276__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null)));
}
}
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__46099__auto__,k__46100__auto__){
var self__ = this;
var this__46099__auto____$1 = this;
return this__46099__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__46100__auto__,null);
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__46101__auto__,k63659,else__46102__auto__){
var self__ = this;
var this__46101__auto____$1 = this;
var G__63774 = k63659;
var G__63774__$1 = (((G__63774 instanceof cljs.core.Keyword))?G__63774.fqn:null);
switch (G__63774__$1) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63659,else__46102__auto__);

}
});


om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__46113__auto__,writer__46114__auto__,opts__46115__auto__){
var self__ = this;
var this__46113__auto____$1 = this;
var pr_pair__46116__auto__ = ((function (this__46113__auto____$1){
return (function (keyval__46117__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__46114__auto__,cljs.core.pr_writer,""," ","",opts__46115__auto__,keyval__46117__auto__);
});})(this__46113__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__46114__auto__,pr_pair__46116__auto__,"#om.next.Indexer{",", ","}",opts__46115__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63658){
var self__ = this;
var G__63658__$1 = this;
return (new cljs.core.RecordIter((0),G__63658__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__46097__auto__){
var self__ = this;
var this__46097__auto____$1 = this;
return self__.__meta;
});


om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__46093__auto__){
var self__ = this;
var this__46093__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__46103__auto__){
var self__ = this;
var this__46103__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__46094__auto__){
var self__ = this;
var this__46094__auto____$1 = this;
var h__45866__auto__ = self__.__hash;
if(!((h__45866__auto__ == null))){
return h__45866__auto__;
} else {
var h__45866__auto____$1 = cljs.core.hash_imap.call(null,this__46094__auto____$1);
self__.__hash = h__45866__auto____$1;

return h__45866__auto____$1;
}
});


om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__46095__auto__,other__46096__auto__){
var self__ = this;
var this__46095__auto____$1 = this;
if(cljs.core.truth_((function (){var and__45412__auto__ = other__46096__auto__;
if(cljs.core.truth_(and__45412__auto__)){
return ((this__46095__auto____$1.constructor === other__46096__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__46095__auto____$1,other__46096__auto__));
} else {
return and__45412__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__46108__auto__,k__46109__auto__){
var self__ = this;
var this__46108__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extfs","extfs",607041493),null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__46109__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__46108__auto____$1),self__.__meta),k__46109__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__46109__auto__)),null));
}
});


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__46106__auto__,k__46107__auto__,G__63658){
var self__ = this;
var this__46106__auto____$1 = this;
var pred__63775 = cljs.core.keyword_identical_QMARK_;
var expr__63776 = k__46107__auto__;
if(cljs.core.truth_(pred__63775.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__63776))){
return (new om.next.Indexer(G__63658,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63775.call(null,new cljs.core.Keyword(null,"extfs","extfs",607041493),expr__63776))){
return (new om.next.Indexer(self__.indexes,G__63658,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__46107__auto__,G__63658),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__46111__auto__){
var self__ = this;
var this__46111__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__46098__auto__,G__63658){
var self__ = this;
var this__46098__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__63658,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__46104__auto__,entry__46105__auto__){
var self__ = this;
var this__46104__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__46105__auto__)){
return this__46104__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__46105__auto__,(0)),cljs.core._nth.call(null,entry__46105__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__46104__auto____$1,entry__46105__auto__);
}
});


om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null),new cljs.core.Symbol(null,"extfs","extfs",-2047394276,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__46135__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__46135__auto__,writer__46136__auto__){
return cljs.core._write.call(null,writer__46136__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__63660){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__63660),new cljs.core.Keyword(null,"extfs","extfs",607041493).cljs$core$IFn$_invoke$arity$1(G__63660),null,cljs.core.dissoc.call(null,G__63660,new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args63859 = [];
var len__46645__auto___63862 = arguments.length;
var i__46646__auto___63863 = (0);
while(true){
if((i__46646__auto___63863 < len__46645__auto___63862)){
args63859.push((arguments[i__46646__auto___63863]));

var G__63864 = (i__46646__auto___63863 + (1));
i__46646__auto___63863 = G__63864;
continue;
} else {
}
break;
}

var G__63861 = args63859.length;
switch (G__63861) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63859.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",-1258618905),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"drop-component","drop-component",1805913749),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args63867 = [];
var len__46645__auto___63871 = arguments.length;
var i__46646__auto___63872 = (0);
while(true){
if((i__46646__auto___63872 < len__46645__auto___63871)){
args63867.push((arguments[i__46646__auto___63872]));

var G__63873 = (i__46646__auto___63872 + (1));
i__46646__auto___63872 = G__63873;
continue;
} else {
}
break;
}

var G__63869 = args63867.length;
switch (G__63869) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63867.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var xf = (function (){var G__63870 = cljs.core.remove.call(null,cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_.call(null,component)){
return cljs.core.comp.call(null,cljs.core.distinct.call(null),G__63870);
} else {
return G__63870;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__63866_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,cljs.core.mapv.call(null,om.next.get_dispatch_key,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__63866_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("No queries exist at the intersection of component path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" and data path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("No queries exist for component path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
var ident = ((((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om.next.normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first.call(null,ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var vec__63895 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__63895,(0),null);
var sel = cljs.core.nth.call(null,vec__63895,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__63910 = cljs.core.next.call(null,q);
var G__63911 = ret;
q = G__63910;
ret = G__63911;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om.next.normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__63912 = cljs.core.next.call(null,q);
var G__63913 = cljs.core.assoc.call(null,ret,k,i);
q = G__63912;
ret = G__63913;
continue;
} else {
var G__63914 = cljs.core.next.call(null,q);
var G__63915 = cljs.core.assoc.call(null,ret,k,x);
q = G__63914;
ret = G__63915;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__63875_SHARP_){
return om.next.normalize_STAR_.call(null,sel__$1,p1__63875_SHARP_,refs,union_entry);
});})(q,ret,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__63877_SHARP_){
return om.next.ident.call(null,class$,p1__63877_SHARP_);
});})(q,ret,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__63902){
var vec__63903 = p__63902;
var i = cljs.core.nth.call(null,vec__63903,(0),null);
var x = cljs.core.nth.call(null,vec__63903,(1),null);
return cljs.core.update_in.call(null,m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap.call(null,is,xs));
});})(q,ret,is,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__63906){
var vec__63907 = p__63906;
var i = cljs.core.nth.call(null,vec__63907,(0),null);
var x = cljs.core.nth.call(null,vec__63907,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__63895,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__63916 = cljs.core.next.call(null,q);
var G__63917 = cljs.core.assoc.call(null,ret,k,is);
q = G__63916;
ret = G__63917;
continue;
} else {
var G__63918 = cljs.core.next.call(null,q);
var G__63919 = cljs.core.assoc.call(null,ret,k,xs);
q = G__63918;
ret = G__63919;
continue;
}
} else {
if((v == null)){
var G__63920 = cljs.core.next.call(null,q);
var G__63921 = ret;
q = G__63920;
ret = G__63921;
continue;
} else {
var G__63922 = cljs.core.next.call(null,q);
var G__63923 = cljs.core.assoc.call(null,ret,k,v);
q = G__63922;
ret = G__63923;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__63924 = cljs.core.next.call(null,q);
var G__63925 = ret;
q = G__63924;
ret = G__63925;
continue;
} else {
var G__63926 = cljs.core.next.call(null,q);
var G__63927 = cljs.core.assoc.call(null,ret,k,v);
q = G__63926;
ret = G__63927;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args63928 = [];
var len__46645__auto___63931 = arguments.length;
var i__46646__auto___63932 = (0);
while(true){
if((i__46646__auto___63932 < len__46645__auto___63931)){
args63928.push((arguments[i__46646__auto___63932]));

var G__63933 = (i__46646__auto___63932 + (1));
i__46646__auto___63932 = G__63933;
continue;
} else {
}
break;
}

var G__63930 = args63928.length;
switch (G__63930) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63928.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__63938 = cljs.core.group_by.call(null,(function (p1__63935_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__63935_SHARP_));
}),res);
var map__63938__$1 = ((((!((map__63938 == null)))?((((map__63938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63938):map__63938);
var idents = cljs.core.get.call(null,map__63938__$1,true);
var rest = cljs.core.get.call(null,map__63938__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__63941 = node;
if(typeof node === 'number'){
return (G__63941 - (1));
} else {
return G__63941;
}
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__63946){
var vec__63947 = p__63946;
var k = cljs.core.nth.call(null,vec__63947,(0),null);
var q = cljs.core.nth.call(null,vec__63947,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_.call(null,ident)) && (cljs.core.contains_QMARK_.call(null,refs,cljs.core.first.call(null,ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__45412__auto__ = union_expr;
if(cljs.core.truth_(and__45412__auto__)){
return recurse_key;
} else {
return and__45412__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,data__$1))){
var G__63997 = cljs.core.get_in.call(null,refs,map_ident.call(null,data__$1));
data__$1 = G__63997;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not.call(null,om.next.mappable_ident_QMARK_.call(null,refs,ident))){
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
return ident;
} else {
var map__63975 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__63975__$1 = ((((!((map__63975 == null)))?((((map__63975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63975):map__63975);
var props = cljs.core.get.call(null,map__63975__$1,false);
var joins = cljs.core.get.call(null,map__63975__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__63975,map__63975__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__63950_SHARP_){
var G__63977 = p1__63950_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__63950_SHARP_)){
return cljs.core.first.call(null,G__63977);
} else {
return G__63977;
}
});})(map__63975,map__63975__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__63978 = om.util.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__63978,(0),null);
var sel = cljs.core.nth.call(null,vec__63978,(1),null);
var v = cljs.core.get.call(null,ident,key);
var G__63998 = cljs.core.next.call(null,joins__$1);
var G__63999 = cljs.core.assoc.call(null,ret,key,om.next.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__63998;
ret = G__63999;
continue;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,ident,props__$1),ret);
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var query__$1 = (function (){var G__63981 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__63981,recurse_key);
} else {
return G__63981;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__63982 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__63982,recurse_key);
} else {
return G__63982;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__63983 = query__$1;
if(cljs.core.map_QMARK_.call(null,query__$1)){
return cljs.core.get.call(null,G__63983,cljs.core.first.call(null,ident));
} else {
return G__63983;
}
})();
return om.next.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__45412__auto__ = cljs.core.map_QMARK_.call(null,query);
if(and__45412__auto__){
return union_recur_QMARK_;
} else {
return and__45412__auto__;
}
})())){
return om.next.denormalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__63984 = cljs.core.group_by.call(null,((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__63951_SHARP_){
var or__45424__auto__ = om.util.join_QMARK_.call(null,p1__63951_SHARP_);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__63951_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__63951_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__63951_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__63984__$1 = ((((!((map__63984 == null)))?((((map__63984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63984):map__63984);
var props = cljs.core.get.call(null,map__63984__$1,false);
var joins = cljs.core.get.call(null,map__63984__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__63984,map__63984__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__63952_SHARP_){
var G__63986 = p1__63952_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__63952_SHARP_)){
return cljs.core.first.call(null,G__63986);
} else {
return G__63986;
}
});})(map__63984,map__63984__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__63990 = join;
if(cljs.core.seq_QMARK_.call(null,join)){
return cljs.core.first.call(null,G__63990);
} else {
return G__63990;
}
})();
var join__$2 = (function (){var G__63991 = join__$1;
if(om.util.ident_QMARK_.call(null,join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__63991],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__63991;
}
})();
var vec__63987 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__63987,(0),null);
var sel = cljs.core.nth.call(null,vec__63987,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__63992 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__63992);
} else {
return G__63992;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.call(null,refs,map_ident.call(null,v__$1));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,next))){
var G__64000 = next;
v__$1 = G__64000;
continue;
} else {
return map_ident.call(null,v__$1);
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__45412__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__45412__auto__)){
return om.util.union_QMARK_.call(null,join__$2);
} else {
return and__45412__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__45412__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__45412__auto__)){
return recurse_QMARK_;
} else {
return and__45412__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__64001 = cljs.core.next.call(null,joins__$1);
var G__64002 = ret;
joins__$1 = G__64001;
ret = G__64002;
continue;
} else {
if(graph_loop_QMARK_){
var G__64003 = cljs.core.next.call(null,joins__$1);
var G__64004 = ret;
joins__$1 = G__64003;
ret = G__64004;
continue;
} else {
if((v__$1 == null)){
var G__64005 = cljs.core.next.call(null,joins__$1);
var G__64006 = ret;
joins__$1 = G__64005;
ret = G__64006;
continue;
} else {
var G__64007 = cljs.core.next.call(null,joins__$1);
var G__64008 = cljs.core.assoc.call(null,ret,key__$1,om.next.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__64007;
ret = G__64008;
continue;

}
}
}
} else {
var temp__5276__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__63984,map__63984__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__63993){
var vec__63994 = p__63993;
var k = cljs.core.nth.call(null,vec__63994,(0),null);
var identset = cljs.core.nth.call(null,vec__63994,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__63984,map__63984__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__5276__auto__)){
var looped_key = temp__5276__auto__;
return looped_key;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props__$1),ret);
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args64009 = [];
var len__46645__auto___64012 = arguments.length;
var i__46646__auto___64013 = (0);
while(true){
if((i__46646__auto___64013 < len__46645__auto___64012)){
args64009.push((arguments[i__46646__auto___64013]));

var G__64014 = (i__46646__auto___64013 + (1));
i__46646__auto___64013 = G__64014;
continue;
} else {
}
break;
}

var G__64011 = args64009.length;
switch (G__64011) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64009.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__64039){
var vec__64043 = p__64039;
var k = cljs.core.nth.call(null,vec__64043,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__64043,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__64043,k,orig_paths){
return (function (p1__64016_SHARP_,p2__64017_SHARP_){
return cljs.core.assoc_in.call(null,p1__64016_SHARP_,cljs.core.conj.call(null,p2__64017_SHARP_,k),to_move);
});})(to_move,vec__64043,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
var joinvalue = om.util.join_value.call(null,join);
if(cljs.core.vector_QMARK_.call(null,joinvalue)){
return cljs.core.mapcat.call(null,((function (joinvalue){
return (function (p1__64046_SHARP_){
return om.next.move_roots.call(null,p1__64046_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
});})(joinvalue))
,joinvalue);
} else {
return result_roots;
}
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__45412__auto__ = om.util.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__45412__auto__)){
return (!(om.util.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__45412__auto__;
}
})())?(function (){var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var q = (function (){var or__45424__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om.next.merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__64051){
var vec__64052 = p__64051;
var jkey = cljs.core.nth.call(null,vec__64052,(0),null);
var jsel = cljs.core.nth.call(null,vec__64052,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([jkey,jsel]);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__64076){
var vec__64080 = p__64076;
var expr = cljs.core.nth.call(null,vec__64080,(0),null);
var path = cljs.core.nth.call(null,vec__64080,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__64100 = config;
var map__64100__$1 = ((((!((map__64100 == null)))?((((map__64100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64100):map__64100);
var merge_ident = cljs.core.get.call(null,map__64100__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.call(null,map__64100__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__64100,map__64100__$1,merge_ident,indexer){
return (function (p1__64083_SHARP_){
var and__45412__auto__ = om.util.join_QMARK_.call(null,p1__64083_SHARP_);
if(cljs.core.truth_(and__45412__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__64083_SHARP_));
} else {
return and__45412__auto__;
}
});})(map__64100,map__64100__$1,merge_ident,indexer))
,query));
var step = ((function (map__64100,map__64100__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__64109){
var vec__64113 = p__64109;
var ident = cljs.core.nth.call(null,vec__64113,(0),null);
var props = cljs.core.nth.call(null,vec__64113,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__45424__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__64100,map__64100__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__64119 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__64119,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__64119,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__45424__auto__ = query;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args64122 = [];
var len__46645__auto___64127 = arguments.length;
var i__46646__auto___64128 = (0);
while(true){
if((i__46646__auto___64128 < len__46645__auto___64127)){
args64122.push((arguments[i__46646__auto___64128]));

var G__64129 = (i__46646__auto___64128 + (1));
i__46646__auto___64128 = G__64129;
continue;
} else {
}
break;
}

var G__64124 = args64122.length;
switch (G__64124) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64122.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
return om.next.merge_BANG_.call(null,reconciler,delta,query,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,delta,query,remote){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__64125 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__64125__$1 = ((((!((map__64125 == null)))?((((map__64125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64125):map__64125);
var keys = cljs.core.get.call(null,map__64125__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__64125__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__64125__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
if((remote == null)){
om.next.protocols.queue_BANG_.call(null,reconciler,keys);
} else {
}

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__5276__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5276__auto__)){
var migrate = temp__5276__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null)),migrate.call(null,next,(function (){var or__45424__auto__ = query;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__46099__auto__,k__46100__auto__){
var self__ = this;
var this__46099__auto____$1 = this;
return this__46099__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__46100__auto__,null);
});


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__46101__auto__,k64136,else__46102__auto__){
var self__ = this;
var this__46101__auto____$1 = this;
var G__64138 = k64136;
var G__64138__$1 = (((G__64138 instanceof cljs.core.Keyword))?G__64138.fqn:null);
switch (G__64138__$1) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k64136,else__46102__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
return this$__$1.om$next$protocols$IReconciler$queue_BANG_$arity$3(null,ks,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$3 = (function (_,ks,remote){
var self__ = this;
var ___$1 = this;
if(!((remote == null))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.into,ks);
} else {
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
return om.next.merge_BANG_.call(null,this$__$1,resp,null);
});
var om$next$send_cb__2 = (function (resp,query){
return om.next.merge_BANG_.call(null,this$__$1,resp,query);
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.call(null,this$__$1,cljs.core.keys.call(null,resp),remote);
}

om.next.merge_BANG_.call(null,this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.call(null,this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(sends,this$__$1))
);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.om$next$protocols$IReconciler$reconcile_BANG_$arity$2(null,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$2 = (function (this$,remote){
var self__ = this;
var this$__$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = ((!((remote == null)))?cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null)):new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st));
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

if(!((remote == null))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,this$__$1){
return (function (p1__64132_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__64132_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__64133_SHARP_,p2__64134_SHARP_){
return cljs.core.into.call(null,p1__64133_SHARP_,p2__64134_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__64139 = self__.config;
var map__64139__$1 = ((((!((map__64139 == null)))?((((map__64139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64139):map__64139);
var ui__GT_props = cljs.core.get.call(null,map__64139__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env.call(null,self__.config);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
var seq__64141 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__64142 = null;
var count__64143 = (0);
var i__64144 = (0);
while(true){
if((i__64144 < count__64143)){
var c = cljs.core._nth.call(null,chunk__64142,i__64144);
var props_change_QMARK__64152 = (this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_64153 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_64154 = ui__GT_props.call(null,env,c);
var next_props_64155 = om.next.computed.call(null,next_raw_props_64154,computed_64153);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__64152)){
var next_props_64156__$1 = (((next_props_64155 == null))?(function (){var temp__5278__auto__ = om.next.props.call(null,c);
if(cljs.core.truth_(temp__5278__auto__)){
var props = temp__5278__auto__;
return props;
} else {
return null;
}
})():next_props_64155);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_64156__$1,this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_64155,om.next.get_state.call(null,c)))){
if(!((next_props_64155 == null))){
om.next.update_component_BANG_.call(null,c,next_props_64155);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__64152)){
var temp__5278__auto___64157 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__5278__auto___64157)){
var update_path_64158 = temp__5278__auto___64157;
var p_64159 = om.next.parent.call(null,c);
while(true){
if(!((p_64159 == null))){
var update_path_SINGLEQUOTE__64160 = cljs.core.subvec.call(null,update_path_64158,cljs.core.count.call(null,om.next.path.call(null,p_64159)));
om.next.update_props_BANG_.call(null,p_64159,cljs.core.assoc_in.call(null,om.next.props.call(null,p_64159),update_path_SINGLEQUOTE__64160,next_raw_props_64154));

om.next.merge_pending_props_BANG_.call(null,p_64159);

var G__64161 = om.next.parent.call(null,p_64159);
p_64159 = G__64161;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__64162 = seq__64141;
var G__64163 = chunk__64142;
var G__64164 = count__64143;
var G__64165 = (i__64144 + (1));
seq__64141 = G__64162;
chunk__64142 = G__64163;
count__64143 = G__64164;
i__64144 = G__64165;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__64141);
if(temp__5278__auto__){
var seq__64141__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64141__$1)){
var c__46335__auto__ = cljs.core.chunk_first.call(null,seq__64141__$1);
var G__64166 = cljs.core.chunk_rest.call(null,seq__64141__$1);
var G__64167 = c__46335__auto__;
var G__64168 = cljs.core.count.call(null,c__46335__auto__);
var G__64169 = (0);
seq__64141 = G__64166;
chunk__64142 = G__64167;
count__64143 = G__64168;
i__64144 = G__64169;
continue;
} else {
var c = cljs.core.first.call(null,seq__64141__$1);
var props_change_QMARK__64170 = (this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_64171 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_64172 = ui__GT_props.call(null,env,c);
var next_props_64173 = om.next.computed.call(null,next_raw_props_64172,computed_64171);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__64170)){
var next_props_64174__$1 = (((next_props_64173 == null))?(function (){var temp__5278__auto____$1 = om.next.props.call(null,c);
if(cljs.core.truth_(temp__5278__auto____$1)){
var props = temp__5278__auto____$1;
return props;
} else {
return null;
}
})():next_props_64173);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_64174__$1,this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_64173,om.next.get_state.call(null,c)))){
if(!((next_props_64173 == null))){
om.next.update_component_BANG_.call(null,c,next_props_64173);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__64170)){
var temp__5278__auto___64175__$1 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__5278__auto___64175__$1)){
var update_path_64176 = temp__5278__auto___64175__$1;
var p_64177 = om.next.parent.call(null,c);
while(true){
if(!((p_64177 == null))){
var update_path_SINGLEQUOTE__64178 = cljs.core.subvec.call(null,update_path_64176,cljs.core.count.call(null,om.next.path.call(null,p_64177)));
om.next.update_props_BANG_.call(null,p_64177,cljs.core.assoc_in.call(null,om.next.props.call(null,p_64177),update_path_SINGLEQUOTE__64178,next_raw_props_64172));

om.next.merge_pending_props_BANG_.call(null,p_64177);

var G__64179 = om.next.parent.call(null,p_64177);
p_64177 = G__64179;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__64180 = cljs.core.next.call(null,seq__64141__$1);
var G__64181 = null;
var G__64182 = (0);
var G__64183 = (0);
seq__64141 = G__64180;
chunk__64142 = G__64181;
count__64143 = G__64182;
i__64144 = G__64183;
continue;
}
} else {
return null;
}
}
break;
}
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",1701634607),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__45412__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__45412__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__45412__auto__;
}
})())){
var new_state_64184 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_64185 = cljs.core.meta.call(null,new_state_64184);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_64184,refs_64185));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_64145 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_64146 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_64147 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__5278__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__5278__auto__)){
var c_SINGLEQUOTE_ = temp__5278__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_64147;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_64146;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_64145;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__45424__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Application root query must be a vector"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? sel) (vector? sel))")].join('')));
}

if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__45424__auto__ = target;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__64131_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__64131_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__45424__auto__ = target;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_.call(null,root_class))){
return om.next.queue_render_BANG_.call(null,parsef);
} else {
return om.next.schedule_render_BANG_.call(null,this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__5278__auto___64186 = om.next.get_query.call(null,(function (){var or__45424__auto__ = (function (){var and__45412__auto__ = target;
if(cljs.core.truth_(and__45412__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__45412__auto__;
}
})();
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__5278__auto___64186)){
var sel_64187 = temp__5278__auto___64186;
var env_64188 = om.next.to_env.call(null,self__.config);
var snds_64189 = om.next.gather_sends.call(null,env_64188,sel_64187,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_64189)){
} else {
var temp__5278__auto___64190__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__5278__auto___64190__$1)){
var send_64191 = temp__5278__auto___64190__$1;
send_64191.call(null,snds_64189,((function (send_64191,temp__5278__auto___64190__$1,env_64188,snds_64189,sel_64187,temp__5278__auto___64186,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
om.next.merge_BANG_.call(null,this$__$1,resp,null);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_64188,sel_64187));
});
var om$next$send_cb__2 = (function (resp,query){
om.next.merge_BANG_.call(null,this$__$1,resp,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_64188,sel_64187));
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.call(null,this$__$1,cljs.core.keys.call(null,resp),remote);
}

om.next.merge_BANG_.call(null,this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.call(null,this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(send_64191,temp__5278__auto___64190__$1,env_64188,snds_64189,sel_64187,temp__5278__auto___64186,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_.call(null,root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),root], null)));
return om.next.protocols.index_root.call(null,indexer,(function (){var or__45424__auto__ = c;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__5278__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__5278__auto__)){
var remove = temp__5278__auto__;
return remove.call(null);
} else {
return null;
}
});


om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__46113__auto__,writer__46114__auto__,opts__46115__auto__){
var self__ = this;
var this__46113__auto____$1 = this;
var pr_pair__46116__auto__ = ((function (this__46113__auto____$1){
return (function (keyval__46117__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__46114__auto__,cljs.core.pr_writer,""," ","",opts__46115__auto__,keyval__46117__auto__);
});})(this__46113__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__46114__auto__,pr_pair__46116__auto__,"#om.next.Reconciler{",", ","}",opts__46115__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64135){
var self__ = this;
var G__64135__$1 = this;
return (new cljs.core.RecordIter((0),G__64135__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__46097__auto__){
var self__ = this;
var this__46097__auto____$1 = this;
return self__.__meta;
});


om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__46093__auto__){
var self__ = this;
var this__46093__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__46103__auto__){
var self__ = this;
var this__46103__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__46094__auto__){
var self__ = this;
var this__46094__auto____$1 = this;
var h__45866__auto__ = self__.__hash;
if(!((h__45866__auto__ == null))){
return h__45866__auto__;
} else {
var h__45866__auto____$1 = cljs.core.hash_imap.call(null,this__46094__auto____$1);
self__.__hash = h__45866__auto____$1;

return h__45866__auto____$1;
}
});


om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__46095__auto__,other__46096__auto__){
var self__ = this;
var this__46095__auto____$1 = this;
if(cljs.core.truth_((function (){var and__45412__auto__ = other__46096__auto__;
if(cljs.core.truth_(and__45412__auto__)){
return ((this__46095__auto____$1.constructor === other__46096__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__46095__auto____$1,other__46096__auto__));
} else {
return and__45412__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__46108__auto__,k__46109__auto__){
var self__ = this;
var this__46108__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__46109__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__46108__auto____$1),self__.__meta),k__46109__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__46109__auto__)),null));
}
});


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__46106__auto__,k__46107__auto__,G__64135){
var self__ = this;
var this__46106__auto____$1 = this;
var pred__64148 = cljs.core.keyword_identical_QMARK_;
var expr__64149 = k__46107__auto__;
if(cljs.core.truth_(pred__64148.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__64149))){
return (new om.next.Reconciler(G__64135,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__64148.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__64149))){
return (new om.next.Reconciler(self__.config,G__64135,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__46107__auto__,G__64135),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__46111__auto__){
var self__ = this;
var this__46111__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__46098__auto__,G__64135){
var self__ = this;
var this__46098__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__64135,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__46104__auto__,entry__46105__auto__){
var self__ = this;
var this__46104__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__46105__auto__)){
return this__46104__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__46105__auto__,(0)),cljs.core._nth.call(null,entry__46105__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__46104__auto____$1,entry__46105__auto__);
}
});


om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__46135__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__46135__auto__,writer__46136__auto__){
return cljs.core._write.call(null,writer__46136__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__64137){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__64137),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__64137),null,cljs.core.dissoc.call(null,G__64137,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__64192,c){
var map__64198 = p__64192;
var map__64198__$1 = ((((!((map__64198 == null)))?((((map__64198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64198):map__64198);
var env = map__64198__$1;
var parser = cljs.core.get.call(null,map__64198__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__64198__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (((function (){var and__45412__auto__ = pathopt;
if(and__45412__auto__){
var and__45412__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__45412__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__45412__auto____$1;
}
} else {
return and__45412__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([id,om.next.get_query.call(null,c)])], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__5278__auto___64203 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5278__auto___64203)){
var l_64204 = temp__5278__auto___64203;
var dt_64205 = (e - s);
var component_name_64206 = c.constructor.displayName;
if(((16) < dt_64205)){
goog.log.warning(l_64204,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_name_64206),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" query took "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_64205),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args64207 = [];
var len__46645__auto___64254 = arguments.length;
var i__46646__auto___64255 = (0);
while(true){
if((i__46646__auto___64255 < len__46645__auto___64254)){
args64207.push((arguments[i__46646__auto___64255]));

var G__64256 = (i__46646__auto___64255 + (1));
i__46646__auto___64255 = G__64256;
continue;
} else {
}
break;
}

var G__64209 = args64207.length;
switch (G__64209) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64207.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__64232){
var vec__64236 = p__64232;
var table = cljs.core.nth.call(null,vec__64236,(0),null);
var id = cljs.core.nth.call(null,vec__64236,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__64239){
var vec__64247 = p__64239;
var old = cljs.core.nth.call(null,vec__64247,(0),null);
var vec__64250 = cljs.core.nth.call(null,vec__64247,(1),null);
var _ = cljs.core.nth.call(null,vec__64250,(0),null);
var id = cljs.core.nth.call(null,vec__64250,(1),null);
var new$ = vec__64250;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__64253 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__64253,id_key,id);
} else {
return G__64253;
}
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__64258_SHARP_){
return cljs.core.update_in.call(null,p1__64258_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__64259_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__64259_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var G__64270 = k;
if(om.util.unique_ident_QMARK_.call(null,k)){
return cljs.core.first.call(null,G__64270);
} else {
return G__64270;
}
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",-1326825366).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__64260_SHARP_){
return cljs.core.update_in.call(null,p1__64260_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__64271 = cljs.core.next.call(null,exprs);
var G__64272 = ret__$1;
exprs = G__64271;
ret__$1 = G__64272;
continue;
} else {
var G__64273 = cljs.core.next.call(null,exprs);
var G__64274 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__64273;
ret__$1 = G__64274;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__64275 = cljs.core.next.call(null,exprs);
var G__64276 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__64275;
ret__$1 = G__64276;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__64261_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__64261_SHARP_))),p1__64261_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__64277 = cljs.core.next.call(null,exprs);
var G__64278 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__64277;
ret__$1 = G__64278;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__64279 = cljs.core.next.call(null,exprs);
var G__64280 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__64279;
ret__$1 = G__64280;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__64262_SHARP_){
return cljs.core.update_in.call(null,p1__64262_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__45424__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__64281 = cljs.core.next.call(null,exprs);
var G__64282 = null;
exprs = G__64281;
ret__$1 = G__64282;
continue;
} else {
var G__64283 = cljs.core.next.call(null,exprs);
var G__64284 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__64283;
ret__$1 = G__64284;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_.call(null,query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),ret,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.deref.call(null,errs)], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 *   :tx-listen    - a function of 2 arguments that will listen to transactions.
 *                   The first argument is the parser's env map also containing
 *                   the old and new state. The second argument is a map containing
 *                   the transaction, its result and the remote sends that the
 *                   transaction originated.
 */
om.next.reconciler = (function om$next$reconciler(p__64290){
var map__64294 = p__64290;
var map__64294__$1 = ((((!((map__64294 == null)))?((((map__64294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64294):map__64294);
var config = map__64294__$1;
var root_render = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__64294,map__64294__$1,config){
return (function (p1__64287_SHARP_,p2__64288_SHARP_){
return ReactDOM.render(p1__64287_SHARP_,p2__64288_SHARP_);
});})(map__64294,map__64294__$1,config))
);
var normalize = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var prune_tree = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),om.next.default_extract_errors);
var tx_listen = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var pathopt = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__64294,map__64294__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key){
return (function (p1__64285_SHARP_,p2__64286_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__64285_SHARP_,p2__64286_SHARP_);
});})(map__64294,map__64294__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var easy_reads = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),true);
var history = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__64294,map__64294__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__64289_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__64289_SHARP_);
});})(map__64294,map__64294__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__64294__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__64294,map__64294__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__64294,map__64294__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$)))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367)],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__45424__auto__ = !(norm_QMARK_);
if(or__45424__auto__){
return or__45424__auto__;
} else {
return normalize;
}
})(),prune_tree,tx_listen]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$protocols$IReconciler$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args64299 = [];
var len__46645__auto___64302 = arguments.length;
var i__46646__auto___64303 = (0);
while(true){
if((i__46646__auto___64303 < len__46645__auto___64302)){
args64299.push((arguments[i__46646__auto___64303]));

var G__64304 = (i__46646__auto___64303 + (1));
i__46646__auto___64303 = G__64304;
continue;
} else {
}
break;
}

var G__64301 = args64299.length;
switch (G__64301) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64299.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args64306 = [];
var len__46645__auto___64309 = arguments.length;
var i__46646__auto___64310 = (0);
while(true){
if((i__46646__auto___64310 < len__46645__auto___64309)){
args64306.push((arguments[i__46646__auto___64310]));

var G__64311 = (i__46646__auto___64310 + (1));
i__46646__auto___64310 = G__64311;
continue;
} else {
}
break;
}

var G__64308 = args64306.length;
switch (G__64308) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64306.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args64313 = [];
var len__46645__auto___64316 = arguments.length;
var i__46646__auto___64317 = (0);
while(true){
if((i__46646__auto___64317 < len__46645__auto___64316)){
args64313.push((arguments[i__46646__auto___64317]));

var G__64318 = (i__46646__auto___64317 + (1));
i__46646__auto___64317 = G__64318;
continue;
} else {
}
break;
}

var G__64315 = args64313.length;
switch (G__64315) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64313.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args64320 = [];
var len__46645__auto___64323 = arguments.length;
var i__46646__auto___64324 = (0);
while(true){
if((i__46646__auto___64324 < len__46645__auto___64323)){
args64320.push((arguments[i__46646__auto___64324]));

var G__64325 = (i__46646__auto___64324 + (1));
i__46646__auto___64324 = G__64325;
continue;
} else {
}
break;
}

var G__64322 = args64320.length;
switch (G__64322) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64320.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,(function (){var x__46358__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=next.js.map?rel=1498049893762