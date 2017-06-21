// Compiled by ClojureScript 1.9.562 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#uuid \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__61509_61513 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__61510_61514 = null;
var count__61511_61515 = (0);
var i__61512_61516 = (0);
while(true){
if((i__61512_61516 < count__61511_61515)){
var k_61517 = cljs.core._nth.call(null,chunk__61510_61514,i__61512_61516);
var v_61518 = (b[k_61517]);
(a[k_61517] = v_61518);

var G__61519 = seq__61509_61513;
var G__61520 = chunk__61510_61514;
var G__61521 = count__61511_61515;
var G__61522 = (i__61512_61516 + (1));
seq__61509_61513 = G__61519;
chunk__61510_61514 = G__61520;
count__61511_61515 = G__61521;
i__61512_61516 = G__61522;
continue;
} else {
var temp__5278__auto___61523 = cljs.core.seq.call(null,seq__61509_61513);
if(temp__5278__auto___61523){
var seq__61509_61524__$1 = temp__5278__auto___61523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61509_61524__$1)){
var c__46335__auto___61525 = cljs.core.chunk_first.call(null,seq__61509_61524__$1);
var G__61526 = cljs.core.chunk_rest.call(null,seq__61509_61524__$1);
var G__61527 = c__46335__auto___61525;
var G__61528 = cljs.core.count.call(null,c__46335__auto___61525);
var G__61529 = (0);
seq__61509_61513 = G__61526;
chunk__61510_61514 = G__61527;
count__61511_61515 = G__61528;
i__61512_61516 = G__61529;
continue;
} else {
var k_61530 = cljs.core.first.call(null,seq__61509_61524__$1);
var v_61531 = (b[k_61530]);
(a[k_61530] = v_61531);

var G__61532 = cljs.core.next.call(null,seq__61509_61524__$1);
var G__61533 = null;
var G__61534 = (0);
var G__61535 = (0);
seq__61509_61513 = G__61532;
chunk__61510_61514 = G__61533;
count__61511_61515 = G__61534;
i__61512_61516 = G__61535;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args61536 = [];
var len__46645__auto___61539 = arguments.length;
var i__46646__auto___61540 = (0);
while(true){
if((i__46646__auto___61540 < len__46645__auto___61539)){
args61536.push((arguments[i__46646__auto___61540]));

var G__61541 = (i__46646__auto___61540 + (1));
i__46646__auto___61540 = G__61541;
continue;
} else {
}
break;
}

var G__61538 = args61536.length;
switch (G__61538) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61536.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__61543 = (i + (2));
var G__61544 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__61543;
ret = G__61544;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__61545_61549 = cljs.core.seq.call(null,v);
var chunk__61546_61550 = null;
var count__61547_61551 = (0);
var i__61548_61552 = (0);
while(true){
if((i__61548_61552 < count__61547_61551)){
var x_61553 = cljs.core._nth.call(null,chunk__61546_61550,i__61548_61552);
ret.push(x_61553);

var G__61554 = seq__61545_61549;
var G__61555 = chunk__61546_61550;
var G__61556 = count__61547_61551;
var G__61557 = (i__61548_61552 + (1));
seq__61545_61549 = G__61554;
chunk__61546_61550 = G__61555;
count__61547_61551 = G__61556;
i__61548_61552 = G__61557;
continue;
} else {
var temp__5278__auto___61558 = cljs.core.seq.call(null,seq__61545_61549);
if(temp__5278__auto___61558){
var seq__61545_61559__$1 = temp__5278__auto___61558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61545_61559__$1)){
var c__46335__auto___61560 = cljs.core.chunk_first.call(null,seq__61545_61559__$1);
var G__61561 = cljs.core.chunk_rest.call(null,seq__61545_61559__$1);
var G__61562 = c__46335__auto___61560;
var G__61563 = cljs.core.count.call(null,c__46335__auto___61560);
var G__61564 = (0);
seq__61545_61549 = G__61561;
chunk__61546_61550 = G__61562;
count__61547_61551 = G__61563;
i__61548_61552 = G__61564;
continue;
} else {
var x_61565 = cljs.core.first.call(null,seq__61545_61559__$1);
ret.push(x_61565);

var G__61566 = cljs.core.next.call(null,seq__61545_61559__$1);
var G__61567 = null;
var G__61568 = (0);
var G__61569 = (0);
seq__61545_61549 = G__61566;
chunk__61546_61550 = G__61567;
count__61547_61551 = G__61568;
i__61548_61552 = G__61569;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__61570_61574 = cljs.core.seq.call(null,v);
var chunk__61571_61575 = null;
var count__61572_61576 = (0);
var i__61573_61577 = (0);
while(true){
if((i__61573_61577 < count__61572_61576)){
var x_61578 = cljs.core._nth.call(null,chunk__61571_61575,i__61573_61577);
ret.push(x_61578);

var G__61579 = seq__61570_61574;
var G__61580 = chunk__61571_61575;
var G__61581 = count__61572_61576;
var G__61582 = (i__61573_61577 + (1));
seq__61570_61574 = G__61579;
chunk__61571_61575 = G__61580;
count__61572_61576 = G__61581;
i__61573_61577 = G__61582;
continue;
} else {
var temp__5278__auto___61583 = cljs.core.seq.call(null,seq__61570_61574);
if(temp__5278__auto___61583){
var seq__61570_61584__$1 = temp__5278__auto___61583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61570_61584__$1)){
var c__46335__auto___61585 = cljs.core.chunk_first.call(null,seq__61570_61584__$1);
var G__61586 = cljs.core.chunk_rest.call(null,seq__61570_61584__$1);
var G__61587 = c__46335__auto___61585;
var G__61588 = cljs.core.count.call(null,c__46335__auto___61585);
var G__61589 = (0);
seq__61570_61574 = G__61586;
chunk__61571_61575 = G__61587;
count__61572_61576 = G__61588;
i__61573_61577 = G__61589;
continue;
} else {
var x_61590 = cljs.core.first.call(null,seq__61570_61584__$1);
ret.push(x_61590);

var G__61591 = cljs.core.next.call(null,seq__61570_61584__$1);
var G__61592 = null;
var G__61593 = (0);
var G__61594 = (0);
seq__61570_61574 = G__61591;
chunk__61571_61575 = G__61592;
count__61572_61576 = G__61593;
i__61573_61577 = G__61594;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__61595_61599 = cljs.core.seq.call(null,v);
var chunk__61596_61600 = null;
var count__61597_61601 = (0);
var i__61598_61602 = (0);
while(true){
if((i__61598_61602 < count__61597_61601)){
var x_61603 = cljs.core._nth.call(null,chunk__61596_61600,i__61598_61602);
ret.push(x_61603);

var G__61604 = seq__61595_61599;
var G__61605 = chunk__61596_61600;
var G__61606 = count__61597_61601;
var G__61607 = (i__61598_61602 + (1));
seq__61595_61599 = G__61604;
chunk__61596_61600 = G__61605;
count__61597_61601 = G__61606;
i__61598_61602 = G__61607;
continue;
} else {
var temp__5278__auto___61608 = cljs.core.seq.call(null,seq__61595_61599);
if(temp__5278__auto___61608){
var seq__61595_61609__$1 = temp__5278__auto___61608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61595_61609__$1)){
var c__46335__auto___61610 = cljs.core.chunk_first.call(null,seq__61595_61609__$1);
var G__61611 = cljs.core.chunk_rest.call(null,seq__61595_61609__$1);
var G__61612 = c__46335__auto___61610;
var G__61613 = cljs.core.count.call(null,c__46335__auto___61610);
var G__61614 = (0);
seq__61595_61599 = G__61611;
chunk__61596_61600 = G__61612;
count__61597_61601 = G__61613;
i__61598_61602 = G__61614;
continue;
} else {
var x_61615 = cljs.core.first.call(null,seq__61595_61609__$1);
ret.push(x_61615);

var G__61616 = cljs.core.next.call(null,seq__61595_61609__$1);
var G__61617 = null;
var G__61618 = (0);
var G__61619 = (0);
seq__61595_61599 = G__61616;
chunk__61596_61600 = G__61617;
count__61597_61601 = G__61618;
i__61598_61602 = G__61619;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args61620 = [];
var len__46645__auto___61635 = arguments.length;
var i__46646__auto___61636 = (0);
while(true){
if((i__46646__auto___61636 < len__46645__auto___61635)){
args61620.push((arguments[i__46646__auto___61636]));

var G__61637 = (i__46646__auto___61636 + (1));
i__46646__auto___61636 = G__61637;
continue;
} else {
}
break;
}

var G__61622 = args61620.length;
switch (G__61622) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61620.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__61623 = obj;
G__61623.push(kfn.call(null,k),vfn.call(null,v));

return G__61623;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x61624 = cljs.core.clone.call(null,handlers);
x61624.forEach = ((function (x61624,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__61625 = cljs.core.seq.call(null,coll);
var chunk__61626 = null;
var count__61627 = (0);
var i__61628 = (0);
while(true){
if((i__61628 < count__61627)){
var vec__61629 = cljs.core._nth.call(null,chunk__61626,i__61628);
var k = cljs.core.nth.call(null,vec__61629,(0),null);
var v = cljs.core.nth.call(null,vec__61629,(1),null);
f.call(null,v,k);

var G__61639 = seq__61625;
var G__61640 = chunk__61626;
var G__61641 = count__61627;
var G__61642 = (i__61628 + (1));
seq__61625 = G__61639;
chunk__61626 = G__61640;
count__61627 = G__61641;
i__61628 = G__61642;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__61625);
if(temp__5278__auto__){
var seq__61625__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61625__$1)){
var c__46335__auto__ = cljs.core.chunk_first.call(null,seq__61625__$1);
var G__61643 = cljs.core.chunk_rest.call(null,seq__61625__$1);
var G__61644 = c__46335__auto__;
var G__61645 = cljs.core.count.call(null,c__46335__auto__);
var G__61646 = (0);
seq__61625 = G__61643;
chunk__61626 = G__61644;
count__61627 = G__61645;
i__61628 = G__61646;
continue;
} else {
var vec__61632 = cljs.core.first.call(null,seq__61625__$1);
var k = cljs.core.nth.call(null,vec__61632,(0),null);
var v = cljs.core.nth.call(null,vec__61632,(1),null);
f.call(null,v,k);

var G__61647 = cljs.core.next.call(null,seq__61625__$1);
var G__61648 = null;
var G__61649 = (0);
var G__61650 = (0);
seq__61625 = G__61647;
chunk__61626 = G__61648;
count__61627 = G__61649;
i__61628 = G__61650;
continue;
}
} else {
return null;
}
}
break;
}
});})(x61624,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x61624;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args61651 = [];
var len__46645__auto___61657 = arguments.length;
var i__46646__auto___61658 = (0);
while(true){
if((i__46646__auto___61658 < len__46645__auto___61657)){
args61651.push((arguments[i__46646__auto___61658]));

var G__61659 = (i__46646__auto___61658 + (1));
i__46646__auto___61658 = G__61659;
continue;
} else {
}
break;
}

var G__61653 = args61651.length;
switch (G__61653) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61651.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit61654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit61654 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta61655){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta61655 = meta61655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit61654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61656,meta61655__$1){
var self__ = this;
var _61656__$1 = this;
return (new cognitect.transit.t_cognitect$transit61654(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta61655__$1));
});

cognitect.transit.t_cognitect$transit61654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61656){
var self__ = this;
var _61656__$1 = this;
return self__.meta61655;
});

cognitect.transit.t_cognitect$transit61654.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit61654.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit61654.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit61654.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit61654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta61655","meta61655",-865821975,null)], null);
});

cognitect.transit.t_cognitect$transit61654.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit61654.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit61654";

cognitect.transit.t_cognitect$transit61654.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cognitect.transit/t_cognitect$transit61654");
});

cognitect.transit.__GT_t_cognitect$transit61654 = (function cognitect$transit$__GT_t_cognitect$transit61654(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta61655){
return (new cognitect.transit.t_cognitect$transit61654(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta61655));
});

}

return (new cognitect.transit.t_cognitect$transit61654(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__45424__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});

//# sourceMappingURL=transit.js.map?rel=1498049885332