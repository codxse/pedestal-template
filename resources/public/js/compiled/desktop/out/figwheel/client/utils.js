// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('cljs.reader');
goog.require('cljs.pprint');
goog.require('goog.userAgent.product');
goog.require('goog.async.Deferred');
goog.require('goog.string.StringBuffer');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return !((goog.global.document == null));
});
figwheel.client.utils.react_native_env_QMARK_ = (function figwheel$client$utils$react_native_env_QMARK_(){
return (typeof goog.global.navigator !== 'undefined') && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"));
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.html_or_react_native_env_QMARK_ = (function figwheel$client$utils$html_or_react_native_env_QMARK_(){
var or__45424__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return figwheel.client.utils.react_native_env_QMARK_.call(null);
}
});
figwheel.client.utils.worker_env_QMARK_ = (function figwheel$client$utils$worker_env_QMARK_(){
return ((goog.global.document == null)) && (typeof self !== 'undefined') && (typeof self.importScripts !== 'undefined');
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.react_native_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"react-native","react-native",-1543085138);
} else {
if(cljs.core.truth_(figwheel.client.utils.worker_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"worker","worker",938239996);
} else {
return null;
}
}
}
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if(cljs.core.not.call(null,goog.userAgent.product.IE)){
return (new CustomEvent(event_name,(function (){var obj57574 = {"detail":data};
return obj57574;
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__45412__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__45412__auto__)){
var and__45412__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__45412__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__45412__auto____$1;
}
} else {
return and__45412__auto__;
}
})())){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event.call(null,event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(figwheel.client.utils._STAR_print_debug_STAR_){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args57579 = [];
var len__46645__auto___57585 = arguments.length;
var i__46646__auto___57586 = (0);
while(true){
if((i__46646__auto___57586 < len__46645__auto___57585)){
args57579.push((arguments[i__46646__auto___57586]));

var G__57587 = (i__46646__auto___57586 + (1));
i__46646__auto___57586 = G__57587;
continue;
} else {
}
break;
}

var G__57581 = args57579.length;
switch (G__57581) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57579.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__57582 = cljs.core._EQ_;
var expr__57583 = (cljs.core.truth_(figwheel.client.utils.html_or_react_native_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__57582.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__57583))){
return ((function (pred__57582,expr__57583){
return (function (p1__57575_SHARP_){
return console.warn(p1__57575_SHARP_);
});
;})(pred__57582,expr__57583))
} else {
if(cljs.core.truth_(pred__57582.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__57583))){
return ((function (pred__57582,expr__57583){
return (function (p1__57576_SHARP_){
return console.debug(p1__57576_SHARP_);
});
;})(pred__57582,expr__57583))
} else {
if(cljs.core.truth_(pred__57582.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__57583))){
return ((function (pred__57582,expr__57583){
return (function (p1__57577_SHARP_){
return console.error(p1__57577_SHARP_);
});
;})(pred__57582,expr__57583))
} else {
return ((function (pred__57582,expr__57583){
return (function (p1__57578_SHARP_){
return console.log(p1__57578_SHARP_);
});
;})(pred__57582,expr__57583))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__57589){
var map__57592 = p__57589;
var map__57592__$1 = ((((!((map__57592 == null)))?((((map__57592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57592):map__57592);
var opts = map__57592__$1;
var eval_fn = cljs.core.get.call(null,map__57592__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});
figwheel.client.utils.pprint_to_string = (function figwheel$client$utils$pprint_to_string(x){
var sb = (new goog.string.StringBuffer());
var sbw = (new cljs.core.StringBufferWriter(sb));
cljs.pprint.pprint.call(null,x,sbw);

return goog.string.trimRight([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
});
/**
 * chains an async action on to a deferred
 *   Must provide a goog.async.Deferred and action function that
 *   takes an initial value and a continuation fn to call with the result
 */
figwheel.client.utils.liftContD = (function figwheel$client$utils$liftContD(deferred,f){
return deferred.then((function (val){
var new_def = (new goog.async.Deferred());
f.call(null,val,((function (new_def){
return (function (p1__57594_SHARP_){
return new_def.callback(p1__57594_SHARP_);
});})(new_def))
);

return new_def;
}));
});
/**
 * maps an async action across a collection and chains the results
 *   onto a deferred
 */
figwheel.client.utils.mapConcatD = (function figwheel$client$utils$mapConcatD(deferred,f,coll){
var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core.reduce.call(null,((function (results){
return (function (defr,v){
return figwheel.client.utils.liftContD.call(null,defr,((function (results){
return (function (_,fin){
return f.call(null,v,((function (results){
return (function (v__$1){
cljs.core.swap_BANG_.call(null,results,cljs.core.conj,v__$1);

return fin.call(null,v__$1);
});})(results))
);
});})(results))
);
});})(results))
,deferred,coll).then(((function (results){
return (function (_){
return goog.async.Deferred.succeed(cljs.core.deref.call(null,results));
});})(results))
);
});
if(typeof figwheel.client.utils.local_persistent_config !== 'undefined'){
} else {
figwheel.client.utils.local_persistent_config = (function (){var a = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof localStorage !== 'undefined'){
cljs.core.add_watch.call(null,a,new cljs.core.Keyword(null,"sync-local-storage","sync-local-storage",-473590105),((function (a){
return (function (_,___$1,___$2,n){
return cljs.core.mapv.call(null,((function (a){
return (function (p__57595){
var vec__57596 = p__57595;
var ky = cljs.core.nth.call(null,vec__57596,(0),null);
var v = cljs.core.nth.call(null,vec__57596,(1),null);
return localStorage.setItem(cljs.core.name.call(null,ky),cljs.core.pr_str.call(null,v));
});})(a))
,n);
});})(a))
);
} else {
}

return a;
})();
}
/**
 * Set a local value on a key that in a browser will persist even when 
 * the browser gets reloaded.
 */
figwheel.client.utils.persistent_config_set_BANG_ = (function figwheel$client$utils$persistent_config_set_BANG_(ky,v){
return cljs.core.swap_BANG_.call(null,figwheel.client.utils.local_persistent_config,cljs.core.assoc,ky,v);
});
figwheel.client.utils.persistent_config_get = (function figwheel$client$utils$persistent_config_get(var_args){
var args57599 = [];
var len__46645__auto___57602 = arguments.length;
var i__46646__auto___57603 = (0);
while(true){
if((i__46646__auto___57603 < len__46645__auto___57602)){
args57599.push((arguments[i__46646__auto___57603]));

var G__57604 = (i__46646__auto___57603 + (1));
i__46646__auto___57603 = G__57604;
continue;
} else {
}
break;
}

var G__57601 = args57599.length;
switch (G__57601) {
case 2:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57599.length)].join('')));

}
});

figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2 = (function (ky,not_found){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config),ky)){
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config),ky);
} else {
if(cljs.core.truth_((function (){var and__45412__auto__ = typeof localStorage !== 'undefined';
if(and__45412__auto__){
return localStorage.getItem(cljs.core.name.call(null,ky));
} else {
return and__45412__auto__;
}
})())){
var v = cljs.reader.read_string.call(null,localStorage.getItem(cljs.core.name.call(null,ky)));
figwheel.client.utils.persistent_config_set_BANG_.call(null,ky,v);

return v;
} else {
return not_found;

}
}
});

figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1 = (function (ky){
return figwheel.client.utils.persistent_config_get.call(null,ky,null);
});

figwheel.client.utils.persistent_config_get.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=utils.js.map?rel=1498049881015