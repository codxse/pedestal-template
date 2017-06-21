// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58735 = arguments.length;
var i__46646__auto___58736 = (0);
while(true){
if((i__46646__auto___58736 < len__46645__auto___58735)){
args__46652__auto__.push((arguments[i__46646__auto___58736]));

var G__58737 = (i__46646__auto___58736 + (1));
i__46646__auto___58736 = G__58737;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq58734){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58734));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58739 = arguments.length;
var i__46646__auto___58740 = (0);
while(true){
if((i__46646__auto___58740 < len__46645__auto___58739)){
args__46652__auto__.push((arguments[i__46646__auto___58740]));

var G__58741 = (i__46646__auto___58740 + (1));
i__46646__auto___58740 = G__58741;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq58738){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58738));
});

var g_QMARK__58742 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_58743 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__58742){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__58742))
,null));
var mkg_58744 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__58742,g_58743){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__58742,g_58743))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__58742,g_58743,mkg_58744){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__58742).call(null,x);
});})(g_QMARK__58742,g_58743,mkg_58744))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__58742,g_58743,mkg_58744){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_58744).call(null,gfn);
});})(g_QMARK__58742,g_58743,mkg_58744))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__58742,g_58743,mkg_58744){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_58743).call(null,generator);
});})(g_QMARK__58742,g_58743,mkg_58744))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__58706__auto___58764 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__58706__auto___58764){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58765 = arguments.length;
var i__46646__auto___58766 = (0);
while(true){
if((i__46646__auto___58766 < len__46645__auto___58765)){
args__46652__auto__.push((arguments[i__46646__auto___58766]));

var G__58767 = (i__46646__auto___58766 + (1));
i__46646__auto___58766 = G__58767;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58764))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58764){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58764),args);
});})(g__58706__auto___58764))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__58706__auto___58764){
return (function (seq58745){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58745));
});})(g__58706__auto___58764))
;


var g__58706__auto___58768 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__58706__auto___58768){
return (function cljs$spec$gen$alpha$list(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58769 = arguments.length;
var i__46646__auto___58770 = (0);
while(true){
if((i__46646__auto___58770 < len__46645__auto___58769)){
args__46652__auto__.push((arguments[i__46646__auto___58770]));

var G__58771 = (i__46646__auto___58770 + (1));
i__46646__auto___58770 = G__58771;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58768))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58768),args);
});})(g__58706__auto___58768))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__58706__auto___58768){
return (function (seq58746){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58746));
});})(g__58706__auto___58768))
;


var g__58706__auto___58772 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__58706__auto___58772){
return (function cljs$spec$gen$alpha$map(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58773 = arguments.length;
var i__46646__auto___58774 = (0);
while(true){
if((i__46646__auto___58774 < len__46645__auto___58773)){
args__46652__auto__.push((arguments[i__46646__auto___58774]));

var G__58775 = (i__46646__auto___58774 + (1));
i__46646__auto___58774 = G__58775;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58772))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58772),args);
});})(g__58706__auto___58772))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__58706__auto___58772){
return (function (seq58747){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58747));
});})(g__58706__auto___58772))
;


var g__58706__auto___58776 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__58706__auto___58776){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58777 = arguments.length;
var i__46646__auto___58778 = (0);
while(true){
if((i__46646__auto___58778 < len__46645__auto___58777)){
args__46652__auto__.push((arguments[i__46646__auto___58778]));

var G__58779 = (i__46646__auto___58778 + (1));
i__46646__auto___58778 = G__58779;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58776))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58776),args);
});})(g__58706__auto___58776))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__58706__auto___58776){
return (function (seq58748){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58748));
});})(g__58706__auto___58776))
;


var g__58706__auto___58780 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__58706__auto___58780){
return (function cljs$spec$gen$alpha$set(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58781 = arguments.length;
var i__46646__auto___58782 = (0);
while(true){
if((i__46646__auto___58782 < len__46645__auto___58781)){
args__46652__auto__.push((arguments[i__46646__auto___58782]));

var G__58783 = (i__46646__auto___58782 + (1));
i__46646__auto___58782 = G__58783;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58780))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58780){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58780),args);
});})(g__58706__auto___58780))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__58706__auto___58780){
return (function (seq58749){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58749));
});})(g__58706__auto___58780))
;


