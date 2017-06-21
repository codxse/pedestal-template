// Compiled by ClojureScript 1.9.562 {}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('om.util');
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__48650){
var vec__48654 = p__48650;
var k = cljs.core.nth.call(null,vec__48654,(0),null);
var v = cljs.core.nth.call(null,vec__48654,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.union_entry__GT_ast),m)], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__48657){
var vec__48662 = p__48657;
var f = cljs.core.nth.call(null,vec__48662,(0),null);
var args = cljs.core.nth.call(null,vec__48662,(1),null);
var call = vec__48662;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.call(null,om.next.impl.parser.expr__GT_ast.call(null,args),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__45424__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,call));
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.call(null,om.next.impl.parser.expr__GT_ast.call(null,f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__45424__auto__ = args;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__48665 = ast;
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.call(null,G__48665,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__48665;
}
}
});
/**
 * Convert a query to its AST representation.
 */
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),query)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join));
var vec__48669 = cljs.core.first.call(null,join);
var k = cljs.core.nth.call(null,vec__48669,(0),null);
var v = cljs.core.nth.call(null,vec__48669,(1),null);
var ast = om.next.impl.parser.expr__GT_ast.call(null,k);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,ast,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"query","query",-1288509510),v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),(((typeof v === 'number') || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),v)))?null:((cljs.core.vector_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast.call(null,v)], null)], null):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid join, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
))));
});
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__48672){
var vec__48676 = p__48672;
var k = cljs.core.nth.call(null,vec__48676,(0),null);
var id = cljs.core.nth.call(null,vec__48676,(1),null);
var ref = vec__48676;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return om.next.impl.parser.join__GT_ast.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return om.next.impl.parser.ident__GT_ast.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return om.next.impl.parser.call__GT_ast.call(null,x);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid expression "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta.call(null,(function (){var G__48680 = expr;
if((expr instanceof cljs.core.Keyword)){
var x__46358__auto__ = G__48680;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
} else {
return G__48680;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var args48684 = [];
var len__46645__auto___48701 = arguments.length;
var i__46646__auto___48702 = (0);
while(true){
if((i__46646__auto___48702 < len__46645__auto___48701)){
args48684.push((arguments[i__46646__auto___48702]));

var G__48703 = (i__46646__auto___48702 + (1));
i__46646__auto___48702 = G__48703;
continue;
} else {
}
break;
}

var G__48686 = args48684.length;
switch (G__48686) {
case 1:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48684.length)].join('')));

}
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.call(null,ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__48687,unparse_QMARK_){
var map__48688 = p__48687;
var map__48688__$1 = ((((!((map__48688 == null)))?((((map__48688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48688):map__48688);
var ast = map__48688__$1;
var type = cljs.core.get.call(null,map__48688__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.call(null,map__48688__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__48690 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__48688,map__48688__$1,ast,type,component){
return (function (p1__48681_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__48681_SHARP_,unparse_QMARK_);
});})(map__48688,map__48688__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if(!((component == null))){
return cljs.core.with_meta.call(null,G__48690,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null));
} else {
return G__48690;
}
} else {
var map__48691 = ast;
var map__48691__$1 = ((((!((map__48691 == null)))?((((map__48691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48691):map__48691);
var key = cljs.core.get.call(null,map__48691__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.call(null,map__48691__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.call(null,map__48691__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.call(null,map__48691__$1,new cljs.core.Keyword(null,"params","params",710516235));
return om.next.impl.parser.wrap_expr.call(null,query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_.call(null,params))){
var x__46358__auto__ = expr;
return cljs.core._conj.call(null,(function (){var x__46358__auto____$1 = params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto____$1);
})(),x__46358__auto__);
} else {
var x__46358__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__46358__auto__);
}
})():((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),type))?(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && (!(typeof query === 'number')) && (unparse_QMARK_ === true))?(function (){var map__48693 = ast;
var map__48693__$1 = ((((!((map__48693 == null)))?((((map__48693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48693):map__48693);
var children = cljs.core.get.call(null,map__48693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if((((1) === cljs.core.count.call(null,children))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children))))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.into.call(null,(function (){var G__48695 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(component)){
return cljs.core.with_meta.call(null,G__48695,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null));
} else {
return G__48695;
}
})(),cljs.core.map.call(null,((function (map__48693,map__48693__$1,children,map__48691,map__48691__$1,key,query,query_root,params,map__48688,map__48688__$1,ast,type,component){
return (function (p__48696){
var map__48697 = p__48696;
var map__48697__$1 = ((((!((map__48697 == null)))?((((map__48697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48697):map__48697);
var union_key = cljs.core.get.call(null,map__48697__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.call(null,map__48697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.call(null,map__48697__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__48699 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__48697,map__48697__$1,union_key,children__$1,component__$1,map__48693,map__48693__$1,children,map__48691,map__48691__$1,key,query,query_root,params,map__48688,map__48688__$1,ast,type,component){
return (function (p1__48682_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__48682_SHARP_,unparse_QMARK_);
});})(map__48697,map__48697__$1,union_key,children__$1,component__$1,map__48693,map__48693__$1,children,map__48691,map__48691__$1,key,query,query_root,params,map__48688,map__48688__$1,ast,type,component))
),children__$1);
if(!((component__$1 == null))){
return cljs.core.with_meta.call(null,G__48699,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1], null));
} else {
return G__48699;
}
})()], null);
});})(map__48693,map__48693__$1,children,map__48691,map__48691__$1,key,query,query_root,params,map__48688,map__48688__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children)))]);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,(function (){var G__48700 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__48693,map__48693__$1,children,map__48691,map__48691__$1,key,query,query_root,params,map__48688,map__48688__$1,ast,type,component){
return (function (p1__48683_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__48683_SHARP_,unparse_QMARK_);
});})(map__48693,map__48693__$1,children,map__48691,map__48691__$1,key,query,query_root,params,map__48688,map__48688__$1,ast,type,component))
),children);
if(!((component == null))){
return cljs.core.with_meta.call(null,G__48700,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null));
} else {
return G__48700;
}
})()]);
}
})():cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;

