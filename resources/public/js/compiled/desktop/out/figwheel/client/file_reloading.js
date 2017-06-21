// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__45424__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__45424__auto__){
return or__45424__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__45424__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__57642_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__57642_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__57647 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__57648 = null;
var count__57649 = (0);
var i__57650 = (0);
while(true){
if((i__57650 < count__57649)){
var n = cljs.core._nth.call(null,chunk__57648,i__57650);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__57651 = seq__57647;
var G__57652 = chunk__57648;
var G__57653 = count__57649;
var G__57654 = (i__57650 + (1));
seq__57647 = G__57651;
chunk__57648 = G__57652;
count__57649 = G__57653;
i__57650 = G__57654;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__57647);
if(temp__5278__auto__){
var seq__57647__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57647__$1)){
var c__46335__auto__ = cljs.core.chunk_first.call(null,seq__57647__$1);
var G__57655 = cljs.core.chunk_rest.call(null,seq__57647__$1);
var G__57656 = c__46335__auto__;
var G__57657 = cljs.core.count.call(null,c__46335__auto__);
var G__57658 = (0);
seq__57647 = G__57655;
chunk__57648 = G__57656;
count__57649 = G__57657;
i__57650 = G__57658;
continue;
} else {
var n = cljs.core.first.call(null,seq__57647__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__57659 = cljs.core.next.call(null,seq__57647__$1);
var G__57660 = null;
var G__57661 = (0);
var G__57662 = (0);
seq__57647 = G__57659;
chunk__57648 = G__57660;
count__57649 = G__57661;
i__57650 = G__57662;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__57713_57724 = cljs.core.seq.call(null,deps);
var chunk__57714_57725 = null;
var count__57715_57726 = (0);
var i__57716_57727 = (0);
while(true){
if((i__57716_57727 < count__57715_57726)){
var dep_57728 = cljs.core._nth.call(null,chunk__57714_57725,i__57716_57727);
topo_sort_helper_STAR_.call(null,dep_57728,(depth + (1)),state);

var G__57729 = seq__57713_57724;
var G__57730 = chunk__57714_57725;
var G__57731 = count__57715_57726;
var G__57732 = (i__57716_57727 + (1));
seq__57713_57724 = G__57729;
chunk__57714_57725 = G__57730;
count__57715_57726 = G__57731;
i__57716_57727 = G__57732;
continue;
} else {
var temp__5278__auto___57733 = cljs.core.seq.call(null,seq__57713_57724);
if(temp__5278__auto___57733){
var seq__57713_57734__$1 = temp__5278__auto___57733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57713_57734__$1)){
var c__46335__auto___57735 = cljs.core.chunk_first.call(null,seq__57713_57734__$1);
var G__57736 = cljs.core.chunk_rest.call(null,seq__57713_57734__$1);
var G__57737 = c__46335__auto___57735;
var G__57738 = cljs.core.count.call(null,c__46335__auto___57735);
var G__57739 = (0);
seq__57713_57724 = G__57736;
chunk__57714_57725 = G__57737;
count__57715_57726 = G__57738;
i__57716_57727 = G__57739;
continue;
} else {
var dep_57740 = cljs.core.first.call(null,seq__57713_57734__$1);
topo_sort_helper_STAR_.call(null,dep_57740,(depth + (1)),state);

var G__57741 = cljs.core.next.call(null,seq__57713_57734__$1);
var G__57742 = null;
var G__57743 = (0);
var G__57744 = (0);
seq__57713_57724 = G__57741;
chunk__57714_57725 = G__57742;
count__57715_57726 = G__57743;
i__57716_57727 = G__57744;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__57717){
var vec__57721 = p__57717;
var seq__57722 = cljs.core.seq.call(null,vec__57721);
var first__57723 = cljs.core.first.call(null,seq__57722);
var seq__57722__$1 = cljs.core.next.call(null,seq__57722);
var x = first__57723;
var xs = seq__57722__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__57721,seq__57722,first__57723,seq__57722__$1,x,xs,get_deps__$1){
return (function (p1__57663_SHARP_){
return clojure.set.difference.call(null,p1__57663_SHARP_,x);
});})(vec__57721,seq__57722,first__57723,seq__57722__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__57757 = cljs.core.seq.call(null,provides);
var chunk__57758 = null;
var count__57759 = (0);
var i__57760 = (0);
while(true){
if((i__57760 < count__57759)){
var prov = cljs.core._nth.call(null,chunk__57758,i__57760);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57761_57769 = cljs.core.seq.call(null,requires);
var chunk__57762_57770 = null;
var count__57763_57771 = (0);
var i__57764_57772 = (0);
while(true){
if((i__57764_57772 < count__57763_57771)){
var req_57773 = cljs.core._nth.call(null,chunk__57762_57770,i__57764_57772);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57773,prov);

var G__57774 = seq__57761_57769;
var G__57775 = chunk__57762_57770;
var G__57776 = count__57763_57771;
var G__57777 = (i__57764_57772 + (1));
seq__57761_57769 = G__57774;
chunk__57762_57770 = G__57775;
count__57763_57771 = G__57776;
i__57764_57772 = G__57777;
continue;
} else {
var temp__5278__auto___57778 = cljs.core.seq.call(null,seq__57761_57769);
if(temp__5278__auto___57778){
var seq__57761_57779__$1 = temp__5278__auto___57778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57761_57779__$1)){
var c__46335__auto___57780 = cljs.core.chunk_first.call(null,seq__57761_57779__$1);
var G__57781 = cljs.core.chunk_rest.call(null,seq__57761_57779__$1);
var G__57782 = c__46335__auto___57780;
var G__57783 = cljs.core.count.call(null,c__46335__auto___57780);
var G__57784 = (0);
seq__57761_57769 = G__57781;
chunk__57762_57770 = G__57782;
count__57763_57771 = G__57783;
i__57764_57772 = G__57784;
continue;
} else {
var req_57785 = cljs.core.first.call(null,seq__57761_57779__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57785,prov);

var G__57786 = cljs.core.next.call(null,seq__57761_57779__$1);
var G__57787 = null;
var G__57788 = (0);
var G__57789 = (0);
seq__57761_57769 = G__57786;
chunk__57762_57770 = G__57787;
count__57763_57771 = G__57788;
i__57764_57772 = G__57789;
continue;
}
} else {
}
}
break;
}

var G__57790 = seq__57757;
var G__57791 = chunk__57758;
var G__57792 = count__57759;
var G__57793 = (i__57760 + (1));
seq__57757 = G__57790;
chunk__57758 = G__57791;
count__57759 = G__57792;
i__57760 = G__57793;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__57757);
if(temp__5278__auto__){
var seq__57757__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57757__$1)){
var c__46335__auto__ = cljs.core.chunk_first.call(null,seq__57757__$1);
var G__57794 = cljs.core.chunk_rest.call(null,seq__57757__$1);
var G__57795 = c__46335__auto__;
var G__57796 = cljs.core.count.call(null,c__46335__auto__);
var G__57797 = (0);
seq__57757 = G__57794;
chunk__57758 = G__57795;
count__57759 = G__57796;
i__57760 = G__57797;
continue;
} else {
var prov = cljs.core.first.call(null,seq__57757__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57765_57798 = cljs.core.seq.call(null,requires);
var chunk__57766_57799 = null;
var count__57767_57800 = (0);
var i__57768_57801 = (0);
while(true){
if((i__57768_57801 < count__57767_57800)){
var req_57802 = cljs.core._nth.call(null,chunk__57766_57799,i__57768_57801);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57802,prov);

var G__57803 = seq__57765_57798;
var G__57804 = chunk__57766_57799;
var G__57805 = count__57767_57800;
var G__57806 = (i__57768_57801 + (1));
seq__57765_57798 = G__57803;
chunk__57766_57799 = G__57804;
count__57767_57800 = G__57805;
i__57768_57801 = G__57806;
continue;
} else {
var temp__5278__auto___57807__$1 = cljs.core.seq.call(null,seq__57765_57798);
if(temp__5278__auto___57807__$1){
var seq__57765_57808__$1 = temp__5278__auto___57807__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57765_57808__$1)){
var c__46335__auto___57809 = cljs.core.chunk_first.call(null,seq__57765_57808__$1);
var G__57810 = cljs.core.chunk_rest.call(null,seq__57765_57808__$1);
var G__57811 = c__46335__auto___57809;
var G__57812 = cljs.core.count.call(null,c__46335__auto___57809);
var G__57813 = (0);
seq__57765_57798 = G__57810;
chunk__57766_57799 = G__57811;
count__57767_57800 = G__57812;
i__57768_57801 = G__57813;
continue;
} else {
var req_57814 = cljs.core.first.call(null,seq__57765_57808__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57814,prov);

var G__57815 = cljs.core.next.call(null,seq__57765_57808__$1);
var G__57816 = null;
var G__57817 = (0);
var G__57818 = (0);
seq__57765_57798 = G__57815;
chunk__57766_57799 = G__57816;
count__57767_57800 = G__57817;
i__57768_57801 = G__57818;
continue;
}
} else {
}
}
break;
}

