// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921 = (function (val,meta47922){
this.val = val;
this.meta47922 = meta47922;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47923,meta47922__$1){
var self__ = this;
var _47923__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921(self__.val,meta47922__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47923){
var self__ = this;
var _47923__$1 = this;
return self__.meta47922;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta47922","meta47922",-934136909,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels47921";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels47921");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels47921 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels47921(val__$1,meta47922){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921(val__$1,meta47922));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels47921(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__46142__auto__ = (((this$ == null))?null:this$);
var m__46143__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,this$);
} else {
var m__46143__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_47935 = self__.puts.pop();
if((putter_47935 == null)){
} else {
var put_handler_47936 = putter_47935.handler;
var val_47937 = putter_47935.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_47936)){
var put_cb_47938 = cljs.core.async.impl.protocols.commit.call(null,put_handler_47936);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_47938,put_handler_47936,val_47937,putter_47935,this$__$1){
return (function (){
return put_cb_47938.call(null,true);
});})(put_cb_47938,put_handler_47936,val_47937,putter_47935,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't put nil in on a channel"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__45412__auto__ = self__.buf;
if(cljs.core.truth_(and__45412__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__45412__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__47939 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__47939;
continue;
} else {
var G__47940 = takers;
takers = G__47940;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__47924_47941 = cljs.core.seq.call(null,take_cbs);
var chunk__47925_47942 = null;
var count__47926_47943 = (0);
var i__47927_47944 = (0);
while(true){
if((i__47927_47944 < count__47926_47943)){
var f_47945 = cljs.core._nth.call(null,chunk__47925_47942,i__47927_47944);
cljs.core.async.impl.dispatch.run.call(null,f_47945);

var G__47946 = seq__47924_47941;
var G__47947 = chunk__47925_47942;
var G__47948 = count__47926_47943;
var G__47949 = (i__47927_47944 + (1));
seq__47924_47941 = G__47946;
chunk__47925_47942 = G__47947;
count__47926_47943 = G__47948;
i__47927_47944 = G__47949;
continue;
} else {
var temp__5278__auto___47950 = cljs.core.seq.call(null,seq__47924_47941);
if(temp__5278__auto___47950){
var seq__47924_47951__$1 = temp__5278__auto___47950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47924_47951__$1)){
var c__46335__auto___47952 = cljs.core.chunk_first.call(null,seq__47924_47951__$1);
var G__47953 = cljs.core.chunk_rest.call(null,seq__47924_47951__$1);
var G__47954 = c__46335__auto___47952;
var G__47955 = cljs.core.count.call(null,c__46335__auto___47952);
var G__47956 = (0);
seq__47924_47941 = G__47953;
chunk__47925_47942 = G__47954;
count__47926_47943 = G__47955;
i__47927_47944 = G__47956;
continue;
} else {
var f_47957 = cljs.core.first.call(null,seq__47924_47951__$1);
cljs.core.async.impl.dispatch.run.call(null,f_47957);

var G__47958 = cljs.core.next.call(null,seq__47924_47951__$1);
var G__47959 = null;
var G__47960 = (0);
var G__47961 = (0);
seq__47924_47941 = G__47958;
chunk__47925_47942 = G__47959;
count__47926_47943 = G__47960;
i__47927_47944 = G__47961;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending puts are allowed on a single channel."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Consider using a windowed buffer.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__5276__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5276__auto__)){
var take_cb = temp__5276__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__47928 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__45412__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__45412__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__45412__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__47962 = cbs__$1;
cbs = G__47962;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__47928,(0),null);
var cbs = cljs.core.nth.call(null,vec__47928,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__47931_47963 = cljs.core.seq.call(null,cbs);
var chunk__47932_47964 = null;
var count__47933_47965 = (0);
var i__47934_47966 = (0);
while(true){
if((i__47934_47966 < count__47933_47965)){
var cb_47967 = cljs.core._nth.call(null,chunk__47932_47964,i__47934_47966);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__47931_47963,chunk__47932_47964,count__47933_47965,i__47934_47966,cb_47967,val,vec__47928,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1){
return (function (){
return cb_47967.call(null,true);
});})(seq__47931_47963,chunk__47932_47964,count__47933_47965,i__47934_47966,cb_47967,val,vec__47928,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1))
);

var G__47968 = seq__47931_47963;
var G__47969 = chunk__47932_47964;
var G__47970 = count__47933_47965;
var G__47971 = (i__47934_47966 + (1));
seq__47931_47963 = G__47968;
chunk__47932_47964 = G__47969;
count__47933_47965 = G__47970;
i__47934_47966 = G__47971;
continue;
} else {
var temp__5278__auto___47972 = cljs.core.seq.call(null,seq__47931_47963);
if(temp__5278__auto___47972){
var seq__47931_47973__$1 = temp__5278__auto___47972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47931_47973__$1)){
var c__46335__auto___47974 = cljs.core.chunk_first.call(null,seq__47931_47973__$1);
var G__47975 = cljs.core.chunk_rest.call(null,seq__47931_47973__$1);
var G__47976 = c__46335__auto___47974;
var G__47977 = cljs.core.count.call(null,c__46335__auto___47974);
var G__47978 = (0);
seq__47931_47963 = G__47975;
chunk__47932_47964 = G__47976;
count__47933_47965 = G__47977;
i__47934_47966 = G__47978;
continue;
} else {
var cb_47979 = cljs.core.first.call(null,seq__47931_47973__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__47931_47963,chunk__47932_47964,count__47933_47965,i__47934_47966,cb_47979,seq__47931_47973__$1,temp__5278__auto___47972,val,vec__47928,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1){
return (function (){
return cb_47979.call(null,true);
});})(seq__47931_47963,chunk__47932_47964,count__47933_47965,i__47934_47966,cb_47979,seq__47931_47973__$1,temp__5278__auto___47972,val,vec__47928,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1))
);