/**
 * Add path metadata to a data structure. data is the data to be worked on.
 * path is the current path into the data. query is the query used to
 * walk the data. union-expr tracks the last seen union query to be used
 * when it finds a recursive union.
 */
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(var_args){
var args48705 = [];
var len__46645__auto___48719 = arguments.length;
var i__46646__auto___48720 = (0);
while(true){
if((i__46646__auto___48720 < len__46645__auto___48719)){
args48705.push((arguments[i__46646__auto___48720]));

var G__48721 = (i__46646__auto___48720 + (1));
i__46646__auto___48720 = G__48721;
continue;
} else {
}
break;
}

var G__48707 = args48705.length;
switch (G__48707) {
case 3:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48705.length)].join('')));

}
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3 = (function (data,path,query){
return om.next.impl.parser.path_meta.call(null,data,path,query,null);
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4 = (function (data,path,query,union_expr){
if((query == null)){
var G__48708 = data;
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,data))){
return cljs.core.vary_meta.call(null,G__48708,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
return G__48708;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,data)){
return cljs.core.vary_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (idx,v){
return om.next.impl.parser.path_meta.call(null,v,cljs.core.conj.call(null,path,idx),query,union_expr);
})),data),cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
if(cljs.core.vector_QMARK_.call(null,query)){
var joins = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((joins == null))){
var join = cljs.core.first.call(null,joins);
if(cljs.core.not.call(null,(function (){var or__45424__auto__ = om.util.join_QMARK_.call(null,join);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return (om.util.ident_QMARK_.call(null,join)) || ((cljs.core.seq_QMARK_.call(null,join)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,join))));
}
})())){
var G__48723 = cljs.core.next.call(null,joins);
var G__48724 = ret;
joins = G__48723;
ret = G__48724;
continue;
} else {
var join__$1 = (function (){var G__48713 = join;
if(cljs.core.seq_QMARK_.call(null,join)){
return cljs.core.first.call(null,G__48713);
} else {
return G__48713;
}
})();
var join__$2 = (function (){var G__48714 = join__$1;
if(om.util.ident_QMARK_.call(null,join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__48714],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__48714;
}
})();
var vec__48710 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__48710,(0),null);
var sel = cljs.core.nth.call(null,vec__48710,(1),null);
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:union_expr);
var sel__$1 = ((om.util.recursion_QMARK_.call(null,sel))?((!((union_expr == null)))?union_entry:query):sel);
var key__$1 = (function (){var G__48715 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__48715);
} else {
return G__48715;
}
})();
var v = cljs.core.get.call(null,ret,key__$1);
var G__48725 = cljs.core.next.call(null,joins);
var G__48726 = (function (){var G__48716 = ret;
if((cljs.core.map_QMARK_.call(null,ret)) && (cljs.core.contains_QMARK_.call(null,ret,key__$1))){
return cljs.core.assoc.call(null,G__48716,key__$1,om.next.impl.parser.path_meta.call(null,v,cljs.core.conj.call(null,path,key__$1),sel__$1,union_entry));
} else {
return G__48716;
}
})();
joins = G__48725;
ret = G__48726;
continue;
}
} else {
var G__48717 = ret;
if(((!((ret == null)))?((((ret.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IWithMeta$)))?true:(((!ret.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,ret):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,ret))){
return cljs.core.vary_meta.call(null,G__48717,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
return G__48717;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,data)){
var dispatch_key = cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast);
var branches = cljs.core.vals.call(null,query);
var props = cljs.core.map.call(null,dispatch_key,cljs.core.keys.call(null,data));
var query__$1 = cljs.core.reduce.call(null,((function (dispatch_key,branches,props){
return (function (ret,q){
var query_props = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,dispatch_key),q);
var props__$1 = cljs.core.set.call(null,props);
if(cljs.core._EQ_.call(null,cljs.core.set.call(null,props__$1),cljs.core.set.call(null,query_props))){
return cljs.core.reduced.call(null,q);
} else {
if(cljs.core.truth_(clojure.set.subset_QMARK_.call(null,props__$1,query_props))){
return q;
} else {
return ret;

}
}
});})(dispatch_key,branches,props))
,null,branches);
return om.next.impl.parser.path_meta.call(null,data,path,query__$1,union_expr);
} else {
return data;
}

}
}
}
});