var g__58706__auto___58784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__58706__auto___58784){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58785 = arguments.length;
var i__46646__auto___58786 = (0);
while(true){
if((i__46646__auto___58786 < len__46645__auto___58785)){
args__46652__auto__.push((arguments[i__46646__auto___58786]));

var G__58787 = (i__46646__auto___58786 + (1));
i__46646__auto___58786 = G__58787;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58784))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58784){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58784),args);
});})(g__58706__auto___58784))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__58706__auto___58784){
return (function (seq58750){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58750));
});})(g__58706__auto___58784))
;


var g__58706__auto___58788 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__58706__auto___58788){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58789 = arguments.length;
var i__46646__auto___58790 = (0);
while(true){
if((i__46646__auto___58790 < len__46645__auto___58789)){
args__46652__auto__.push((arguments[i__46646__auto___58790]));

var G__58791 = (i__46646__auto___58790 + (1));
i__46646__auto___58790 = G__58791;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58788))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58788),args);
});})(g__58706__auto___58788))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__58706__auto___58788){
return (function (seq58751){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58751));
});})(g__58706__auto___58788))
;


var g__58706__auto___58792 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__58706__auto___58792){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58793 = arguments.length;
var i__46646__auto___58794 = (0);
while(true){
if((i__46646__auto___58794 < len__46645__auto___58793)){
args__46652__auto__.push((arguments[i__46646__auto___58794]));

var G__58795 = (i__46646__auto___58794 + (1));
i__46646__auto___58794 = G__58795;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58792))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58792){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58792),args);
});})(g__58706__auto___58792))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__58706__auto___58792){
return (function (seq58752){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58752));
});})(g__58706__auto___58792))
;


var g__58706__auto___58796 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__58706__auto___58796){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58797 = arguments.length;
var i__46646__auto___58798 = (0);
while(true){
if((i__46646__auto___58798 < len__46645__auto___58797)){
args__46652__auto__.push((arguments[i__46646__auto___58798]));

var G__58799 = (i__46646__auto___58798 + (1));
i__46646__auto___58798 = G__58799;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58796))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58796){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58796),args);
});})(g__58706__auto___58796))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__58706__auto___58796){
return (function (seq58753){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58753));
});})(g__58706__auto___58796))
;


var g__58706__auto___58800 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__58706__auto___58800){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58801 = arguments.length;
var i__46646__auto___58802 = (0);
while(true){
if((i__46646__auto___58802 < len__46645__auto___58801)){
args__46652__auto__.push((arguments[i__46646__auto___58802]));

var G__58803 = (i__46646__auto___58802 + (1));
i__46646__auto___58802 = G__58803;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58800))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58800){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58800),args);
});})(g__58706__auto___58800))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__58706__auto___58800){
return (function (seq58754){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58754));
});})(g__58706__auto___58800))
;


var g__58706__auto___58804 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__58706__auto___58804){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58805 = arguments.length;
var i__46646__auto___58806 = (0);
while(true){
if((i__46646__auto___58806 < len__46645__auto___58805)){
args__46652__auto__.push((arguments[i__46646__auto___58806]));

var G__58807 = (i__46646__auto___58806 + (1));
i__46646__auto___58806 = G__58807;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58804))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58804){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58804),args);
});})(g__58706__auto___58804))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__58706__auto___58804){
return (function (seq58755){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58755));
});})(g__58706__auto___58804))
;


var g__58706__auto___58808 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__58706__auto___58808){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58809 = arguments.length;
var i__46646__auto___58810 = (0);
while(true){
if((i__46646__auto___58810 < len__46645__auto___58809)){
args__46652__auto__.push((arguments[i__46646__auto___58810]));

var G__58811 = (i__46646__auto___58810 + (1));
i__46646__auto___58810 = G__58811;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58808))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58808){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58808),args);
});})(g__58706__auto___58808))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__58706__auto___58808){
return (function (seq58756){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58756));
});})(g__58706__auto___58808))
;