var G__57819 = cljs.core.next.call(null,seq__57757__$1);
var G__57820 = null;
var G__57821 = (0);
var G__57822 = (0);
seq__57757 = G__57819;
chunk__57758 = G__57820;
count__57759 = G__57821;
i__57760 = G__57822;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__57827_57831 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__57828_57832 = null;
var count__57829_57833 = (0);
var i__57830_57834 = (0);
while(true){
if((i__57830_57834 < count__57829_57833)){
var ns_57835 = cljs.core._nth.call(null,chunk__57828_57832,i__57830_57834);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57835);

var G__57836 = seq__57827_57831;
var G__57837 = chunk__57828_57832;
var G__57838 = count__57829_57833;
var G__57839 = (i__57830_57834 + (1));
seq__57827_57831 = G__57836;
chunk__57828_57832 = G__57837;
count__57829_57833 = G__57838;
i__57830_57834 = G__57839;
continue;
} else {
var temp__5278__auto___57840 = cljs.core.seq.call(null,seq__57827_57831);
if(temp__5278__auto___57840){
var seq__57827_57841__$1 = temp__5278__auto___57840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57827_57841__$1)){
var c__46335__auto___57842 = cljs.core.chunk_first.call(null,seq__57827_57841__$1);
var G__57843 = cljs.core.chunk_rest.call(null,seq__57827_57841__$1);
var G__57844 = c__46335__auto___57842;
var G__57845 = cljs.core.count.call(null,c__46335__auto___57842);
var G__57846 = (0);
seq__57827_57831 = G__57843;
chunk__57828_57832 = G__57844;
count__57829_57833 = G__57845;
i__57830_57834 = G__57846;
continue;
} else {
var ns_57847 = cljs.core.first.call(null,seq__57827_57841__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57847);

var G__57848 = cljs.core.next.call(null,seq__57827_57841__$1);
var G__57849 = null;
var G__57850 = (0);
var G__57851 = (0);
seq__57827_57831 = G__57848;
chunk__57828_57832 = G__57849;
count__57829_57833 = G__57850;
i__57830_57834 = G__57851;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__45424__auto__ = goog.require__;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__57852__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__57852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57853__i = 0, G__57853__a = new Array(arguments.length -  0);
while (G__57853__i < G__57853__a.length) {G__57853__a[G__57853__i] = arguments[G__57853__i + 0]; ++G__57853__i;}
  args = new cljs.core.IndexedSeq(G__57853__a,0,null);
} 
return G__57852__delegate.call(this,args);};
G__57852.cljs$lang$maxFixedArity = 0;
G__57852.cljs$lang$applyTo = (function (arglist__57854){
var args = cljs.core.seq(arglist__57854);
return G__57852__delegate(args);
});
G__57852.cljs$core$IFn$_invoke$arity$variadic = G__57852__delegate;
return G__57852;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__57855 = cljs.core._EQ_;
var expr__57856 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__57855.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__57856))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__57855,expr__57856){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__57855,expr__57856))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__57855,expr__57856){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e57858){if((e57858 instanceof Error)){
var e = e57858;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e57858;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__57855,expr__57856))
} else {
if(cljs.core.truth_(pred__57855.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__57856))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__57855.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__57856))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__57855.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__57856))){
return ((function (pred__57855,expr__57856){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e57859){if((e57859 instanceof Error)){
var e = e57859;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e57859;

}
}})());
});
;})(pred__57855,expr__57856))
} else {
return ((function (pred__57855,expr__57856){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__57855,expr__57856))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__57860,callback){
var map__57863 = p__57860;
var map__57863__$1 = ((((!((map__57863 == null)))?((((map__57863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57863):map__57863);
var file_msg = map__57863__$1;
var request_url = cljs.core.get.call(null,map__57863__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__57863,map__57863__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__57863,map__57863__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__){
return (function (state_57887){
var state_val_57888 = (state_57887[(1)]);
if((state_val_57888 === (7))){
var inst_57883 = (state_57887[(2)]);
var state_57887__$1 = state_57887;
var statearr_57889_57909 = state_57887__$1;
(statearr_57889_57909[(2)] = inst_57883);

(statearr_57889_57909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57888 === (1))){
var state_57887__$1 = state_57887;
var statearr_57890_57910 = state_57887__$1;
(statearr_57890_57910[(2)] = null);

(statearr_57890_57910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57888 === (4))){
var inst_57867 = (state_57887[(7)]);
var inst_57867__$1 = (state_57887[(2)]);
var state_57887__$1 = (function (){var statearr_57891 = state_57887;
(statearr_57891[(7)] = inst_57867__$1);

return statearr_57891;
})();
if(cljs.core.truth_(inst_57867__$1)){
var statearr_57892_57911 = state_57887__$1;
(statearr_57892_57911[(1)] = (5));

} else {
var statearr_57893_57912 = state_57887__$1;
(statearr_57893_57912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57888 === (6))){
var state_57887__$1 = state_57887;
var statearr_57894_57913 = state_57887__$1;
(statearr_57894_57913[(2)] = null);

(statearr_57894_57913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57888 === (3))){
var inst_57885 = (state_57887[(2)]);
var state_57887__$1 = state_57887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57887__$1,inst_57885);
} else {
if((state_val_57888 === (2))){
var state_57887__$1 = state_57887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57887__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_57888 === (11))){
var inst_57879 = (state_57887[(2)]);
var state_57887__$1 = (function (){var statearr_57895 = state_57887;
(statearr_57895[(8)] = inst_57879);

return statearr_57895;
})();
var statearr_57896_57914 = state_57887__$1;
(statearr_57896_57914[(2)] = null);

(statearr_57896_57914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57888 === (9))){
var inst_57871 = (state_57887[(9)]);
var inst_57873 = (state_57887[(10)]);
var inst_57875 = inst_57873.call(null,inst_57871);
var state_57887__$1 = state_57887;
var statearr_57897_57915 = state_57887__$1;
(statearr_57897_57915[(2)] = inst_57875);

(statearr_57897_57915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57888 === (5))){
var inst_57867 = (state_57887[(7)]);
var inst_57869 = figwheel.client.file_reloading.blocking_load.call(null,inst_57867);
var state_57887__$1 = state_57887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57887__$1,(8),inst_57869);
} else {
if((state_val_57888 === (10))){
var inst_57871 = (state_57887[(9)]);
var inst_57877 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_57871);
var state_57887__$1 = state_57887;
var statearr_57898_57916 = state_57887__$1;
(statearr_57898_57916[(2)] = inst_57877);

(statearr_57898_57916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57888 === (8))){
var inst_57873 = (state_57887[(10)]);
var inst_57867 = (state_57887[(7)]);
var inst_57871 = (state_57887[(2)]);
var inst_57872 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_57873__$1 = cljs.core.get.call(null,inst_57872,inst_57867);
var state_57887__$1 = (function (){var statearr_57899 = state_57887;
(statearr_57899[(9)] = inst_57871);

(statearr_57899[(10)] = inst_57873__$1);

return statearr_57899;
})();
if(cljs.core.truth_(inst_57873__$1)){
var statearr_57900_57917 = state_57887__$1;
(statearr_57900_57917[(1)] = (9));

} else {
var statearr_57901_57918 = state_57887__$1;
(statearr_57901_57918[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__53134__auto__))
;
return ((function (switch__53020__auto__,c__53134__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__53021__auto__ = null;
var figwheel$client$file_reloading$state_machine__53021__auto____0 = (function (){
var statearr_57905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57905[(0)] = figwheel$client$file_reloading$state_machine__53021__auto__);

(statearr_57905[(1)] = (1));

return statearr_57905;
});
var figwheel$client$file_reloading$state_machine__53021__auto____1 = (function (state_57887){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_57887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e57906){if((e57906 instanceof Object)){
var ex__53024__auto__ = e57906;
var statearr_57907_57919 = state_57887;
(statearr_57907_57919[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57920 = state_57887;
state_57887 = G__57920;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__53021__auto__ = function(state_57887){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__53021__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__53021__auto____1.call(this,state_57887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__53021__auto____0;
figwheel$client$file_reloading$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__53021__auto____1;
return figwheel$client$file_reloading$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__))
})();
var state__53136__auto__ = (function (){var statearr_57908 = f__53135__auto__.call(null);
(statearr_57908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_57908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__))
);

return c__53134__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__57921,callback){
var map__57924 = p__57921;
var map__57924__$1 = ((((!((map__57924 == null)))?((((map__57924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57924):map__57924);
var file_msg = map__57924__$1;
var namespace = cljs.core.get.call(null,map__57924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__57924,map__57924__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__57924,map__57924__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__57926){
var map__57929 = p__57926;
var map__57929__$1 = ((((!((map__57929 == null)))?((((map__57929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57929):map__57929);
var file_msg = map__57929__$1;
var namespace = cljs.core.get.call(null,map__57929__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__57931){
var map__57934 = p__57931;
var map__57934__$1 = ((((!((map__57934 == null)))?((((map__57934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57934):map__57934);
var file_msg = map__57934__$1;
var namespace = cljs.core.get.call(null,map__57934__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__45412__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__45412__auto__){
var or__45424__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
var or__45424__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__45424__auto____$1)){
return or__45424__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__45412__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__57936,callback){
var map__57939 = p__57936;
var map__57939__$1 = ((((!((map__57939 == null)))?((((map__57939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57939):map__57939);
var file_msg = map__57939__$1;
var request_url = cljs.core.get.call(null,map__57939__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__57939__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__53134__auto___58043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___58043,out){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___58043,out){
return (function (state_58025){
var state_val_58026 = (state_58025[(1)]);
if((state_val_58026 === (1))){
var inst_57999 = cljs.core.seq.call(null,files);
var inst_58000 = cljs.core.first.call(null,inst_57999);
var inst_58001 = cljs.core.next.call(null,inst_57999);
var inst_58002 = files;
var state_58025__$1 = (function (){var statearr_58027 = state_58025;
(statearr_58027[(7)] = inst_58001);

(statearr_58027[(8)] = inst_58002);

(statearr_58027[(9)] = inst_58000);

return statearr_58027;
})();
var statearr_58028_58044 = state_58025__$1;
(statearr_58028_58044[(2)] = null);

(statearr_58028_58044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58026 === (2))){
var inst_58008 = (state_58025[(10)]);
var inst_58002 = (state_58025[(8)]);
var inst_58007 = cljs.core.seq.call(null,inst_58002);
var inst_58008__$1 = cljs.core.first.call(null,inst_58007);
var inst_58009 = cljs.core.next.call(null,inst_58007);
var inst_58010 = (inst_58008__$1 == null);
var inst_58011 = cljs.core.not.call(null,inst_58010);
var state_58025__$1 = (function (){var statearr_58029 = state_58025;
(statearr_58029[(10)] = inst_58008__$1);

(statearr_58029[(11)] = inst_58009);

return statearr_58029;
})();
if(inst_58011){
var statearr_58030_58045 = state_58025__$1;
(statearr_58030_58045[(1)] = (4));

} else {
var statearr_58031_58046 = state_58025__$1;
(statearr_58031_58046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58026 === (3))){
var inst_58023 = (state_58025[(2)]);
var state_58025__$1 = state_58025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58025__$1,inst_58023);
} else {
if((state_val_58026 === (4))){
var inst_58008 = (state_58025[(10)]);
var inst_58013 = figwheel.client.file_reloading.reload_js_file.call(null,inst_58008);
var state_58025__$1 = state_58025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58025__$1,(7),inst_58013);
} else {
if((state_val_58026 === (5))){
var inst_58019 = cljs.core.async.close_BANG_.call(null,out);
var state_58025__$1 = state_58025;
var statearr_58032_58047 = state_58025__$1;
(statearr_58032_58047[(2)] = inst_58019);

(statearr_58032_58047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58026 === (6))){
var inst_58021 = (state_58025[(2)]);
var state_58025__$1 = state_58025;
var statearr_58033_58048 = state_58025__$1;
(statearr_58033_58048[(2)] = inst_58021);

(statearr_58033_58048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58026 === (7))){
var inst_58009 = (state_58025[(11)]);
var inst_58015 = (state_58025[(2)]);
var inst_58016 = cljs.core.async.put_BANG_.call(null,out,inst_58015);
var inst_58002 = inst_58009;
var state_58025__$1 = (function (){var statearr_58034 = state_58025;
(statearr_58034[(12)] = inst_58016);

(statearr_58034[(8)] = inst_58002);

return statearr_58034;
})();
var statearr_58035_58049 = state_58025__$1;
(statearr_58035_58049[(2)] = null);

(statearr_58035_58049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__53134__auto___58043,out))
;
return ((function (switch__53020__auto__,c__53134__auto___58043,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto____0 = (function (){
var statearr_58039 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58039[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto__);

(statearr_58039[(1)] = (1));

return statearr_58039;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto____1 = (function (state_58025){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_58025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e58040){if((e58040 instanceof Object)){
var ex__53024__auto__ = e58040;
var statearr_58041_58050 = state_58025;
(statearr_58041_58050[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58051 = state_58025;
state_58025 = G__58051;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto__ = function(state_58025){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto____1.call(this,state_58025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___58043,out))
})();
var state__53136__auto__ = (function (){var statearr_58042 = f__53135__auto__.call(null);
(statearr_58042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___58043);

return statearr_58042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___58043,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__58052,opts){
var map__58056 = p__58052;
var map__58056__$1 = ((((!((map__58056 == null)))?((((map__58056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58056):map__58056);
var eval_body = cljs.core.get.call(null,map__58056__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__58056__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__45412__auto__ = eval_body;
if(cljs.core.truth_(and__45412__auto__)){
return typeof eval_body === 'string';
} else {
return and__45412__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e58058){var e = e58058;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__58059_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58059_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__58068){
var vec__58069 = p__58068;
var k = cljs.core.nth.call(null,vec__58069,(0),null);
var v = cljs.core.nth.call(null,vec__58069,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__58072){
var vec__58073 = p__58072;
var k = cljs.core.nth.call(null,vec__58073,(0),null);
var v = cljs.core.nth.call(null,vec__58073,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__58079,p__58080){
var map__58328 = p__58079;
var map__58328__$1 = ((((!((map__58328 == null)))?((((map__58328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58328):map__58328);
var opts = map__58328__$1;
var before_jsload = cljs.core.get.call(null,map__58328__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__58328__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__58328__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__58329 = p__58080;
var map__58329__$1 = ((((!((map__58329 == null)))?((((map__58329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58329):map__58329);
var msg = map__58329__$1;
var files = cljs.core.get.call(null,map__58329__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__58329__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__58329__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_58483){
var state_val_58484 = (state_58483[(1)]);
if((state_val_58484 === (7))){
var inst_58344 = (state_58483[(7)]);
var inst_58345 = (state_58483[(8)]);
var inst_58346 = (state_58483[(9)]);
var inst_58343 = (state_58483[(10)]);
var inst_58351 = cljs.core._nth.call(null,inst_58344,inst_58346);
var inst_58352 = figwheel.client.file_reloading.eval_body.call(null,inst_58351,opts);
var inst_58353 = (inst_58346 + (1));
var tmp58485 = inst_58344;
var tmp58486 = inst_58345;
var tmp58487 = inst_58343;
var inst_58343__$1 = tmp58487;
var inst_58344__$1 = tmp58485;
var inst_58345__$1 = tmp58486;
var inst_58346__$1 = inst_58353;
var state_58483__$1 = (function (){var statearr_58488 = state_58483;
(statearr_58488[(11)] = inst_58352);

(statearr_58488[(7)] = inst_58344__$1);

(statearr_58488[(8)] = inst_58345__$1);

(statearr_58488[(9)] = inst_58346__$1);

(statearr_58488[(10)] = inst_58343__$1);

return statearr_58488;
})();
var statearr_58489_58575 = state_58483__$1;
(statearr_58489_58575[(2)] = null);

(statearr_58489_58575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (20))){
var inst_58386 = (state_58483[(12)]);
var inst_58394 = figwheel.client.file_reloading.sort_files.call(null,inst_58386);
var state_58483__$1 = state_58483;
var statearr_58490_58576 = state_58483__$1;
(statearr_58490_58576[(2)] = inst_58394);

(statearr_58490_58576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (27))){
var state_58483__$1 = state_58483;
var statearr_58491_58577 = state_58483__$1;
(statearr_58491_58577[(2)] = null);

(statearr_58491_58577[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (1))){
var inst_58335 = (state_58483[(13)]);
var inst_58332 = before_jsload.call(null,files);
var inst_58333 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_58334 = (function (){return ((function (inst_58335,inst_58332,inst_58333,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58076_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58076_SHARP_);
});
;})(inst_58335,inst_58332,inst_58333,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58335__$1 = cljs.core.filter.call(null,inst_58334,files);
var inst_58336 = cljs.core.not_empty.call(null,inst_58335__$1);
var state_58483__$1 = (function (){var statearr_58492 = state_58483;
(statearr_58492[(14)] = inst_58333);

(statearr_58492[(15)] = inst_58332);

(statearr_58492[(13)] = inst_58335__$1);

return statearr_58492;
})();
if(cljs.core.truth_(inst_58336)){
var statearr_58493_58578 = state_58483__$1;
(statearr_58493_58578[(1)] = (2));

} else {
var statearr_58494_58579 = state_58483__$1;
(statearr_58494_58579[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (24))){
var state_58483__$1 = state_58483;
var statearr_58495_58580 = state_58483__$1;
(statearr_58495_58580[(2)] = null);

(statearr_58495_58580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (39))){
var inst_58436 = (state_58483[(16)]);
var state_58483__$1 = state_58483;
var statearr_58496_58581 = state_58483__$1;
(statearr_58496_58581[(2)] = inst_58436);

(statearr_58496_58581[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (46))){
var inst_58478 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
var statearr_58497_58582 = state_58483__$1;
(statearr_58497_58582[(2)] = inst_58478);

(statearr_58497_58582[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (4))){
var inst_58380 = (state_58483[(2)]);
var inst_58381 = cljs.core.List.EMPTY;
var inst_58382 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_58381);
var inst_58383 = (function (){return ((function (inst_58380,inst_58381,inst_58382,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58077_SHARP_){
var and__45412__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58077_SHARP_);
if(cljs.core.truth_(and__45412__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58077_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__58077_SHARP_)));
} else {
return and__45412__auto__;
}
});
;})(inst_58380,inst_58381,inst_58382,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58384 = cljs.core.filter.call(null,inst_58383,files);
var inst_58385 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_58386 = cljs.core.concat.call(null,inst_58384,inst_58385);
var state_58483__$1 = (function (){var statearr_58498 = state_58483;
(statearr_58498[(17)] = inst_58380);

(statearr_58498[(18)] = inst_58382);

(statearr_58498[(12)] = inst_58386);

return statearr_58498;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_58499_58583 = state_58483__$1;
(statearr_58499_58583[(1)] = (16));

} else {
var statearr_58500_58584 = state_58483__$1;
(statearr_58500_58584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (15))){
var inst_58370 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
var statearr_58501_58585 = state_58483__$1;
(statearr_58501_58585[(2)] = inst_58370);

(statearr_58501_58585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (21))){
var inst_58396 = (state_58483[(19)]);
var inst_58396__$1 = (state_58483[(2)]);
var inst_58397 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_58396__$1);
var state_58483__$1 = (function (){var statearr_58502 = state_58483;
(statearr_58502[(19)] = inst_58396__$1);

return statearr_58502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58483__$1,(22),inst_58397);
} else {
if((state_val_58484 === (31))){
var inst_58481 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58483__$1,inst_58481);
} else {
if((state_val_58484 === (32))){
var inst_58436 = (state_58483[(16)]);
var inst_58441 = inst_58436.cljs$lang$protocol_mask$partition0$;
var inst_58442 = (inst_58441 & (64));
var inst_58443 = inst_58436.cljs$core$ISeq$;
var inst_58444 = (cljs.core.PROTOCOL_SENTINEL === inst_58443);
var inst_58445 = (inst_58442) || (inst_58444);
var state_58483__$1 = state_58483;
if(cljs.core.truth_(inst_58445)){
var statearr_58503_58586 = state_58483__$1;
(statearr_58503_58586[(1)] = (35));

} else {
var statearr_58504_58587 = state_58483__$1;
(statearr_58504_58587[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (40))){
var inst_58458 = (state_58483[(20)]);
var inst_58457 = (state_58483[(2)]);
var inst_58458__$1 = cljs.core.get.call(null,inst_58457,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_58459 = cljs.core.get.call(null,inst_58457,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_58460 = cljs.core.not_empty.call(null,inst_58458__$1);
var state_58483__$1 = (function (){var statearr_58505 = state_58483;
(statearr_58505[(20)] = inst_58458__$1);

(statearr_58505[(21)] = inst_58459);

return statearr_58505;
})();
if(cljs.core.truth_(inst_58460)){
var statearr_58506_58588 = state_58483__$1;
(statearr_58506_58588[(1)] = (41));

} else {
var statearr_58507_58589 = state_58483__$1;
(statearr_58507_58589[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (33))){
var state_58483__$1 = state_58483;
var statearr_58508_58590 = state_58483__$1;
(statearr_58508_58590[(2)] = false);

(statearr_58508_58590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (13))){
var inst_58356 = (state_58483[(22)]);
var inst_58360 = cljs.core.chunk_first.call(null,inst_58356);
var inst_58361 = cljs.core.chunk_rest.call(null,inst_58356);
var inst_58362 = cljs.core.count.call(null,inst_58360);
var inst_58343 = inst_58361;
var inst_58344 = inst_58360;
var inst_58345 = inst_58362;
var inst_58346 = (0);
var state_58483__$1 = (function (){var statearr_58509 = state_58483;
(statearr_58509[(7)] = inst_58344);

(statearr_58509[(8)] = inst_58345);

(statearr_58509[(9)] = inst_58346);

(statearr_58509[(10)] = inst_58343);

return statearr_58509;
})();
var statearr_58510_58591 = state_58483__$1;
(statearr_58510_58591[(2)] = null);

(statearr_58510_58591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (22))){
var inst_58396 = (state_58483[(19)]);
var inst_58399 = (state_58483[(23)]);
var inst_58404 = (state_58483[(24)]);
var inst_58400 = (state_58483[(25)]);
var inst_58399__$1 = (state_58483[(2)]);
var inst_58400__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58399__$1);
var inst_58401 = (function (){var all_files = inst_58396;
var res_SINGLEQUOTE_ = inst_58399__$1;
var res = inst_58400__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_58396,inst_58399,inst_58404,inst_58400,inst_58399__$1,inst_58400__$1,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58078_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__58078_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_58396,inst_58399,inst_58404,inst_58400,inst_58399__$1,inst_58400__$1,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58402 = cljs.core.filter.call(null,inst_58401,inst_58399__$1);
var inst_58403 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_58404__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58403);
var inst_58405 = cljs.core.not_empty.call(null,inst_58404__$1);
var state_58483__$1 = (function (){var statearr_58511 = state_58483;
(statearr_58511[(26)] = inst_58402);

(statearr_58511[(23)] = inst_58399__$1);

(statearr_58511[(24)] = inst_58404__$1);

(statearr_58511[(25)] = inst_58400__$1);

return statearr_58511;
})();
if(cljs.core.truth_(inst_58405)){
var statearr_58512_58592 = state_58483__$1;
(statearr_58512_58592[(1)] = (23));

} else {
var statearr_58513_58593 = state_58483__$1;
(statearr_58513_58593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (36))){
var state_58483__$1 = state_58483;
var statearr_58514_58594 = state_58483__$1;
(statearr_58514_58594[(2)] = false);

(statearr_58514_58594[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (41))){
var inst_58458 = (state_58483[(20)]);
var inst_58462 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_58463 = cljs.core.map.call(null,inst_58462,inst_58458);
var inst_58464 = cljs.core.pr_str.call(null,inst_58463);
var inst_58465 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58464)].join('');
var inst_58466 = figwheel.client.utils.log.call(null,inst_58465);
var state_58483__$1 = state_58483;
var statearr_58515_58595 = state_58483__$1;
(statearr_58515_58595[(2)] = inst_58466);

(statearr_58515_58595[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (43))){
var inst_58459 = (state_58483[(21)]);
var inst_58469 = (state_58483[(2)]);
var inst_58470 = cljs.core.not_empty.call(null,inst_58459);
var state_58483__$1 = (function (){var statearr_58516 = state_58483;
(statearr_58516[(27)] = inst_58469);

return statearr_58516;
})();
if(cljs.core.truth_(inst_58470)){
var statearr_58517_58596 = state_58483__$1;
(statearr_58517_58596[(1)] = (44));

} else {
var statearr_58518_58597 = state_58483__$1;
(statearr_58518_58597[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (29))){
var inst_58402 = (state_58483[(26)]);
var inst_58396 = (state_58483[(19)]);
var inst_58399 = (state_58483[(23)]);
var inst_58404 = (state_58483[(24)]);
var inst_58436 = (state_58483[(16)]);
var inst_58400 = (state_58483[(25)]);
var inst_58432 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_58435 = (function (){var all_files = inst_58396;
var res_SINGLEQUOTE_ = inst_58399;
var res = inst_58400;
var files_not_loaded = inst_58402;
var dependencies_that_loaded = inst_58404;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58402,inst_58396,inst_58399,inst_58404,inst_58436,inst_58400,inst_58432,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58434){
var map__58519 = p__58434;
var map__58519__$1 = ((((!((map__58519 == null)))?((((map__58519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58519):map__58519);
var namespace = cljs.core.get.call(null,map__58519__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58402,inst_58396,inst_58399,inst_58404,inst_58436,inst_58400,inst_58432,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58436__$1 = cljs.core.group_by.call(null,inst_58435,inst_58402);
var inst_58438 = (inst_58436__$1 == null);
var inst_58439 = cljs.core.not.call(null,inst_58438);
var state_58483__$1 = (function (){var statearr_58521 = state_58483;
(statearr_58521[(16)] = inst_58436__$1);

(statearr_58521[(28)] = inst_58432);

return statearr_58521;
})();
if(inst_58439){
var statearr_58522_58598 = state_58483__$1;
(statearr_58522_58598[(1)] = (32));

} else {
var statearr_58523_58599 = state_58483__$1;
(statearr_58523_58599[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (44))){
var inst_58459 = (state_58483[(21)]);
var inst_58472 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_58459);
var inst_58473 = cljs.core.pr_str.call(null,inst_58472);
var inst_58474 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58473)].join('');
var inst_58475 = figwheel.client.utils.log.call(null,inst_58474);
var state_58483__$1 = state_58483;
var statearr_58524_58600 = state_58483__$1;
(statearr_58524_58600[(2)] = inst_58475);

(statearr_58524_58600[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (6))){
var inst_58377 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
var statearr_58525_58601 = state_58483__$1;
(statearr_58525_58601[(2)] = inst_58377);

(statearr_58525_58601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (28))){
var inst_58402 = (state_58483[(26)]);
var inst_58429 = (state_58483[(2)]);
var inst_58430 = cljs.core.not_empty.call(null,inst_58402);
var state_58483__$1 = (function (){var statearr_58526 = state_58483;
(statearr_58526[(29)] = inst_58429);

return statearr_58526;
})();
if(cljs.core.truth_(inst_58430)){
var statearr_58527_58602 = state_58483__$1;
(statearr_58527_58602[(1)] = (29));

} else {
var statearr_58528_58603 = state_58483__$1;
(statearr_58528_58603[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (25))){
var inst_58400 = (state_58483[(25)]);
var inst_58416 = (state_58483[(2)]);
var inst_58417 = cljs.core.not_empty.call(null,inst_58400);
var state_58483__$1 = (function (){var statearr_58529 = state_58483;
(statearr_58529[(30)] = inst_58416);

return statearr_58529;
})();
if(cljs.core.truth_(inst_58417)){
var statearr_58530_58604 = state_58483__$1;
(statearr_58530_58604[(1)] = (26));

} else {
var statearr_58531_58605 = state_58483__$1;
(statearr_58531_58605[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (34))){
var inst_58452 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
if(cljs.core.truth_(inst_58452)){
var statearr_58532_58606 = state_58483__$1;
(statearr_58532_58606[(1)] = (38));

} else {
var statearr_58533_58607 = state_58483__$1;
(statearr_58533_58607[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (17))){
var state_58483__$1 = state_58483;
var statearr_58534_58608 = state_58483__$1;
(statearr_58534_58608[(2)] = recompile_dependents);

(statearr_58534_58608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (3))){
var state_58483__$1 = state_58483;
var statearr_58535_58609 = state_58483__$1;
(statearr_58535_58609[(2)] = null);

(statearr_58535_58609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (12))){
var inst_58373 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
var statearr_58536_58610 = state_58483__$1;
(statearr_58536_58610[(2)] = inst_58373);

(statearr_58536_58610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (2))){
var inst_58335 = (state_58483[(13)]);
var inst_58342 = cljs.core.seq.call(null,inst_58335);
var inst_58343 = inst_58342;
var inst_58344 = null;
var inst_58345 = (0);
var inst_58346 = (0);
var state_58483__$1 = (function (){var statearr_58537 = state_58483;
(statearr_58537[(7)] = inst_58344);

(statearr_58537[(8)] = inst_58345);

(statearr_58537[(9)] = inst_58346);

(statearr_58537[(10)] = inst_58343);

return statearr_58537;
})();
var statearr_58538_58611 = state_58483__$1;
(statearr_58538_58611[(2)] = null);

(statearr_58538_58611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (23))){
var inst_58402 = (state_58483[(26)]);
var inst_58396 = (state_58483[(19)]);
var inst_58399 = (state_58483[(23)]);
var inst_58404 = (state_58483[(24)]);
var inst_58400 = (state_58483[(25)]);
var inst_58407 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_58409 = (function (){var all_files = inst_58396;
var res_SINGLEQUOTE_ = inst_58399;
var res = inst_58400;
var files_not_loaded = inst_58402;
var dependencies_that_loaded = inst_58404;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58402,inst_58396,inst_58399,inst_58404,inst_58400,inst_58407,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58408){
var map__58539 = p__58408;
var map__58539__$1 = ((((!((map__58539 == null)))?((((map__58539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58539):map__58539);
var request_url = cljs.core.get.call(null,map__58539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58402,inst_58396,inst_58399,inst_58404,inst_58400,inst_58407,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58410 = cljs.core.reverse.call(null,inst_58404);
var inst_58411 = cljs.core.map.call(null,inst_58409,inst_58410);
var inst_58412 = cljs.core.pr_str.call(null,inst_58411);
var inst_58413 = figwheel.client.utils.log.call(null,inst_58412);
var state_58483__$1 = (function (){var statearr_58541 = state_58483;
(statearr_58541[(31)] = inst_58407);

return statearr_58541;
})();
var statearr_58542_58612 = state_58483__$1;
(statearr_58542_58612[(2)] = inst_58413);

(statearr_58542_58612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (35))){
var state_58483__$1 = state_58483;
var statearr_58543_58613 = state_58483__$1;
(statearr_58543_58613[(2)] = true);

(statearr_58543_58613[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (19))){
var inst_58386 = (state_58483[(12)]);
var inst_58392 = figwheel.client.file_reloading.expand_files.call(null,inst_58386);
var state_58483__$1 = state_58483;
var statearr_58544_58614 = state_58483__$1;
(statearr_58544_58614[(2)] = inst_58392);

(statearr_58544_58614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (11))){
var state_58483__$1 = state_58483;
var statearr_58545_58615 = state_58483__$1;
(statearr_58545_58615[(2)] = null);

(statearr_58545_58615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (9))){
var inst_58375 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
var statearr_58546_58616 = state_58483__$1;
(statearr_58546_58616[(2)] = inst_58375);

(statearr_58546_58616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (5))){
var inst_58345 = (state_58483[(8)]);
var inst_58346 = (state_58483[(9)]);
var inst_58348 = (inst_58346 < inst_58345);
var inst_58349 = inst_58348;
var state_58483__$1 = state_58483;
if(cljs.core.truth_(inst_58349)){
var statearr_58547_58617 = state_58483__$1;
(statearr_58547_58617[(1)] = (7));

} else {
var statearr_58548_58618 = state_58483__$1;
(statearr_58548_58618[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (14))){
var inst_58356 = (state_58483[(22)]);
var inst_58365 = cljs.core.first.call(null,inst_58356);
var inst_58366 = figwheel.client.file_reloading.eval_body.call(null,inst_58365,opts);
var inst_58367 = cljs.core.next.call(null,inst_58356);
var inst_58343 = inst_58367;
var inst_58344 = null;
var inst_58345 = (0);
var inst_58346 = (0);
var state_58483__$1 = (function (){var statearr_58549 = state_58483;
(statearr_58549[(7)] = inst_58344);

(statearr_58549[(8)] = inst_58345);

(statearr_58549[(9)] = inst_58346);

(statearr_58549[(10)] = inst_58343);

(statearr_58549[(32)] = inst_58366);

return statearr_58549;
})();
var statearr_58550_58619 = state_58483__$1;
(statearr_58550_58619[(2)] = null);

(statearr_58550_58619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (45))){
var state_58483__$1 = state_58483;
var statearr_58551_58620 = state_58483__$1;
(statearr_58551_58620[(2)] = null);

(statearr_58551_58620[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (26))){
var inst_58402 = (state_58483[(26)]);
var inst_58396 = (state_58483[(19)]);
var inst_58399 = (state_58483[(23)]);
var inst_58404 = (state_58483[(24)]);
var inst_58400 = (state_58483[(25)]);
var inst_58419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_58421 = (function (){var all_files = inst_58396;
var res_SINGLEQUOTE_ = inst_58399;
var res = inst_58400;
var files_not_loaded = inst_58402;
var dependencies_that_loaded = inst_58404;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58402,inst_58396,inst_58399,inst_58404,inst_58400,inst_58419,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58420){
var map__58552 = p__58420;
var map__58552__$1 = ((((!((map__58552 == null)))?((((map__58552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58552):map__58552);
var namespace = cljs.core.get.call(null,map__58552__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__58552__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58402,inst_58396,inst_58399,inst_58404,inst_58400,inst_58419,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58422 = cljs.core.map.call(null,inst_58421,inst_58400);
var inst_58423 = cljs.core.pr_str.call(null,inst_58422);
var inst_58424 = figwheel.client.utils.log.call(null,inst_58423);
var inst_58425 = (function (){var all_files = inst_58396;
var res_SINGLEQUOTE_ = inst_58399;
var res = inst_58400;
var files_not_loaded = inst_58402;
var dependencies_that_loaded = inst_58404;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58402,inst_58396,inst_58399,inst_58404,inst_58400,inst_58419,inst_58421,inst_58422,inst_58423,inst_58424,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58402,inst_58396,inst_58399,inst_58404,inst_58400,inst_58419,inst_58421,inst_58422,inst_58423,inst_58424,state_val_58484,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58426 = setTimeout(inst_58425,(10));
var state_58483__$1 = (function (){var statearr_58554 = state_58483;
(statearr_58554[(33)] = inst_58424);

(statearr_58554[(34)] = inst_58419);

return statearr_58554;
})();
var statearr_58555_58621 = state_58483__$1;
(statearr_58555_58621[(2)] = inst_58426);

(statearr_58555_58621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (16))){
var state_58483__$1 = state_58483;
var statearr_58556_58622 = state_58483__$1;
(statearr_58556_58622[(2)] = reload_dependents);

(statearr_58556_58622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (38))){
var inst_58436 = (state_58483[(16)]);
var inst_58454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58436);
var state_58483__$1 = state_58483;
var statearr_58557_58623 = state_58483__$1;
(statearr_58557_58623[(2)] = inst_58454);

(statearr_58557_58623[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (30))){
var state_58483__$1 = state_58483;
var statearr_58558_58624 = state_58483__$1;
(statearr_58558_58624[(2)] = null);

(statearr_58558_58624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (10))){
var inst_58356 = (state_58483[(22)]);
var inst_58358 = cljs.core.chunked_seq_QMARK_.call(null,inst_58356);
var state_58483__$1 = state_58483;
if(inst_58358){
var statearr_58559_58625 = state_58483__$1;
(statearr_58559_58625[(1)] = (13));

} else {
var statearr_58560_58626 = state_58483__$1;
(statearr_58560_58626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (18))){
var inst_58390 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
if(cljs.core.truth_(inst_58390)){
var statearr_58561_58627 = state_58483__$1;
(statearr_58561_58627[(1)] = (19));

} else {
var statearr_58562_58628 = state_58483__$1;
(statearr_58562_58628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (42))){
var state_58483__$1 = state_58483;
var statearr_58563_58629 = state_58483__$1;
(statearr_58563_58629[(2)] = null);

(statearr_58563_58629[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (37))){
var inst_58449 = (state_58483[(2)]);
var state_58483__$1 = state_58483;
var statearr_58564_58630 = state_58483__$1;
(statearr_58564_58630[(2)] = inst_58449);

(statearr_58564_58630[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58484 === (8))){
var inst_58356 = (state_58483[(22)]);
var inst_58343 = (state_58483[(10)]);
var inst_58356__$1 = cljs.core.seq.call(null,inst_58343);
var state_58483__$1 = (function (){var statearr_58565 = state_58483;
(statearr_58565[(22)] = inst_58356__$1);

return statearr_58565;
})();
if(inst_58356__$1){
var statearr_58566_58631 = state_58483__$1;
(statearr_58566_58631[(1)] = (10));

} else {
var statearr_58567_58632 = state_58483__$1;
(statearr_58567_58632[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__53020__auto__,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto____0 = (function (){
var statearr_58571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58571[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto__);

(statearr_58571[(1)] = (1));

return statearr_58571;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto____1 = (function (state_58483){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_58483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e58572){if((e58572 instanceof Object)){
var ex__53024__auto__ = e58572;
var statearr_58573_58633 = state_58483;
(statearr_58573_58633[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58634 = state_58483;
state_58483 = G__58634;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto__ = function(state_58483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto____1.call(this,state_58483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__53136__auto__ = (function (){var statearr_58574 = f__53135__auto__.call(null);
(statearr_58574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_58574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__,map__58328,map__58328__$1,opts,before_jsload,on_jsload,reload_dependents,map__58329,map__58329__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__53134__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__58637,link){
var map__58640 = p__58637;
var map__58640__$1 = ((((!((map__58640 == null)))?((((map__58640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58640):map__58640);
var file = cljs.core.get.call(null,map__58640__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__58640,map__58640__$1,file){
return (function (p1__58635_SHARP_,p2__58636_SHARP_){
if(cljs.core._EQ_.call(null,p1__58635_SHARP_,p2__58636_SHARP_)){
return p1__58635_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__58640,map__58640__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__58646){
var map__58647 = p__58646;
var map__58647__$1 = ((((!((map__58647 == null)))?((((map__58647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58647):map__58647);
var match_length = cljs.core.get.call(null,map__58647__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__58647__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__58642_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__58642_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__58649_SHARP_,p2__58650_SHARP_){
return cljs.core.assoc.call(null,p1__58649_SHARP_,cljs.core.get.call(null,p2__58650_SHARP_,key),p2__58650_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_58651 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_58651);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_58651);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__58652,p__58653){
var map__58658 = p__58652;
var map__58658__$1 = ((((!((map__58658 == null)))?((((map__58658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58658):map__58658);
var on_cssload = cljs.core.get.call(null,map__58658__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__58659 = p__58653;
var map__58659__$1 = ((((!((map__58659 == null)))?((((map__58659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58659):map__58659);
var files_msg = map__58659__$1;
var files = cljs.core.get.call(null,map__58659__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1498049881443