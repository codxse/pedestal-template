// Compiled by ClojureScript 1.9.562 {}
goog.provide('app.components.ui');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('app.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.components.ui.UIComponent = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

app.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__46318__auto__,k__46319__auto__){
var self__ = this;
var this__46318__auto____$1 = this;
return this__46318__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__46319__auto__,null);
});


app.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__46320__auto__,k54090,else__46321__auto__){
var self__ = this;
var this__46320__auto____$1 = this;
var G__54092 = k54090;
switch (G__54092) {
default:
return cljs.core.get.call(null,self__.__extmap,k54090,else__46321__auto__);

}
});


app.components.ui.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__46332__auto__,writer__46333__auto__,opts__46334__auto__){
var self__ = this;
var this__46332__auto____$1 = this;
var pr_pair__46335__auto__ = ((function (this__46332__auto____$1){
return (function (keyval__46336__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__46333__auto__,cljs.core.pr_writer,""," ","",opts__46334__auto__,keyval__46336__auto__);
});})(this__46332__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__46333__auto__,pr_pair__46335__auto__,"#app.components.ui.UIComponent{",", ","}",opts__46334__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});


app.components.ui.UIComponent.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


app.components.ui.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54089){
var self__ = this;
var G__54089__$1 = this;
return (new cljs.core.RecordIter((0),G__54089__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


app.components.ui.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__46316__auto__){
var self__ = this;
var this__46316__auto____$1 = this;
return self__.__meta;
});


app.components.ui.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__46312__auto__){
var self__ = this;
var this__46312__auto____$1 = this;
return (new app.components.ui.UIComponent(self__.__meta,self__.__extmap,self__.__hash));
});


app.components.ui.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__46322__auto__){
var self__ = this;
var this__46322__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});


app.components.ui.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__46313__auto__){
var self__ = this;
var this__46313__auto____$1 = this;
var h__46085__auto__ = self__.__hash;
if(!((h__46085__auto__ == null))){
return h__46085__auto__;
} else {
var h__46085__auto____$1 = cljs.core.hash_imap.call(null,this__46313__auto____$1);
self__.__hash = h__46085__auto____$1;

return h__46085__auto____$1;
}
});


app.components.ui.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__46314__auto__,other__46315__auto__){
var self__ = this;
var this__46314__auto____$1 = this;
if(cljs.core.truth_((function (){var and__45631__auto__ = other__46315__auto__;
if(cljs.core.truth_(and__45631__auto__)){
return ((this__46314__auto____$1.constructor === other__46315__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__46314__auto____$1,other__46315__auto__));
} else {
return and__45631__auto__;
}
})())){
return true;
} else {
return false;
}
});


app.components.ui.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__46327__auto__,k__46328__auto__){
var self__ = this;
var this__46327__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__46328__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__46327__auto____$1),self__.__meta),k__46328__auto__);
} else {
return (new app.components.ui.UIComponent(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__46328__auto__)),null));
}
});


app.components.ui.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__46325__auto__,k__46326__auto__,G__54089){
var self__ = this;
var this__46325__auto____$1 = this;
var pred__54093 = cljs.core.keyword_identical_QMARK_;
var expr__54094 = k__46326__auto__;
return (new app.components.ui.UIComponent(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__46326__auto__,G__54089),null));
});


app.components.ui.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__46330__auto__){
var self__ = this;
var this__46330__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});


app.components.ui.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__46317__auto__,G__54089){
var self__ = this;
var this__46317__auto____$1 = this;
return (new app.components.ui.UIComponent(G__54089,self__.__extmap,self__.__hash));
});


app.components.ui.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__46323__auto__,entry__46324__auto__){
var self__ = this;
var this__46323__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__46324__auto__)){
return this__46323__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__46324__auto__,(0)),cljs.core._nth.call(null,entry__46324__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__46323__auto____$1,entry__46324__auto__);
}
});


app.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;


app.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
app.core.render.call(null);

return component__$1;
});


app.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

app.components.ui.UIComponent.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

app.components.ui.UIComponent.cljs$lang$type = true;

app.components.ui.UIComponent.cljs$lang$ctorPrSeq = (function (this__46354__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"app.components.ui/UIComponent");
});

app.components.ui.UIComponent.cljs$lang$ctorPrWriter = (function (this__46354__auto__,writer__46355__auto__){
return cljs.core._write.call(null,writer__46355__auto__,"app.components.ui/UIComponent");
});

app.components.ui.__GT_UIComponent = (function app$components$ui$__GT_UIComponent(){
return (new app.components.ui.UIComponent(null,null,null));
});

app.components.ui.map__GT_UIComponent = (function app$components$ui$map__GT_UIComponent(G__54091){
return (new app.components.ui.UIComponent(null,cljs.core.dissoc.call(null,G__54091),null));
});

app.components.ui.new_ui_component = (function app$components$ui$new_ui_component(){
return app.components.ui.map__GT_UIComponent.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=ui.js.map?rel=1498062435486