var g__58706__auto___58812 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__58706__auto___58812){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58813 = arguments.length;
var i__46646__auto___58814 = (0);
while(true){
if((i__46646__auto___58814 < len__46645__auto___58813)){
args__46652__auto__.push((arguments[i__46646__auto___58814]));

var G__58815 = (i__46646__auto___58814 + (1));
i__46646__auto___58814 = G__58815;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58812))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58812){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58812),args);
});})(g__58706__auto___58812))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__58706__auto___58812){
return (function (seq58757){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58757));
});})(g__58706__auto___58812))
;


var g__58706__auto___58816 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__58706__auto___58816){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58817 = arguments.length;
var i__46646__auto___58818 = (0);
while(true){
if((i__46646__auto___58818 < len__46645__auto___58817)){
args__46652__auto__.push((arguments[i__46646__auto___58818]));

var G__58819 = (i__46646__auto___58818 + (1));
i__46646__auto___58818 = G__58819;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58816))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58816){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58816),args);
});})(g__58706__auto___58816))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__58706__auto___58816){
return (function (seq58758){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58758));
});})(g__58706__auto___58816))
;


var g__58706__auto___58820 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__58706__auto___58820){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58821 = arguments.length;
var i__46646__auto___58822 = (0);
while(true){
if((i__46646__auto___58822 < len__46645__auto___58821)){
args__46652__auto__.push((arguments[i__46646__auto___58822]));

var G__58823 = (i__46646__auto___58822 + (1));
i__46646__auto___58822 = G__58823;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58820))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58820){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58820),args);
});})(g__58706__auto___58820))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__58706__auto___58820){
return (function (seq58759){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58759));
});})(g__58706__auto___58820))
;


var g__58706__auto___58824 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__58706__auto___58824){
return (function cljs$spec$gen$alpha$return(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58825 = arguments.length;
var i__46646__auto___58826 = (0);
while(true){
if((i__46646__auto___58826 < len__46645__auto___58825)){
args__46652__auto__.push((arguments[i__46646__auto___58826]));

var G__58827 = (i__46646__auto___58826 + (1));
i__46646__auto___58826 = G__58827;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58824))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58824){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58824),args);
});})(g__58706__auto___58824))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__58706__auto___58824){
return (function (seq58760){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58760));
});})(g__58706__auto___58824))
;


var g__58706__auto___58828 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__58706__auto___58828){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58829 = arguments.length;
var i__46646__auto___58830 = (0);
while(true){
if((i__46646__auto___58830 < len__46645__auto___58829)){
args__46652__auto__.push((arguments[i__46646__auto___58830]));

var G__58831 = (i__46646__auto___58830 + (1));
i__46646__auto___58830 = G__58831;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58828))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58828){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58828),args);
});})(g__58706__auto___58828))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__58706__auto___58828){
return (function (seq58761){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58761));
});})(g__58706__auto___58828))
;


var g__58706__auto___58832 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__58706__auto___58832){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58833 = arguments.length;
var i__46646__auto___58834 = (0);
while(true){
if((i__46646__auto___58834 < len__46645__auto___58833)){
args__46652__auto__.push((arguments[i__46646__auto___58834]));

var G__58835 = (i__46646__auto___58834 + (1));
i__46646__auto___58834 = G__58835;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58832))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58832){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58832),args);
});})(g__58706__auto___58832))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__58706__auto___58832){
return (function (seq58762){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58762));
});})(g__58706__auto___58832))
;


var g__58706__auto___58836 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__58706__auto___58836){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58837 = arguments.length;
var i__46646__auto___58838 = (0);
while(true){
if((i__46646__auto___58838 < len__46645__auto___58837)){
args__46652__auto__.push((arguments[i__46646__auto___58838]));

var G__58839 = (i__46646__auto___58838 + (1));
i__46646__auto___58838 = G__58839;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58706__auto___58836))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58706__auto___58836){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__58706__auto___58836),args);
});})(g__58706__auto___58836))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__58706__auto___58836){
return (function (seq58763){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58763));
});})(g__58706__auto___58836))
;