om.next.impl.parser.path_meta.cljs$lang$maxFixedArity = 4;

om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("om.next","abort","om.next/abort",-897542671),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__48727){
var map__48802 = p__48727;
var map__48802__$1 = ((((!((map__48802 == null)))?((((map__48802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48802):map__48802);
var config = map__48802__$1;
var read = cljs.core.get.call(null,map__48802__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__48802__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__48802,map__48802__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.call(null,env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = (function (){var or__45424__auto__ = new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__48840 = (function (){var G__48841 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),om$next$impl$parser$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("om.next","root","om.next/root",-1714259778));
if(!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168)))){
return cljs.core.assoc.call(null,G__48841,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
} else {
return G__48841;
}
})();
var map__48840__$1 = ((((!((map__48840 == null)))?((((map__48840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48840):map__48840);
var env__$1 = map__48840__$1;
var path = cljs.core.get.call(null,map__48840__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__48840,map__48840__$1,env__$1,path,map__48802,map__48802__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__48867 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var map__48867__$1 = ((((!((map__48867 == null)))?((((map__48867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48867):map__48867);
var ast = map__48867__$1;
var query_SINGLEQUOTE_ = cljs.core.get.call(null,map__48867__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.call(null,map__48867__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dispatch_key = cljs.core.get.call(null,map__48867__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params = cljs.core.get.call(null,map__48867__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$2 = (function (){var G__48869 = cljs.core.merge.call(null,env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query_SINGLEQUOTE_], null));
var G__48869__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.call(null,G__48869,new cljs.core.Keyword(null,"query","query",-1288509510)):G__48869);
var G__48869__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE_))?cljs.core.assoc.call(null,G__48869__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query):G__48869__$1);
if(cljs.core.vector_QMARK_.call(null,key)){
return cljs.core.assoc.call(null,G__48869__$2,new cljs.core.Keyword(null,"query-root","query-root",359781888),key);
} else {
return G__48869__$2;
}
})();
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type);
var res = (function (){var G__48870 = type;
var G__48870__$1 = (((G__48870 instanceof cljs.core.Keyword))?G__48870.fqn:null);
switch (G__48870__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parse mutation attempted but no :mutate function supplied"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("mutate")].join('')));
}

return mutate.call(null,env__$2,dispatch_key,params);

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parse read attempted but no :read function supplied"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("read")].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "join":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parse read attempted but no :read function supplied"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("read")].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parse read attempted but no :read function supplied"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("read")].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48870__$1)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.call(null,res,target);
var G__48871 = ret;
var G__48871__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.call(null,G__48871,expr):G__48871);
if(cljs.core.map_QMARK_.call(null,ast_SINGLEQUOTE_)){
return cljs.core.conj.call(null,G__48871__$1,om.next.impl.parser.ast__GT_expr.call(null,ast_SINGLEQUOTE_));
} else {
return G__48871__$1;
}
} else {
if(!((call_QMARK_) || ((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"value","value",305978217))))){
return ret;
} else {
var error = cljs.core.atom.call(null,null);
var mut_ret = cljs.core.atom.call(null,null);
if((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.reset_BANG_.call(null,mut_ret,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res).call(null));
}catch (e48872){var e_48877 = e48872;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_.call(null,e_48877))){
throw e_48877;
} else {
cljs.core.reset_BANG_.call(null,error,e_48877);
}
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_.call(null,value))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" mutation :value must be nil or a map with structure {:keys [...]}")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? value) (map? value))")].join('')));
}
} else {
}

var G__48873 = ret;
var G__48873__$1 = ((!((value == null)))?cljs.core.assoc.call(null,G__48873,(function (){var G__48874 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__48874);
} else {
return G__48874;
}
})(),value):G__48873);
var G__48873__$2 = (cljs.core.truth_(cljs.core.deref.call(null,mut_ret))?cljs.core.assoc_in.call(null,G__48873__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"result","result",1415092211)], null),cljs.core.deref.call(null,mut_ret)):G__48873__$1);
if(cljs.core.truth_(cljs.core.deref.call(null,error))){
return cljs.core.assoc.call(null,G__48873__$2,key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.next","error","om.next/error",-1841983205),cljs.core.deref.call(null,error)], null));
} else {
return G__48873__$2;
}
}
}
});})(elide_paths_QMARK_,map__48840,map__48840__$1,env__$1,path,map__48802,map__48802__$1,config,read,mutate))
;
var G__48875 = cljs.core.reduce.call(null,step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
if(((target == null)) && (cljs.core.not.call(null,elide_paths_QMARK_))){
return om.next.impl.parser.path_meta.call(null,G__48875,path,query);
} else {
return G__48875;
}
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__48802,map__48802__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

//# sourceMappingURL=parser.js.map?rel=1498049872408