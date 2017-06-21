// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.connect.build_desktop_dev');
goog.require('cljs.core');
goog.require('app.system');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('cljs.user');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54103__delegate = function (x){
if(cljs.core.truth_(app.system.reset)){
return cljs.core.apply.call(null,app.system.reset,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'app.system/reset' is missing");
}
};
var G__54103 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54104__i = 0, G__54104__a = new Array(arguments.length -  0);
while (G__54104__i < G__54104__a.length) {G__54104__a[G__54104__i] = arguments[G__54104__i + 0]; ++G__54104__i;}
  x = new cljs.core.IndexedSeq(G__54104__a,0,null);
} 
return G__54103__delegate.call(this,x);};
G__54103.cljs$lang$maxFixedArity = 0;
G__54103.cljs$lang$applyTo = (function (arglist__54105){
var x = cljs.core.seq(arglist__54105);
return G__54103__delegate(x);
});
G__54103.cljs$core$IFn$_invoke$arity$variadic = G__54103__delegate;
return G__54103;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"desktop-dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3450/figwheel-ws"], null));

//# sourceMappingURL=build_desktop_dev.js.map?rel=1498062435655