var g__58719__auto___58861 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__58719__auto___58861){
return (function cljs$spec$gen$alpha$any(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58862 = arguments.length;
var i__46646__auto___58863 = (0);
while(true){
if((i__46646__auto___58863 < len__46645__auto___58862)){
args__46652__auto__.push((arguments[i__46646__auto___58863]));

var G__58864 = (i__46646__auto___58863 + (1));
i__46646__auto___58863 = G__58864;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58861))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58861){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58861);
});})(g__58719__auto___58861))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__58719__auto___58861){
return (function (seq58840){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58840));
});})(g__58719__auto___58861))
;


var g__58719__auto___58865 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__58719__auto___58865){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58866 = arguments.length;
var i__46646__auto___58867 = (0);
while(true){
if((i__46646__auto___58867 < len__46645__auto___58866)){
args__46652__auto__.push((arguments[i__46646__auto___58867]));

var G__58868 = (i__46646__auto___58867 + (1));
i__46646__auto___58867 = G__58868;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58865))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58865){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58865);
});})(g__58719__auto___58865))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__58719__auto___58865){
return (function (seq58841){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58841));
});})(g__58719__auto___58865))
;


var g__58719__auto___58869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__58719__auto___58869){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58870 = arguments.length;
var i__46646__auto___58871 = (0);
while(true){
if((i__46646__auto___58871 < len__46645__auto___58870)){
args__46652__auto__.push((arguments[i__46646__auto___58871]));

var G__58872 = (i__46646__auto___58871 + (1));
i__46646__auto___58871 = G__58872;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58869))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58869){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58869);
});})(g__58719__auto___58869))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__58719__auto___58869){
return (function (seq58842){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58842));
});})(g__58719__auto___58869))
;


var g__58719__auto___58873 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__58719__auto___58873){
return (function cljs$spec$gen$alpha$char(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58874 = arguments.length;
var i__46646__auto___58875 = (0);
while(true){
if((i__46646__auto___58875 < len__46645__auto___58874)){
args__46652__auto__.push((arguments[i__46646__auto___58875]));

var G__58876 = (i__46646__auto___58875 + (1));
i__46646__auto___58875 = G__58876;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58873))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58873){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58873);
});})(g__58719__auto___58873))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__58719__auto___58873){
return (function (seq58843){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58843));
});})(g__58719__auto___58873))
;


var g__58719__auto___58877 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__58719__auto___58877){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58878 = arguments.length;
var i__46646__auto___58879 = (0);
while(true){
if((i__46646__auto___58879 < len__46645__auto___58878)){
args__46652__auto__.push((arguments[i__46646__auto___58879]));

var G__58880 = (i__46646__auto___58879 + (1));
i__46646__auto___58879 = G__58880;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58877))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58877){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58877);
});})(g__58719__auto___58877))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__58719__auto___58877){
return (function (seq58844){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58844));
});})(g__58719__auto___58877))
;


var g__58719__auto___58881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__58719__auto___58881){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58882 = arguments.length;
var i__46646__auto___58883 = (0);
while(true){
if((i__46646__auto___58883 < len__46645__auto___58882)){
args__46652__auto__.push((arguments[i__46646__auto___58883]));

var G__58884 = (i__46646__auto___58883 + (1));
i__46646__auto___58883 = G__58884;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58881))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58881){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58881);
});})(g__58719__auto___58881))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__58719__auto___58881){
return (function (seq58845){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58845));
});})(g__58719__auto___58881))
;


var g__58719__auto___58885 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__58719__auto___58885){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58886 = arguments.length;
var i__46646__auto___58887 = (0);
while(true){
if((i__46646__auto___58887 < len__46645__auto___58886)){
args__46652__auto__.push((arguments[i__46646__auto___58887]));

var G__58888 = (i__46646__auto___58887 + (1));
i__46646__auto___58887 = G__58888;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58885))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58885){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58885);
});})(g__58719__auto___58885))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__58719__auto___58885){
return (function (seq58846){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58846));
});})(g__58719__auto___58885))
;


var g__58719__auto___58889 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__58719__auto___58889){
return (function cljs$spec$gen$alpha$double(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58890 = arguments.length;
var i__46646__auto___58891 = (0);
while(true){
if((i__46646__auto___58891 < len__46645__auto___58890)){
args__46652__auto__.push((arguments[i__46646__auto___58891]));

var G__58892 = (i__46646__auto___58891 + (1));
i__46646__auto___58891 = G__58892;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58889))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58889){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58889);
});})(g__58719__auto___58889))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__58719__auto___58889){
return (function (seq58847){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58847));
});})(g__58719__auto___58889))
;