var G__47980 = cljs.core.next.call(null,seq__47931_47973__$1);
var G__47981 = null;
var G__47982 = (0);
var G__47983 = (0);
seq__47931_47963 = G__47980;
chunk__47932_47964 = G__47981;
count__47933_47965 = G__47982;
i__47934_47966 = G__47983;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__45412__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__45412__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__45412__auto__;
}
})())){
var has_val = (function (){var and__45412__auto__ = self__.buf;
if(cljs.core.truth_(and__45412__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__45412__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending takes are allowed on a single channel.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__45412__auto__ = self__.buf;
if(cljs.core.truth_(and__45412__auto__)){
return (self__.puts.length === (0));
} else {
return and__45412__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_47984 = self__.takes.pop();
if((taker_47984 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_47984)){
var take_cb_47985 = cljs.core.async.impl.protocols.commit.call(null,taker_47984);
var val_47986 = (cljs.core.truth_((function (){var and__45412__auto__ = self__.buf;
if(cljs.core.truth_(and__45412__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__45412__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_47985,val_47986,taker_47984,this$__$1){
return (function (){
return take_cb_47985.call(null,val_47986);
});})(take_cb_47985,val_47986,taker_47984,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__45424__auto__ = exh;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var args47987 = [];
var len__46645__auto___47992 = arguments.length;
var i__46646__auto___47993 = (0);
while(true){
if((i__46646__auto___47993 < len__46645__auto___47992)){
args47987.push((arguments[i__46646__auto___47993]));

var G__47994 = (i__46646__auto___47993 + (1));
i__46646__auto___47993 = G__47994;
continue;
} else {
}
break;
}

var G__47989 = args47987.length;
switch (G__47989) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47987.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__47996 = null;
var G__47996__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e47990){var t = e47990;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__47996__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e47991){var t = e47991;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__47996 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__47996__1.call(this,buf__$1);
case 2:
return G__47996__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47996.cljs$core$IFn$_invoke$arity$1 = G__47996__1;
G__47996.cljs$core$IFn$_invoke$arity$2 = G__47996__2;
return G__47996;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1498049870793