var g__58719__auto___58893 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__58719__auto___58893){
return (function cljs$spec$gen$alpha$int(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58894 = arguments.length;
var i__46646__auto___58895 = (0);
while(true){
if((i__46646__auto___58895 < len__46645__auto___58894)){
args__46652__auto__.push((arguments[i__46646__auto___58895]));

var G__58896 = (i__46646__auto___58895 + (1));
i__46646__auto___58895 = G__58896;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58893))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58893){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58893);
});})(g__58719__auto___58893))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__58719__auto___58893){
return (function (seq58848){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58848));
});})(g__58719__auto___58893))
;


var g__58719__auto___58897 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__58719__auto___58897){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58898 = arguments.length;
var i__46646__auto___58899 = (0);
while(true){
if((i__46646__auto___58899 < len__46645__auto___58898)){
args__46652__auto__.push((arguments[i__46646__auto___58899]));

var G__58900 = (i__46646__auto___58899 + (1));
i__46646__auto___58899 = G__58900;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58897))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58897){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58897);
});})(g__58719__auto___58897))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__58719__auto___58897){
return (function (seq58849){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58849));
});})(g__58719__auto___58897))
;


var g__58719__auto___58901 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__58719__auto___58901){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58902 = arguments.length;
var i__46646__auto___58903 = (0);
while(true){
if((i__46646__auto___58903 < len__46645__auto___58902)){
args__46652__auto__.push((arguments[i__46646__auto___58903]));

var G__58904 = (i__46646__auto___58903 + (1));
i__46646__auto___58903 = G__58904;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58901))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58901){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58901);
});})(g__58719__auto___58901))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__58719__auto___58901){
return (function (seq58850){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58850));
});})(g__58719__auto___58901))
;


var g__58719__auto___58905 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__58719__auto___58905){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58906 = arguments.length;
var i__46646__auto___58907 = (0);
while(true){
if((i__46646__auto___58907 < len__46645__auto___58906)){
args__46652__auto__.push((arguments[i__46646__auto___58907]));

var G__58908 = (i__46646__auto___58907 + (1));
i__46646__auto___58907 = G__58908;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58905))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58905){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58905);
});})(g__58719__auto___58905))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__58719__auto___58905){
return (function (seq58851){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58851));
});})(g__58719__auto___58905))
;


var g__58719__auto___58909 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__58719__auto___58909){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58910 = arguments.length;
var i__46646__auto___58911 = (0);
while(true){
if((i__46646__auto___58911 < len__46645__auto___58910)){
args__46652__auto__.push((arguments[i__46646__auto___58911]));

var G__58912 = (i__46646__auto___58911 + (1));
i__46646__auto___58911 = G__58912;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58909))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58909){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58909);
});})(g__58719__auto___58909))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__58719__auto___58909){
return (function (seq58852){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58852));
});})(g__58719__auto___58909))
;


var g__58719__auto___58913 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__58719__auto___58913){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58914 = arguments.length;
var i__46646__auto___58915 = (0);
while(true){
if((i__46646__auto___58915 < len__46645__auto___58914)){
args__46652__auto__.push((arguments[i__46646__auto___58915]));

var G__58916 = (i__46646__auto___58915 + (1));
i__46646__auto___58915 = G__58916;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58913))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58913){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58913);
});})(g__58719__auto___58913))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__58719__auto___58913){
return (function (seq58853){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58853));
});})(g__58719__auto___58913))
;


var g__58719__auto___58917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__58719__auto___58917){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58918 = arguments.length;
var i__46646__auto___58919 = (0);
while(true){
if((i__46646__auto___58919 < len__46645__auto___58918)){
args__46652__auto__.push((arguments[i__46646__auto___58919]));

var G__58920 = (i__46646__auto___58919 + (1));
i__46646__auto___58919 = G__58920;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58917))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58917){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58917);
});})(g__58719__auto___58917))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__58719__auto___58917){
return (function (seq58854){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58854));
});})(g__58719__auto___58917))
;


var g__58719__auto___58921 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__58719__auto___58921){
return (function cljs$spec$gen$alpha$string(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58922 = arguments.length;
var i__46646__auto___58923 = (0);
while(true){
if((i__46646__auto___58923 < len__46645__auto___58922)){
args__46652__auto__.push((arguments[i__46646__auto___58923]));

var G__58924 = (i__46646__auto___58923 + (1));
i__46646__auto___58923 = G__58924;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58921))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58921){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58921);
});})(g__58719__auto___58921))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__58719__auto___58921){
return (function (seq58855){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58855));
});})(g__58719__auto___58921))
;


var g__58719__auto___58925 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__58719__auto___58925){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58926 = arguments.length;
var i__46646__auto___58927 = (0);
while(true){
if((i__46646__auto___58927 < len__46645__auto___58926)){
args__46652__auto__.push((arguments[i__46646__auto___58927]));

var G__58928 = (i__46646__auto___58927 + (1));
i__46646__auto___58927 = G__58928;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58925))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58925){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58925);
});})(g__58719__auto___58925))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__58719__auto___58925){
return (function (seq58856){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58856));
});})(g__58719__auto___58925))
;


var g__58719__auto___58929 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__58719__auto___58929){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58930 = arguments.length;
var i__46646__auto___58931 = (0);
while(true){
if((i__46646__auto___58931 < len__46645__auto___58930)){
args__46652__auto__.push((arguments[i__46646__auto___58931]));

var G__58932 = (i__46646__auto___58931 + (1));
i__46646__auto___58931 = G__58932;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58929))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58929){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58929);
});})(g__58719__auto___58929))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__58719__auto___58929){
return (function (seq58857){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58857));
});})(g__58719__auto___58929))
;


var g__58719__auto___58933 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__58719__auto___58933){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58934 = arguments.length;
var i__46646__auto___58935 = (0);
while(true){
if((i__46646__auto___58935 < len__46645__auto___58934)){
args__46652__auto__.push((arguments[i__46646__auto___58935]));

var G__58936 = (i__46646__auto___58935 + (1));
i__46646__auto___58935 = G__58936;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58933))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58933){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58933);
});})(g__58719__auto___58933))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__58719__auto___58933){
return (function (seq58858){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58858));
});})(g__58719__auto___58933))
;


var g__58719__auto___58937 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__58719__auto___58937){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58938 = arguments.length;
var i__46646__auto___58939 = (0);
while(true){
if((i__46646__auto___58939 < len__46645__auto___58938)){
args__46652__auto__.push((arguments[i__46646__auto___58939]));

var G__58940 = (i__46646__auto___58939 + (1));
i__46646__auto___58939 = G__58940;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58937))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58937){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58937);
});})(g__58719__auto___58937))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__58719__auto___58937){
return (function (seq58859){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58859));
});})(g__58719__auto___58937))
;


var g__58719__auto___58941 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__58719__auto___58941){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58942 = arguments.length;
var i__46646__auto___58943 = (0);
while(true){
if((i__46646__auto___58943 < len__46645__auto___58942)){
args__46652__auto__.push((arguments[i__46646__auto___58943]));

var G__58944 = (i__46646__auto___58943 + (1));
i__46646__auto___58943 = G__58944;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});})(g__58719__auto___58941))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__58719__auto___58941){
return (function (args){
return cljs.core.deref.call(null,g__58719__auto___58941);
});})(g__58719__auto___58941))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__58719__auto___58941){
return (function (seq58860){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58860));
});})(g__58719__auto___58941))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__46652__auto__ = [];
var len__46645__auto___58947 = arguments.length;
var i__46646__auto___58948 = (0);
while(true){
if((i__46646__auto___58948 < len__46645__auto___58947)){
args__46652__auto__.push((arguments[i__46646__auto___58948]));

var G__58949 = (i__46646__auto___58948 + (1));
i__46646__auto___58948 = G__58949;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__58945_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__58945_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq58946){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58946));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__58950_SHARP_){
return (new Date(p1__58950_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1498049881854