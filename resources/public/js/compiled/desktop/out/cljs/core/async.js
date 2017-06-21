// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args53193 = [];
var len__46645__auto___53199 = arguments.length;
var i__46646__auto___53200 = (0);
while(true){
if((i__46646__auto___53200 < len__46645__auto___53199)){
args53193.push((arguments[i__46646__auto___53200]));

var G__53201 = (i__46646__auto___53200 + (1));
i__46646__auto___53200 = G__53201;
continue;
} else {
}
break;
}

var G__53195 = args53193.length;
switch (G__53195) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53193.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async53196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53196 = (function (f,blockable,meta53197){
this.f = f;
this.blockable = blockable;
this.meta53197 = meta53197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53198,meta53197__$1){
var self__ = this;
var _53198__$1 = this;
return (new cljs.core.async.t_cljs$core$async53196(self__.f,self__.blockable,meta53197__$1));
});

cljs.core.async.t_cljs$core$async53196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53198){
var self__ = this;
var _53198__$1 = this;
return self__.meta53197;
});

cljs.core.async.t_cljs$core$async53196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async53196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async53196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async53196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta53197","meta53197",-673082253,null)], null);
});

cljs.core.async.t_cljs$core$async53196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53196";

cljs.core.async.t_cljs$core$async53196.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async53196");
});

cljs.core.async.__GT_t_cljs$core$async53196 = (function cljs$core$async$__GT_t_cljs$core$async53196(f__$1,blockable__$1,meta53197){
return (new cljs.core.async.t_cljs$core$async53196(f__$1,blockable__$1,meta53197));
});

}

return (new cljs.core.async.t_cljs$core$async53196(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args53205 = [];
var len__46645__auto___53208 = arguments.length;
var i__46646__auto___53209 = (0);
while(true){
if((i__46646__auto___53209 < len__46645__auto___53208)){
args53205.push((arguments[i__46646__auto___53209]));

var G__53210 = (i__46646__auto___53209 + (1));
i__46646__auto___53209 = G__53210;
continue;
} else {
}
break;
}

var G__53207 = args53205.length;
switch (G__53207) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53205.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args53212 = [];
var len__46645__auto___53215 = arguments.length;
var i__46646__auto___53216 = (0);
while(true){
if((i__46646__auto___53216 < len__46645__auto___53215)){
args53212.push((arguments[i__46646__auto___53216]));

var G__53217 = (i__46646__auto___53216 + (1));
i__46646__auto___53216 = G__53217;
continue;
} else {
}
break;
}

var G__53214 = args53212.length;
switch (G__53214) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53212.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args53219 = [];
var len__46645__auto___53222 = arguments.length;
var i__46646__auto___53223 = (0);
while(true){
if((i__46646__auto___53223 < len__46645__auto___53222)){
args53219.push((arguments[i__46646__auto___53223]));

var G__53224 = (i__46646__auto___53223 + (1));
i__46646__auto___53223 = G__53224;
continue;
} else {
}
break;
}

var G__53221 = args53219.length;
switch (G__53221) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53219.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_53226 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_53226);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_53226,ret){
return (function (){
return fn1.call(null,val_53226);
});})(val_53226,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args53227 = [];
var len__46645__auto___53230 = arguments.length;
var i__46646__auto___53231 = (0);
while(true){
if((i__46646__auto___53231 < len__46645__auto___53230)){
args53227.push((arguments[i__46646__auto___53231]));

var G__53232 = (i__46646__auto___53231 + (1));
i__46646__auto___53231 = G__53232;
continue;
} else {
}
break;
}

var G__53229 = args53227.length;
switch (G__53229) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53227.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__46445__auto___53234 = n;
var x_53235 = (0);
while(true){
if((x_53235 < n__46445__auto___53234)){
(a[x_53235] = (0));

var G__53236 = (x_53235 + (1));
x_53235 = G__53236;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__53237 = (i + (1));
i = G__53237;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async53241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53241 = (function (flag,meta53242){
this.flag = flag;
this.meta53242 = meta53242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_53243,meta53242__$1){
var self__ = this;
var _53243__$1 = this;
return (new cljs.core.async.t_cljs$core$async53241(self__.flag,meta53242__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async53241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_53243){
var self__ = this;
var _53243__$1 = this;
return self__.meta53242;
});})(flag))
;

cljs.core.async.t_cljs$core$async53241.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53241.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async53241.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async53241.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async53241.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta53242","meta53242",492955299,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async53241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53241";

cljs.core.async.t_cljs$core$async53241.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async53241");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async53241 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async53241(flag__$1,meta53242){
return (new cljs.core.async.t_cljs$core$async53241(flag__$1,meta53242));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async53241(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async53247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53247 = (function (flag,cb,meta53248){
this.flag = flag;
this.cb = cb;
this.meta53248 = meta53248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53249,meta53248__$1){
var self__ = this;
var _53249__$1 = this;
return (new cljs.core.async.t_cljs$core$async53247(self__.flag,self__.cb,meta53248__$1));
});

cljs.core.async.t_cljs$core$async53247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53249){
var self__ = this;
var _53249__$1 = this;
return self__.meta53248;
});

cljs.core.async.t_cljs$core$async53247.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async53247.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async53247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async53247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta53248","meta53248",2098481043,null)], null);
});

cljs.core.async.t_cljs$core$async53247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53247";

cljs.core.async.t_cljs$core$async53247.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async53247");
});

cljs.core.async.__GT_t_cljs$core$async53247 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async53247(flag__$1,cb__$1,meta53248){
return (new cljs.core.async.t_cljs$core$async53247(flag__$1,cb__$1,meta53248));
});

}

return (new cljs.core.async.t_cljs$core$async53247(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53250_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53250_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53251_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53251_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__45424__auto__ = wport;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53252 = (i + (1));
i = G__53252;
continue;
}
} else {
return null;
}
break;
}
})();
var or__45424__auto__ = ret;
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__45412__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__45412__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__45412__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__46652__auto__ = [];
var len__46645__auto___53258 = arguments.length;
var i__46646__auto___53259 = (0);
while(true){
if((i__46646__auto___53259 < len__46645__auto___53258)){
args__46652__auto__.push((arguments[i__46646__auto___53259]));

var G__53260 = (i__46646__auto___53259 + (1));
i__46646__auto___53259 = G__53260;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((1) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__46653__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__53255){
var map__53256 = p__53255;
var map__53256__$1 = ((((!((map__53256 == null)))?((((map__53256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53256):map__53256);
var opts = map__53256__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq53253){
var G__53254 = cljs.core.first.call(null,seq53253);
var seq53253__$1 = cljs.core.next.call(null,seq53253);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53254,seq53253__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args53261 = [];
var len__46645__auto___53311 = arguments.length;
var i__46646__auto___53312 = (0);
while(true){
if((i__46646__auto___53312 < len__46645__auto___53311)){
args53261.push((arguments[i__46646__auto___53312]));

var G__53313 = (i__46646__auto___53312 + (1));
i__46646__auto___53312 = G__53313;
continue;
} else {
}
break;
}

var G__53263 = args53261.length;
switch (G__53263) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53261.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__53134__auto___53315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___53315){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___53315){
return (function (state_53287){
var state_val_53288 = (state_53287[(1)]);
if((state_val_53288 === (7))){
var inst_53283 = (state_53287[(2)]);
var state_53287__$1 = state_53287;
var statearr_53289_53316 = state_53287__$1;
(statearr_53289_53316[(2)] = inst_53283);

(statearr_53289_53316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (1))){
var state_53287__$1 = state_53287;
var statearr_53290_53317 = state_53287__$1;
(statearr_53290_53317[(2)] = null);

(statearr_53290_53317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (4))){
var inst_53266 = (state_53287[(7)]);
var inst_53266__$1 = (state_53287[(2)]);
var inst_53267 = (inst_53266__$1 == null);
var state_53287__$1 = (function (){var statearr_53291 = state_53287;
(statearr_53291[(7)] = inst_53266__$1);

return statearr_53291;
})();
if(cljs.core.truth_(inst_53267)){
var statearr_53292_53318 = state_53287__$1;
(statearr_53292_53318[(1)] = (5));

} else {
var statearr_53293_53319 = state_53287__$1;
(statearr_53293_53319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (13))){
var state_53287__$1 = state_53287;
var statearr_53294_53320 = state_53287__$1;
(statearr_53294_53320[(2)] = null);

(statearr_53294_53320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (6))){
var inst_53266 = (state_53287[(7)]);
var state_53287__$1 = state_53287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53287__$1,(11),to,inst_53266);
} else {
if((state_val_53288 === (3))){
var inst_53285 = (state_53287[(2)]);
var state_53287__$1 = state_53287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53287__$1,inst_53285);
} else {
if((state_val_53288 === (12))){
var state_53287__$1 = state_53287;
var statearr_53295_53321 = state_53287__$1;
(statearr_53295_53321[(2)] = null);

(statearr_53295_53321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (2))){
var state_53287__$1 = state_53287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53287__$1,(4),from);
} else {
if((state_val_53288 === (11))){
var inst_53276 = (state_53287[(2)]);
var state_53287__$1 = state_53287;
if(cljs.core.truth_(inst_53276)){
var statearr_53296_53322 = state_53287__$1;
(statearr_53296_53322[(1)] = (12));

} else {
var statearr_53297_53323 = state_53287__$1;
(statearr_53297_53323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (9))){
var state_53287__$1 = state_53287;
var statearr_53298_53324 = state_53287__$1;
(statearr_53298_53324[(2)] = null);

(statearr_53298_53324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (5))){
var state_53287__$1 = state_53287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53299_53325 = state_53287__$1;
(statearr_53299_53325[(1)] = (8));

} else {
var statearr_53300_53326 = state_53287__$1;
(statearr_53300_53326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (14))){
var inst_53281 = (state_53287[(2)]);
var state_53287__$1 = state_53287;
var statearr_53301_53327 = state_53287__$1;
(statearr_53301_53327[(2)] = inst_53281);

(statearr_53301_53327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (10))){
var inst_53273 = (state_53287[(2)]);
var state_53287__$1 = state_53287;
var statearr_53302_53328 = state_53287__$1;
(statearr_53302_53328[(2)] = inst_53273);

(statearr_53302_53328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53288 === (8))){
var inst_53270 = cljs.core.async.close_BANG_.call(null,to);
var state_53287__$1 = state_53287;
var statearr_53303_53329 = state_53287__$1;
(statearr_53303_53329[(2)] = inst_53270);

(statearr_53303_53329[(1)] = (10));


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
});})(c__53134__auto___53315))
;
return ((function (switch__53020__auto__,c__53134__auto___53315){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_53307 = [null,null,null,null,null,null,null,null];
(statearr_53307[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_53307[(1)] = (1));

return statearr_53307;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_53287){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_53287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e53308){if((e53308 instanceof Object)){
var ex__53024__auto__ = e53308;
var statearr_53309_53330 = state_53287;
(statearr_53309_53330[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53331 = state_53287;
state_53287 = G__53331;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_53287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_53287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___53315))
})();
var state__53136__auto__ = (function (){var statearr_53310 = f__53135__auto__.call(null);
(statearr_53310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___53315);

return statearr_53310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___53315))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__53519){
var vec__53520 = p__53519;
var v = cljs.core.nth.call(null,vec__53520,(0),null);
var p = cljs.core.nth.call(null,vec__53520,(1),null);
var job = vec__53520;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__53134__auto___53706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___53706,res,vec__53520,v,p,job,jobs,results){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___53706,res,vec__53520,v,p,job,jobs,results){
return (function (state_53527){
var state_val_53528 = (state_53527[(1)]);
if((state_val_53528 === (1))){
var state_53527__$1 = state_53527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53527__$1,(2),res,v);
} else {
if((state_val_53528 === (2))){
var inst_53524 = (state_53527[(2)]);
var inst_53525 = cljs.core.async.close_BANG_.call(null,res);
var state_53527__$1 = (function (){var statearr_53529 = state_53527;
(statearr_53529[(7)] = inst_53524);

return statearr_53529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53527__$1,inst_53525);
} else {
return null;
}
}
});})(c__53134__auto___53706,res,vec__53520,v,p,job,jobs,results))
;
return ((function (switch__53020__auto__,c__53134__auto___53706,res,vec__53520,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0 = (function (){
var statearr_53533 = [null,null,null,null,null,null,null,null];
(statearr_53533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__);

(statearr_53533[(1)] = (1));

return statearr_53533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1 = (function (state_53527){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_53527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e53534){if((e53534 instanceof Object)){
var ex__53024__auto__ = e53534;
var statearr_53535_53707 = state_53527;
(statearr_53535_53707[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53708 = state_53527;
state_53527 = G__53708;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = function(state_53527){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1.call(this,state_53527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___53706,res,vec__53520,v,p,job,jobs,results))
})();
var state__53136__auto__ = (function (){var statearr_53536 = f__53135__auto__.call(null);
(statearr_53536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___53706);

return statearr_53536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___53706,res,vec__53520,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__53537){
var vec__53538 = p__53537;
var v = cljs.core.nth.call(null,vec__53538,(0),null);
var p = cljs.core.nth.call(null,vec__53538,(1),null);
var job = vec__53538;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__46445__auto___53709 = n;
var __53710 = (0);
while(true){
if((__53710 < n__46445__auto___53709)){
var G__53541_53711 = type;
var G__53541_53712__$1 = (((G__53541_53711 instanceof cljs.core.Keyword))?G__53541_53711.fqn:null);
switch (G__53541_53712__$1) {
case "compute":
var c__53134__auto___53714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__53710,c__53134__auto___53714,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (__53710,c__53134__auto___53714,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async){
return (function (state_53554){
var state_val_53555 = (state_53554[(1)]);
if((state_val_53555 === (1))){
var state_53554__$1 = state_53554;
var statearr_53556_53715 = state_53554__$1;
(statearr_53556_53715[(2)] = null);

(statearr_53556_53715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53555 === (2))){
var state_53554__$1 = state_53554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53554__$1,(4),jobs);
} else {
if((state_val_53555 === (3))){
var inst_53552 = (state_53554[(2)]);
var state_53554__$1 = state_53554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53554__$1,inst_53552);
} else {
if((state_val_53555 === (4))){
var inst_53544 = (state_53554[(2)]);
var inst_53545 = process.call(null,inst_53544);
var state_53554__$1 = state_53554;
if(cljs.core.truth_(inst_53545)){
var statearr_53557_53716 = state_53554__$1;
(statearr_53557_53716[(1)] = (5));

} else {
var statearr_53558_53717 = state_53554__$1;
(statearr_53558_53717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53555 === (5))){
var state_53554__$1 = state_53554;
var statearr_53559_53718 = state_53554__$1;
(statearr_53559_53718[(2)] = null);

(statearr_53559_53718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53555 === (6))){
var state_53554__$1 = state_53554;
var statearr_53560_53719 = state_53554__$1;
(statearr_53560_53719[(2)] = null);

(statearr_53560_53719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53555 === (7))){
var inst_53550 = (state_53554[(2)]);
var state_53554__$1 = state_53554;
var statearr_53561_53720 = state_53554__$1;
(statearr_53561_53720[(2)] = inst_53550);

(statearr_53561_53720[(1)] = (3));


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
});})(__53710,c__53134__auto___53714,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async))
;
return ((function (__53710,switch__53020__auto__,c__53134__auto___53714,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0 = (function (){
var statearr_53565 = [null,null,null,null,null,null,null];
(statearr_53565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__);

(statearr_53565[(1)] = (1));

return statearr_53565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1 = (function (state_53554){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_53554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e53566){if((e53566 instanceof Object)){
var ex__53024__auto__ = e53566;
var statearr_53567_53721 = state_53554;
(statearr_53567_53721[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53722 = state_53554;
state_53554 = G__53722;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = function(state_53554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1.call(this,state_53554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__;
})()
;})(__53710,switch__53020__auto__,c__53134__auto___53714,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async))
})();
var state__53136__auto__ = (function (){var statearr_53568 = f__53135__auto__.call(null);
(statearr_53568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___53714);

return statearr_53568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(__53710,c__53134__auto___53714,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async))
);


break;
case "async":
var c__53134__auto___53723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__53710,c__53134__auto___53723,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (__53710,c__53134__auto___53723,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async){
return (function (state_53581){
var state_val_53582 = (state_53581[(1)]);
if((state_val_53582 === (1))){
var state_53581__$1 = state_53581;
var statearr_53583_53724 = state_53581__$1;
(statearr_53583_53724[(2)] = null);

(statearr_53583_53724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53582 === (2))){
var state_53581__$1 = state_53581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53581__$1,(4),jobs);
} else {
if((state_val_53582 === (3))){
var inst_53579 = (state_53581[(2)]);
var state_53581__$1 = state_53581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53581__$1,inst_53579);
} else {
if((state_val_53582 === (4))){
var inst_53571 = (state_53581[(2)]);
var inst_53572 = async.call(null,inst_53571);
var state_53581__$1 = state_53581;
if(cljs.core.truth_(inst_53572)){
var statearr_53584_53725 = state_53581__$1;
(statearr_53584_53725[(1)] = (5));

} else {
var statearr_53585_53726 = state_53581__$1;
(statearr_53585_53726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53582 === (5))){
var state_53581__$1 = state_53581;
var statearr_53586_53727 = state_53581__$1;
(statearr_53586_53727[(2)] = null);

(statearr_53586_53727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53582 === (6))){
var state_53581__$1 = state_53581;
var statearr_53587_53728 = state_53581__$1;
(statearr_53587_53728[(2)] = null);

(statearr_53587_53728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53582 === (7))){
var inst_53577 = (state_53581[(2)]);
var state_53581__$1 = state_53581;
var statearr_53588_53729 = state_53581__$1;
(statearr_53588_53729[(2)] = inst_53577);

(statearr_53588_53729[(1)] = (3));


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
});})(__53710,c__53134__auto___53723,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async))
;
return ((function (__53710,switch__53020__auto__,c__53134__auto___53723,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0 = (function (){
var statearr_53592 = [null,null,null,null,null,null,null];
(statearr_53592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__);

(statearr_53592[(1)] = (1));

return statearr_53592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1 = (function (state_53581){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_53581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e53593){if((e53593 instanceof Object)){
var ex__53024__auto__ = e53593;
var statearr_53594_53730 = state_53581;
(statearr_53594_53730[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53731 = state_53581;
state_53581 = G__53731;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = function(state_53581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1.call(this,state_53581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__;
})()
;})(__53710,switch__53020__auto__,c__53134__auto___53723,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async))
})();
var state__53136__auto__ = (function (){var statearr_53595 = f__53135__auto__.call(null);
(statearr_53595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___53723);

return statearr_53595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(__53710,c__53134__auto___53723,G__53541_53711,G__53541_53712__$1,n__46445__auto___53709,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53541_53712__$1)].join('')));

}

var G__53732 = (__53710 + (1));
__53710 = G__53732;
continue;
} else {
}
break;
}

var c__53134__auto___53733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___53733,jobs,results,process,async){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___53733,jobs,results,process,async){
return (function (state_53617){
var state_val_53618 = (state_53617[(1)]);
if((state_val_53618 === (1))){
var state_53617__$1 = state_53617;
var statearr_53619_53734 = state_53617__$1;
(statearr_53619_53734[(2)] = null);

(statearr_53619_53734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53618 === (2))){
var state_53617__$1 = state_53617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53617__$1,(4),from);
} else {
if((state_val_53618 === (3))){
var inst_53615 = (state_53617[(2)]);
var state_53617__$1 = state_53617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53617__$1,inst_53615);
} else {
if((state_val_53618 === (4))){
var inst_53598 = (state_53617[(7)]);
var inst_53598__$1 = (state_53617[(2)]);
var inst_53599 = (inst_53598__$1 == null);
var state_53617__$1 = (function (){var statearr_53620 = state_53617;
(statearr_53620[(7)] = inst_53598__$1);

return statearr_53620;
})();
if(cljs.core.truth_(inst_53599)){
var statearr_53621_53735 = state_53617__$1;
(statearr_53621_53735[(1)] = (5));

} else {
var statearr_53622_53736 = state_53617__$1;
(statearr_53622_53736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53618 === (5))){
var inst_53601 = cljs.core.async.close_BANG_.call(null,jobs);
var state_53617__$1 = state_53617;
var statearr_53623_53737 = state_53617__$1;
(statearr_53623_53737[(2)] = inst_53601);

(statearr_53623_53737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53618 === (6))){
var inst_53603 = (state_53617[(8)]);
var inst_53598 = (state_53617[(7)]);
var inst_53603__$1 = cljs.core.async.chan.call(null,(1));
var inst_53604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53605 = [inst_53598,inst_53603__$1];
var inst_53606 = (new cljs.core.PersistentVector(null,2,(5),inst_53604,inst_53605,null));
var state_53617__$1 = (function (){var statearr_53624 = state_53617;
(statearr_53624[(8)] = inst_53603__$1);

return statearr_53624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53617__$1,(8),jobs,inst_53606);
} else {
if((state_val_53618 === (7))){
var inst_53613 = (state_53617[(2)]);
var state_53617__$1 = state_53617;
var statearr_53625_53738 = state_53617__$1;
(statearr_53625_53738[(2)] = inst_53613);

(statearr_53625_53738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53618 === (8))){
var inst_53603 = (state_53617[(8)]);
var inst_53608 = (state_53617[(2)]);
var state_53617__$1 = (function (){var statearr_53626 = state_53617;
(statearr_53626[(9)] = inst_53608);

return statearr_53626;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53617__$1,(9),results,inst_53603);
} else {
if((state_val_53618 === (9))){
var inst_53610 = (state_53617[(2)]);
var state_53617__$1 = (function (){var statearr_53627 = state_53617;
(statearr_53627[(10)] = inst_53610);

return statearr_53627;
})();
var statearr_53628_53739 = state_53617__$1;
(statearr_53628_53739[(2)] = null);

(statearr_53628_53739[(1)] = (2));


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
});})(c__53134__auto___53733,jobs,results,process,async))
;
return ((function (switch__53020__auto__,c__53134__auto___53733,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0 = (function (){
var statearr_53632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__);

(statearr_53632[(1)] = (1));

return statearr_53632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1 = (function (state_53617){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_53617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e53633){if((e53633 instanceof Object)){
var ex__53024__auto__ = e53633;
var statearr_53634_53740 = state_53617;
(statearr_53634_53740[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53741 = state_53617;
state_53617 = G__53741;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = function(state_53617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1.call(this,state_53617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___53733,jobs,results,process,async))
})();
var state__53136__auto__ = (function (){var statearr_53635 = f__53135__auto__.call(null);
(statearr_53635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___53733);

return statearr_53635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___53733,jobs,results,process,async))
);


var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__,jobs,results,process,async){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__,jobs,results,process,async){
return (function (state_53673){
var state_val_53674 = (state_53673[(1)]);
if((state_val_53674 === (7))){
var inst_53669 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
var statearr_53675_53742 = state_53673__$1;
(statearr_53675_53742[(2)] = inst_53669);

(statearr_53675_53742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (20))){
var state_53673__$1 = state_53673;
var statearr_53676_53743 = state_53673__$1;
(statearr_53676_53743[(2)] = null);

(statearr_53676_53743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (1))){
var state_53673__$1 = state_53673;
var statearr_53677_53744 = state_53673__$1;
(statearr_53677_53744[(2)] = null);

(statearr_53677_53744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (4))){
var inst_53638 = (state_53673[(7)]);
var inst_53638__$1 = (state_53673[(2)]);
var inst_53639 = (inst_53638__$1 == null);
var state_53673__$1 = (function (){var statearr_53678 = state_53673;
(statearr_53678[(7)] = inst_53638__$1);

return statearr_53678;
})();
if(cljs.core.truth_(inst_53639)){
var statearr_53679_53745 = state_53673__$1;
(statearr_53679_53745[(1)] = (5));

} else {
var statearr_53680_53746 = state_53673__$1;
(statearr_53680_53746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (15))){
var inst_53651 = (state_53673[(8)]);
var state_53673__$1 = state_53673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53673__$1,(18),to,inst_53651);
} else {
if((state_val_53674 === (21))){
var inst_53664 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
var statearr_53681_53747 = state_53673__$1;
(statearr_53681_53747[(2)] = inst_53664);

(statearr_53681_53747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (13))){
var inst_53666 = (state_53673[(2)]);
var state_53673__$1 = (function (){var statearr_53682 = state_53673;
(statearr_53682[(9)] = inst_53666);

return statearr_53682;
})();
var statearr_53683_53748 = state_53673__$1;
(statearr_53683_53748[(2)] = null);

(statearr_53683_53748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (6))){
var inst_53638 = (state_53673[(7)]);
var state_53673__$1 = state_53673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53673__$1,(11),inst_53638);
} else {
if((state_val_53674 === (17))){
var inst_53659 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
if(cljs.core.truth_(inst_53659)){
var statearr_53684_53749 = state_53673__$1;
(statearr_53684_53749[(1)] = (19));

} else {
var statearr_53685_53750 = state_53673__$1;
(statearr_53685_53750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (3))){
var inst_53671 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53673__$1,inst_53671);
} else {
if((state_val_53674 === (12))){
var inst_53648 = (state_53673[(10)]);
var state_53673__$1 = state_53673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53673__$1,(14),inst_53648);
} else {
if((state_val_53674 === (2))){
var state_53673__$1 = state_53673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53673__$1,(4),results);
} else {
if((state_val_53674 === (19))){
var state_53673__$1 = state_53673;
var statearr_53686_53751 = state_53673__$1;
(statearr_53686_53751[(2)] = null);

(statearr_53686_53751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (11))){
var inst_53648 = (state_53673[(2)]);
var state_53673__$1 = (function (){var statearr_53687 = state_53673;
(statearr_53687[(10)] = inst_53648);

return statearr_53687;
})();
var statearr_53688_53752 = state_53673__$1;
(statearr_53688_53752[(2)] = null);

(statearr_53688_53752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (9))){
var state_53673__$1 = state_53673;
var statearr_53689_53753 = state_53673__$1;
(statearr_53689_53753[(2)] = null);

(statearr_53689_53753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (5))){
var state_53673__$1 = state_53673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53690_53754 = state_53673__$1;
(statearr_53690_53754[(1)] = (8));

} else {
var statearr_53691_53755 = state_53673__$1;
(statearr_53691_53755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (14))){
var inst_53651 = (state_53673[(8)]);
var inst_53653 = (state_53673[(11)]);
var inst_53651__$1 = (state_53673[(2)]);
var inst_53652 = (inst_53651__$1 == null);
var inst_53653__$1 = cljs.core.not.call(null,inst_53652);
var state_53673__$1 = (function (){var statearr_53692 = state_53673;
(statearr_53692[(8)] = inst_53651__$1);

(statearr_53692[(11)] = inst_53653__$1);

return statearr_53692;
})();
if(inst_53653__$1){
var statearr_53693_53756 = state_53673__$1;
(statearr_53693_53756[(1)] = (15));

} else {
var statearr_53694_53757 = state_53673__$1;
(statearr_53694_53757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (16))){
var inst_53653 = (state_53673[(11)]);
var state_53673__$1 = state_53673;
var statearr_53695_53758 = state_53673__$1;
(statearr_53695_53758[(2)] = inst_53653);

(statearr_53695_53758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (10))){
var inst_53645 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
var statearr_53696_53759 = state_53673__$1;
(statearr_53696_53759[(2)] = inst_53645);

(statearr_53696_53759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (18))){
var inst_53656 = (state_53673[(2)]);
var state_53673__$1 = state_53673;
var statearr_53697_53760 = state_53673__$1;
(statearr_53697_53760[(2)] = inst_53656);

(statearr_53697_53760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53674 === (8))){
var inst_53642 = cljs.core.async.close_BANG_.call(null,to);
var state_53673__$1 = state_53673;
var statearr_53698_53761 = state_53673__$1;
(statearr_53698_53761[(2)] = inst_53642);

(statearr_53698_53761[(1)] = (10));


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
});})(c__53134__auto__,jobs,results,process,async))
;
return ((function (switch__53020__auto__,c__53134__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0 = (function (){
var statearr_53702 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__);

(statearr_53702[(1)] = (1));

return statearr_53702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1 = (function (state_53673){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_53673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e53703){if((e53703 instanceof Object)){
var ex__53024__auto__ = e53703;
var statearr_53704_53762 = state_53673;
(statearr_53704_53762[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53763 = state_53673;
state_53673 = G__53763;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__ = function(state_53673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1.call(this,state_53673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__,jobs,results,process,async))
})();
var state__53136__auto__ = (function (){var statearr_53705 = f__53135__auto__.call(null);
(statearr_53705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_53705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__,jobs,results,process,async))
);

return c__53134__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args53764 = [];
var len__46645__auto___53767 = arguments.length;
var i__46646__auto___53768 = (0);
while(true){
if((i__46646__auto___53768 < len__46645__auto___53767)){
args53764.push((arguments[i__46646__auto___53768]));

var G__53769 = (i__46646__auto___53768 + (1));
i__46646__auto___53768 = G__53769;
continue;
} else {
}
break;
}

var G__53766 = args53764.length;
switch (G__53766) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53764.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args53771 = [];
var len__46645__auto___53774 = arguments.length;
var i__46646__auto___53775 = (0);
while(true){
if((i__46646__auto___53775 < len__46645__auto___53774)){
args53771.push((arguments[i__46646__auto___53775]));

var G__53776 = (i__46646__auto___53775 + (1));
i__46646__auto___53775 = G__53776;
continue;
} else {
}
break;
}

var G__53773 = args53771.length;
switch (G__53773) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53771.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args53778 = [];
var len__46645__auto___53831 = arguments.length;
var i__46646__auto___53832 = (0);
while(true){
if((i__46646__auto___53832 < len__46645__auto___53831)){
args53778.push((arguments[i__46646__auto___53832]));

var G__53833 = (i__46646__auto___53832 + (1));
i__46646__auto___53832 = G__53833;
continue;
} else {
}
break;
}

var G__53780 = args53778.length;
switch (G__53780) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53778.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__53134__auto___53835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___53835,tc,fc){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___53835,tc,fc){
return (function (state_53806){
var state_val_53807 = (state_53806[(1)]);
if((state_val_53807 === (7))){
var inst_53802 = (state_53806[(2)]);
var state_53806__$1 = state_53806;
var statearr_53808_53836 = state_53806__$1;
(statearr_53808_53836[(2)] = inst_53802);

(statearr_53808_53836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (1))){
var state_53806__$1 = state_53806;
var statearr_53809_53837 = state_53806__$1;
(statearr_53809_53837[(2)] = null);

(statearr_53809_53837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (4))){
var inst_53783 = (state_53806[(7)]);
var inst_53783__$1 = (state_53806[(2)]);
var inst_53784 = (inst_53783__$1 == null);
var state_53806__$1 = (function (){var statearr_53810 = state_53806;
(statearr_53810[(7)] = inst_53783__$1);

return statearr_53810;
})();
if(cljs.core.truth_(inst_53784)){
var statearr_53811_53838 = state_53806__$1;
(statearr_53811_53838[(1)] = (5));

} else {
var statearr_53812_53839 = state_53806__$1;
(statearr_53812_53839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (13))){
var state_53806__$1 = state_53806;
var statearr_53813_53840 = state_53806__$1;
(statearr_53813_53840[(2)] = null);

(statearr_53813_53840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (6))){
var inst_53783 = (state_53806[(7)]);
var inst_53789 = p.call(null,inst_53783);
var state_53806__$1 = state_53806;
if(cljs.core.truth_(inst_53789)){
var statearr_53814_53841 = state_53806__$1;
(statearr_53814_53841[(1)] = (9));

} else {
var statearr_53815_53842 = state_53806__$1;
(statearr_53815_53842[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (3))){
var inst_53804 = (state_53806[(2)]);
var state_53806__$1 = state_53806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53806__$1,inst_53804);
} else {
if((state_val_53807 === (12))){
var state_53806__$1 = state_53806;
var statearr_53816_53843 = state_53806__$1;
(statearr_53816_53843[(2)] = null);

(statearr_53816_53843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (2))){
var state_53806__$1 = state_53806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53806__$1,(4),ch);
} else {
if((state_val_53807 === (11))){
var inst_53783 = (state_53806[(7)]);
var inst_53793 = (state_53806[(2)]);
var state_53806__$1 = state_53806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53806__$1,(8),inst_53793,inst_53783);
} else {
if((state_val_53807 === (9))){
var state_53806__$1 = state_53806;
var statearr_53817_53844 = state_53806__$1;
(statearr_53817_53844[(2)] = tc);

(statearr_53817_53844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (5))){
var inst_53786 = cljs.core.async.close_BANG_.call(null,tc);
var inst_53787 = cljs.core.async.close_BANG_.call(null,fc);
var state_53806__$1 = (function (){var statearr_53818 = state_53806;
(statearr_53818[(8)] = inst_53786);

return statearr_53818;
})();
var statearr_53819_53845 = state_53806__$1;
(statearr_53819_53845[(2)] = inst_53787);

(statearr_53819_53845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (14))){
var inst_53800 = (state_53806[(2)]);
var state_53806__$1 = state_53806;
var statearr_53820_53846 = state_53806__$1;
(statearr_53820_53846[(2)] = inst_53800);

(statearr_53820_53846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (10))){
var state_53806__$1 = state_53806;
var statearr_53821_53847 = state_53806__$1;
(statearr_53821_53847[(2)] = fc);

(statearr_53821_53847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53807 === (8))){
var inst_53795 = (state_53806[(2)]);
var state_53806__$1 = state_53806;
if(cljs.core.truth_(inst_53795)){
var statearr_53822_53848 = state_53806__$1;
(statearr_53822_53848[(1)] = (12));

} else {
var statearr_53823_53849 = state_53806__$1;
(statearr_53823_53849[(1)] = (13));

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
});})(c__53134__auto___53835,tc,fc))
;
return ((function (switch__53020__auto__,c__53134__auto___53835,tc,fc){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_53827 = [null,null,null,null,null,null,null,null,null];
(statearr_53827[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_53827[(1)] = (1));

return statearr_53827;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_53806){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_53806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e53828){if((e53828 instanceof Object)){
var ex__53024__auto__ = e53828;
var statearr_53829_53850 = state_53806;
(statearr_53829_53850[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53851 = state_53806;
state_53806 = G__53851;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_53806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_53806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___53835,tc,fc))
})();
var state__53136__auto__ = (function (){var statearr_53830 = f__53135__auto__.call(null);
(statearr_53830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___53835);

return statearr_53830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___53835,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__){
return (function (state_53915){
var state_val_53916 = (state_53915[(1)]);
if((state_val_53916 === (7))){
var inst_53911 = (state_53915[(2)]);
var state_53915__$1 = state_53915;
var statearr_53917_53938 = state_53915__$1;
(statearr_53917_53938[(2)] = inst_53911);

(statearr_53917_53938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53916 === (1))){
var inst_53895 = init;
var state_53915__$1 = (function (){var statearr_53918 = state_53915;
(statearr_53918[(7)] = inst_53895);

return statearr_53918;
})();
var statearr_53919_53939 = state_53915__$1;
(statearr_53919_53939[(2)] = null);

(statearr_53919_53939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53916 === (4))){
var inst_53898 = (state_53915[(8)]);
var inst_53898__$1 = (state_53915[(2)]);
var inst_53899 = (inst_53898__$1 == null);
var state_53915__$1 = (function (){var statearr_53920 = state_53915;
(statearr_53920[(8)] = inst_53898__$1);

return statearr_53920;
})();
if(cljs.core.truth_(inst_53899)){
var statearr_53921_53940 = state_53915__$1;
(statearr_53921_53940[(1)] = (5));

} else {
var statearr_53922_53941 = state_53915__$1;
(statearr_53922_53941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53916 === (6))){
var inst_53898 = (state_53915[(8)]);
var inst_53902 = (state_53915[(9)]);
var inst_53895 = (state_53915[(7)]);
var inst_53902__$1 = f.call(null,inst_53895,inst_53898);
var inst_53903 = cljs.core.reduced_QMARK_.call(null,inst_53902__$1);
var state_53915__$1 = (function (){var statearr_53923 = state_53915;
(statearr_53923[(9)] = inst_53902__$1);

return statearr_53923;
})();
if(inst_53903){
var statearr_53924_53942 = state_53915__$1;
(statearr_53924_53942[(1)] = (8));

} else {
var statearr_53925_53943 = state_53915__$1;
(statearr_53925_53943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53916 === (3))){
var inst_53913 = (state_53915[(2)]);
var state_53915__$1 = state_53915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53915__$1,inst_53913);
} else {
if((state_val_53916 === (2))){
var state_53915__$1 = state_53915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53915__$1,(4),ch);
} else {
if((state_val_53916 === (9))){
var inst_53902 = (state_53915[(9)]);
var inst_53895 = inst_53902;
var state_53915__$1 = (function (){var statearr_53926 = state_53915;
(statearr_53926[(7)] = inst_53895);

return statearr_53926;
})();
var statearr_53927_53944 = state_53915__$1;
(statearr_53927_53944[(2)] = null);

(statearr_53927_53944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53916 === (5))){
var inst_53895 = (state_53915[(7)]);
var state_53915__$1 = state_53915;
var statearr_53928_53945 = state_53915__$1;
(statearr_53928_53945[(2)] = inst_53895);

(statearr_53928_53945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53916 === (10))){
var inst_53909 = (state_53915[(2)]);
var state_53915__$1 = state_53915;
var statearr_53929_53946 = state_53915__$1;
(statearr_53929_53946[(2)] = inst_53909);

(statearr_53929_53946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53916 === (8))){
var inst_53902 = (state_53915[(9)]);
var inst_53905 = cljs.core.deref.call(null,inst_53902);
var state_53915__$1 = state_53915;
var statearr_53930_53947 = state_53915__$1;
(statearr_53930_53947[(2)] = inst_53905);

(statearr_53930_53947[(1)] = (10));


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
});})(c__53134__auto__))
;
return ((function (switch__53020__auto__,c__53134__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__53021__auto__ = null;
var cljs$core$async$reduce_$_state_machine__53021__auto____0 = (function (){
var statearr_53934 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53934[(0)] = cljs$core$async$reduce_$_state_machine__53021__auto__);

(statearr_53934[(1)] = (1));

return statearr_53934;
});
var cljs$core$async$reduce_$_state_machine__53021__auto____1 = (function (state_53915){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_53915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e53935){if((e53935 instanceof Object)){
var ex__53024__auto__ = e53935;
var statearr_53936_53948 = state_53915;
(statearr_53936_53948[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53949 = state_53915;
state_53915 = G__53949;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__53021__auto__ = function(state_53915){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__53021__auto____1.call(this,state_53915);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__53021__auto____0;
cljs$core$async$reduce_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__53021__auto____1;
return cljs$core$async$reduce_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__))
})();
var state__53136__auto__ = (function (){var statearr_53937 = f__53135__auto__.call(null);
(statearr_53937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_53937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__))
);

return c__53134__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__,f__$1){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__,f__$1){
return (function (state_53969){
var state_val_53970 = (state_53969[(1)]);
if((state_val_53970 === (1))){
var inst_53964 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_53969__$1 = state_53969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53969__$1,(2),inst_53964);
} else {
if((state_val_53970 === (2))){
var inst_53966 = (state_53969[(2)]);
var inst_53967 = f__$1.call(null,inst_53966);
var state_53969__$1 = state_53969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53969__$1,inst_53967);
} else {
return null;
}
}
});})(c__53134__auto__,f__$1))
;
return ((function (switch__53020__auto__,c__53134__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__53021__auto__ = null;
var cljs$core$async$transduce_$_state_machine__53021__auto____0 = (function (){
var statearr_53974 = [null,null,null,null,null,null,null];
(statearr_53974[(0)] = cljs$core$async$transduce_$_state_machine__53021__auto__);

(statearr_53974[(1)] = (1));

return statearr_53974;
});
var cljs$core$async$transduce_$_state_machine__53021__auto____1 = (function (state_53969){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_53969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e53975){if((e53975 instanceof Object)){
var ex__53024__auto__ = e53975;
var statearr_53976_53978 = state_53969;
(statearr_53976_53978[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53979 = state_53969;
state_53969 = G__53979;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__53021__auto__ = function(state_53969){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__53021__auto____1.call(this,state_53969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__53021__auto____0;
cljs$core$async$transduce_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__53021__auto____1;
return cljs$core$async$transduce_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__,f__$1))
})();
var state__53136__auto__ = (function (){var statearr_53977 = f__53135__auto__.call(null);
(statearr_53977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_53977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__,f__$1))
);

return c__53134__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args53980 = [];
var len__46645__auto___54032 = arguments.length;
var i__46646__auto___54033 = (0);
while(true){
if((i__46646__auto___54033 < len__46645__auto___54032)){
args53980.push((arguments[i__46646__auto___54033]));

var G__54034 = (i__46646__auto___54033 + (1));
i__46646__auto___54033 = G__54034;
continue;
} else {
}
break;
}

var G__53982 = args53980.length;
switch (G__53982) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53980.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__){
return (function (state_54007){
var state_val_54008 = (state_54007[(1)]);
if((state_val_54008 === (7))){
var inst_53989 = (state_54007[(2)]);
var state_54007__$1 = state_54007;
var statearr_54009_54036 = state_54007__$1;
(statearr_54009_54036[(2)] = inst_53989);

(statearr_54009_54036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (1))){
var inst_53983 = cljs.core.seq.call(null,coll);
var inst_53984 = inst_53983;
var state_54007__$1 = (function (){var statearr_54010 = state_54007;
(statearr_54010[(7)] = inst_53984);

return statearr_54010;
})();
var statearr_54011_54037 = state_54007__$1;
(statearr_54011_54037[(2)] = null);

(statearr_54011_54037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (4))){
var inst_53984 = (state_54007[(7)]);
var inst_53987 = cljs.core.first.call(null,inst_53984);
var state_54007__$1 = state_54007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54007__$1,(7),ch,inst_53987);
} else {
if((state_val_54008 === (13))){
var inst_54001 = (state_54007[(2)]);
var state_54007__$1 = state_54007;
var statearr_54012_54038 = state_54007__$1;
(statearr_54012_54038[(2)] = inst_54001);

(statearr_54012_54038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (6))){
var inst_53992 = (state_54007[(2)]);
var state_54007__$1 = state_54007;
if(cljs.core.truth_(inst_53992)){
var statearr_54013_54039 = state_54007__$1;
(statearr_54013_54039[(1)] = (8));

} else {
var statearr_54014_54040 = state_54007__$1;
(statearr_54014_54040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (3))){
var inst_54005 = (state_54007[(2)]);
var state_54007__$1 = state_54007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54007__$1,inst_54005);
} else {
if((state_val_54008 === (12))){
var state_54007__$1 = state_54007;
var statearr_54015_54041 = state_54007__$1;
(statearr_54015_54041[(2)] = null);

(statearr_54015_54041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (2))){
var inst_53984 = (state_54007[(7)]);
var state_54007__$1 = state_54007;
if(cljs.core.truth_(inst_53984)){
var statearr_54016_54042 = state_54007__$1;
(statearr_54016_54042[(1)] = (4));

} else {
var statearr_54017_54043 = state_54007__$1;
(statearr_54017_54043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (11))){
var inst_53998 = cljs.core.async.close_BANG_.call(null,ch);
var state_54007__$1 = state_54007;
var statearr_54018_54044 = state_54007__$1;
(statearr_54018_54044[(2)] = inst_53998);

(statearr_54018_54044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (9))){
var state_54007__$1 = state_54007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54019_54045 = state_54007__$1;
(statearr_54019_54045[(1)] = (11));

} else {
var statearr_54020_54046 = state_54007__$1;
(statearr_54020_54046[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (5))){
var inst_53984 = (state_54007[(7)]);
var state_54007__$1 = state_54007;
var statearr_54021_54047 = state_54007__$1;
(statearr_54021_54047[(2)] = inst_53984);

(statearr_54021_54047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (10))){
var inst_54003 = (state_54007[(2)]);
var state_54007__$1 = state_54007;
var statearr_54022_54048 = state_54007__$1;
(statearr_54022_54048[(2)] = inst_54003);

(statearr_54022_54048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54008 === (8))){
var inst_53984 = (state_54007[(7)]);
var inst_53994 = cljs.core.next.call(null,inst_53984);
var inst_53984__$1 = inst_53994;
var state_54007__$1 = (function (){var statearr_54023 = state_54007;
(statearr_54023[(7)] = inst_53984__$1);

return statearr_54023;
})();
var statearr_54024_54049 = state_54007__$1;
(statearr_54024_54049[(2)] = null);

(statearr_54024_54049[(1)] = (2));


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
});})(c__53134__auto__))
;
return ((function (switch__53020__auto__,c__53134__auto__){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_54028 = [null,null,null,null,null,null,null,null];
(statearr_54028[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_54028[(1)] = (1));

return statearr_54028;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_54007){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_54007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e54029){if((e54029 instanceof Object)){
var ex__53024__auto__ = e54029;
var statearr_54030_54050 = state_54007;
(statearr_54030_54050[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54051 = state_54007;
state_54007 = G__54051;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_54007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_54007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__))
})();
var state__53136__auto__ = (function (){var statearr_54031 = f__53135__auto__.call(null);
(statearr_54031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_54031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__))
);

return c__53134__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__46142__auto__ = (((_ == null))?null:_);
var m__46143__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,_);
} else {
var m__46143__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__46142__auto__ = (((m == null))?null:m);
var m__46143__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__46143__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__46142__auto__ = (((m == null))?null:m);
var m__46143__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,m,ch);
} else {
var m__46143__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__46142__auto__ = (((m == null))?null:m);
var m__46143__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,m);
} else {
var m__46143__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async54277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54277 = (function (ch,cs,meta54278){
this.ch = ch;
this.cs = cs;
this.meta54278 = meta54278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_54279,meta54278__$1){
var self__ = this;
var _54279__$1 = this;
return (new cljs.core.async.t_cljs$core$async54277(self__.ch,self__.cs,meta54278__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async54277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_54279){
var self__ = this;
var _54279__$1 = this;
return self__.meta54278;
});})(cs))
;

cljs.core.async.t_cljs$core$async54277.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async54277.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54277.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54277.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54277.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async54277.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54278","meta54278",-1652153705,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async54277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54277";

cljs.core.async.t_cljs$core$async54277.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async54277");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async54277 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async54277(ch__$1,cs__$1,meta54278){
return (new cljs.core.async.t_cljs$core$async54277(ch__$1,cs__$1,meta54278));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async54277(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__53134__auto___54502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___54502,cs,m,dchan,dctr,done){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___54502,cs,m,dchan,dctr,done){
return (function (state_54414){
var state_val_54415 = (state_54414[(1)]);
if((state_val_54415 === (7))){
var inst_54410 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
var statearr_54416_54503 = state_54414__$1;
(statearr_54416_54503[(2)] = inst_54410);

(statearr_54416_54503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (20))){
var inst_54313 = (state_54414[(7)]);
var inst_54325 = cljs.core.first.call(null,inst_54313);
var inst_54326 = cljs.core.nth.call(null,inst_54325,(0),null);
var inst_54327 = cljs.core.nth.call(null,inst_54325,(1),null);
var state_54414__$1 = (function (){var statearr_54417 = state_54414;
(statearr_54417[(8)] = inst_54326);

return statearr_54417;
})();
if(cljs.core.truth_(inst_54327)){
var statearr_54418_54504 = state_54414__$1;
(statearr_54418_54504[(1)] = (22));

} else {
var statearr_54419_54505 = state_54414__$1;
(statearr_54419_54505[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (27))){
var inst_54355 = (state_54414[(9)]);
var inst_54362 = (state_54414[(10)]);
var inst_54357 = (state_54414[(11)]);
var inst_54282 = (state_54414[(12)]);
var inst_54362__$1 = cljs.core._nth.call(null,inst_54355,inst_54357);
var inst_54363 = cljs.core.async.put_BANG_.call(null,inst_54362__$1,inst_54282,done);
var state_54414__$1 = (function (){var statearr_54420 = state_54414;
(statearr_54420[(10)] = inst_54362__$1);

return statearr_54420;
})();
if(cljs.core.truth_(inst_54363)){
var statearr_54421_54506 = state_54414__$1;
(statearr_54421_54506[(1)] = (30));

} else {
var statearr_54422_54507 = state_54414__$1;
(statearr_54422_54507[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (1))){
var state_54414__$1 = state_54414;
var statearr_54423_54508 = state_54414__$1;
(statearr_54423_54508[(2)] = null);

(statearr_54423_54508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (24))){
var inst_54313 = (state_54414[(7)]);
var inst_54332 = (state_54414[(2)]);
var inst_54333 = cljs.core.next.call(null,inst_54313);
var inst_54291 = inst_54333;
var inst_54292 = null;
var inst_54293 = (0);
var inst_54294 = (0);
var state_54414__$1 = (function (){var statearr_54424 = state_54414;
(statearr_54424[(13)] = inst_54294);

(statearr_54424[(14)] = inst_54332);

(statearr_54424[(15)] = inst_54291);

(statearr_54424[(16)] = inst_54293);

(statearr_54424[(17)] = inst_54292);

return statearr_54424;
})();
var statearr_54425_54509 = state_54414__$1;
(statearr_54425_54509[(2)] = null);

(statearr_54425_54509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (39))){
var state_54414__$1 = state_54414;
var statearr_54429_54510 = state_54414__$1;
(statearr_54429_54510[(2)] = null);

(statearr_54429_54510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (4))){
var inst_54282 = (state_54414[(12)]);
var inst_54282__$1 = (state_54414[(2)]);
var inst_54283 = (inst_54282__$1 == null);
var state_54414__$1 = (function (){var statearr_54430 = state_54414;
(statearr_54430[(12)] = inst_54282__$1);

return statearr_54430;
})();
if(cljs.core.truth_(inst_54283)){
var statearr_54431_54511 = state_54414__$1;
(statearr_54431_54511[(1)] = (5));

} else {
var statearr_54432_54512 = state_54414__$1;
(statearr_54432_54512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (15))){
var inst_54294 = (state_54414[(13)]);
var inst_54291 = (state_54414[(15)]);
var inst_54293 = (state_54414[(16)]);
var inst_54292 = (state_54414[(17)]);
var inst_54309 = (state_54414[(2)]);
var inst_54310 = (inst_54294 + (1));
var tmp54426 = inst_54291;
var tmp54427 = inst_54293;
var tmp54428 = inst_54292;
var inst_54291__$1 = tmp54426;
var inst_54292__$1 = tmp54428;
var inst_54293__$1 = tmp54427;
var inst_54294__$1 = inst_54310;
var state_54414__$1 = (function (){var statearr_54433 = state_54414;
(statearr_54433[(13)] = inst_54294__$1);

(statearr_54433[(15)] = inst_54291__$1);

(statearr_54433[(16)] = inst_54293__$1);

(statearr_54433[(18)] = inst_54309);

(statearr_54433[(17)] = inst_54292__$1);

return statearr_54433;
})();
var statearr_54434_54513 = state_54414__$1;
(statearr_54434_54513[(2)] = null);

(statearr_54434_54513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (21))){
var inst_54336 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
var statearr_54438_54514 = state_54414__$1;
(statearr_54438_54514[(2)] = inst_54336);

(statearr_54438_54514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (31))){
var inst_54362 = (state_54414[(10)]);
var inst_54366 = done.call(null,null);
var inst_54367 = cljs.core.async.untap_STAR_.call(null,m,inst_54362);
var state_54414__$1 = (function (){var statearr_54439 = state_54414;
(statearr_54439[(19)] = inst_54366);

return statearr_54439;
})();
var statearr_54440_54515 = state_54414__$1;
(statearr_54440_54515[(2)] = inst_54367);

(statearr_54440_54515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (32))){
var inst_54355 = (state_54414[(9)]);
var inst_54354 = (state_54414[(20)]);
var inst_54357 = (state_54414[(11)]);
var inst_54356 = (state_54414[(21)]);
var inst_54369 = (state_54414[(2)]);
var inst_54370 = (inst_54357 + (1));
var tmp54435 = inst_54355;
var tmp54436 = inst_54354;
var tmp54437 = inst_54356;
var inst_54354__$1 = tmp54436;
var inst_54355__$1 = tmp54435;
var inst_54356__$1 = tmp54437;
var inst_54357__$1 = inst_54370;
var state_54414__$1 = (function (){var statearr_54441 = state_54414;
(statearr_54441[(9)] = inst_54355__$1);

(statearr_54441[(20)] = inst_54354__$1);

(statearr_54441[(22)] = inst_54369);

(statearr_54441[(11)] = inst_54357__$1);

(statearr_54441[(21)] = inst_54356__$1);

return statearr_54441;
})();
var statearr_54442_54516 = state_54414__$1;
(statearr_54442_54516[(2)] = null);

(statearr_54442_54516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (40))){
var inst_54382 = (state_54414[(23)]);
var inst_54386 = done.call(null,null);
var inst_54387 = cljs.core.async.untap_STAR_.call(null,m,inst_54382);
var state_54414__$1 = (function (){var statearr_54443 = state_54414;
(statearr_54443[(24)] = inst_54386);

return statearr_54443;
})();
var statearr_54444_54517 = state_54414__$1;
(statearr_54444_54517[(2)] = inst_54387);

(statearr_54444_54517[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (33))){
var inst_54373 = (state_54414[(25)]);
var inst_54375 = cljs.core.chunked_seq_QMARK_.call(null,inst_54373);
var state_54414__$1 = state_54414;
if(inst_54375){
var statearr_54445_54518 = state_54414__$1;
(statearr_54445_54518[(1)] = (36));

} else {
var statearr_54446_54519 = state_54414__$1;
(statearr_54446_54519[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (13))){
var inst_54303 = (state_54414[(26)]);
var inst_54306 = cljs.core.async.close_BANG_.call(null,inst_54303);
var state_54414__$1 = state_54414;
var statearr_54447_54520 = state_54414__$1;
(statearr_54447_54520[(2)] = inst_54306);

(statearr_54447_54520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (22))){
var inst_54326 = (state_54414[(8)]);
var inst_54329 = cljs.core.async.close_BANG_.call(null,inst_54326);
var state_54414__$1 = state_54414;
var statearr_54448_54521 = state_54414__$1;
(statearr_54448_54521[(2)] = inst_54329);

(statearr_54448_54521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (36))){
var inst_54373 = (state_54414[(25)]);
var inst_54377 = cljs.core.chunk_first.call(null,inst_54373);
var inst_54378 = cljs.core.chunk_rest.call(null,inst_54373);
var inst_54379 = cljs.core.count.call(null,inst_54377);
var inst_54354 = inst_54378;
var inst_54355 = inst_54377;
var inst_54356 = inst_54379;
var inst_54357 = (0);
var state_54414__$1 = (function (){var statearr_54449 = state_54414;
(statearr_54449[(9)] = inst_54355);

(statearr_54449[(20)] = inst_54354);

(statearr_54449[(11)] = inst_54357);

(statearr_54449[(21)] = inst_54356);

return statearr_54449;
})();
var statearr_54450_54522 = state_54414__$1;
(statearr_54450_54522[(2)] = null);

(statearr_54450_54522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (41))){
var inst_54373 = (state_54414[(25)]);
var inst_54389 = (state_54414[(2)]);
var inst_54390 = cljs.core.next.call(null,inst_54373);
var inst_54354 = inst_54390;
var inst_54355 = null;
var inst_54356 = (0);
var inst_54357 = (0);
var state_54414__$1 = (function (){var statearr_54451 = state_54414;
(statearr_54451[(9)] = inst_54355);

(statearr_54451[(20)] = inst_54354);

(statearr_54451[(27)] = inst_54389);

(statearr_54451[(11)] = inst_54357);

(statearr_54451[(21)] = inst_54356);

return statearr_54451;
})();
var statearr_54452_54523 = state_54414__$1;
(statearr_54452_54523[(2)] = null);

(statearr_54452_54523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (43))){
var state_54414__$1 = state_54414;
var statearr_54453_54524 = state_54414__$1;
(statearr_54453_54524[(2)] = null);

(statearr_54453_54524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (29))){
var inst_54398 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
var statearr_54454_54525 = state_54414__$1;
(statearr_54454_54525[(2)] = inst_54398);

(statearr_54454_54525[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (44))){
var inst_54407 = (state_54414[(2)]);
var state_54414__$1 = (function (){var statearr_54455 = state_54414;
(statearr_54455[(28)] = inst_54407);

return statearr_54455;
})();
var statearr_54456_54526 = state_54414__$1;
(statearr_54456_54526[(2)] = null);

(statearr_54456_54526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (6))){
var inst_54346 = (state_54414[(29)]);
var inst_54345 = cljs.core.deref.call(null,cs);
var inst_54346__$1 = cljs.core.keys.call(null,inst_54345);
var inst_54347 = cljs.core.count.call(null,inst_54346__$1);
var inst_54348 = cljs.core.reset_BANG_.call(null,dctr,inst_54347);
var inst_54353 = cljs.core.seq.call(null,inst_54346__$1);
var inst_54354 = inst_54353;
var inst_54355 = null;
var inst_54356 = (0);
var inst_54357 = (0);
var state_54414__$1 = (function (){var statearr_54457 = state_54414;
(statearr_54457[(9)] = inst_54355);

(statearr_54457[(20)] = inst_54354);

(statearr_54457[(29)] = inst_54346__$1);

(statearr_54457[(11)] = inst_54357);

(statearr_54457[(30)] = inst_54348);

(statearr_54457[(21)] = inst_54356);

return statearr_54457;
})();
var statearr_54458_54527 = state_54414__$1;
(statearr_54458_54527[(2)] = null);

(statearr_54458_54527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (28))){
var inst_54354 = (state_54414[(20)]);
var inst_54373 = (state_54414[(25)]);
var inst_54373__$1 = cljs.core.seq.call(null,inst_54354);
var state_54414__$1 = (function (){var statearr_54459 = state_54414;
(statearr_54459[(25)] = inst_54373__$1);

return statearr_54459;
})();
if(inst_54373__$1){
var statearr_54460_54528 = state_54414__$1;
(statearr_54460_54528[(1)] = (33));

} else {
var statearr_54461_54529 = state_54414__$1;
(statearr_54461_54529[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (25))){
var inst_54357 = (state_54414[(11)]);
var inst_54356 = (state_54414[(21)]);
var inst_54359 = (inst_54357 < inst_54356);
var inst_54360 = inst_54359;
var state_54414__$1 = state_54414;
if(cljs.core.truth_(inst_54360)){
var statearr_54462_54530 = state_54414__$1;
(statearr_54462_54530[(1)] = (27));

} else {
var statearr_54463_54531 = state_54414__$1;
(statearr_54463_54531[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (34))){
var state_54414__$1 = state_54414;
var statearr_54464_54532 = state_54414__$1;
(statearr_54464_54532[(2)] = null);

(statearr_54464_54532[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (17))){
var state_54414__$1 = state_54414;
var statearr_54465_54533 = state_54414__$1;
(statearr_54465_54533[(2)] = null);

(statearr_54465_54533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (3))){
var inst_54412 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54414__$1,inst_54412);
} else {
if((state_val_54415 === (12))){
var inst_54341 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
var statearr_54466_54534 = state_54414__$1;
(statearr_54466_54534[(2)] = inst_54341);

(statearr_54466_54534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (2))){
var state_54414__$1 = state_54414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54414__$1,(4),ch);
} else {
if((state_val_54415 === (23))){
var state_54414__$1 = state_54414;
var statearr_54467_54535 = state_54414__$1;
(statearr_54467_54535[(2)] = null);

(statearr_54467_54535[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (35))){
var inst_54396 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
var statearr_54468_54536 = state_54414__$1;
(statearr_54468_54536[(2)] = inst_54396);

(statearr_54468_54536[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (19))){
var inst_54313 = (state_54414[(7)]);
var inst_54317 = cljs.core.chunk_first.call(null,inst_54313);
var inst_54318 = cljs.core.chunk_rest.call(null,inst_54313);
var inst_54319 = cljs.core.count.call(null,inst_54317);
var inst_54291 = inst_54318;
var inst_54292 = inst_54317;
var inst_54293 = inst_54319;
var inst_54294 = (0);
var state_54414__$1 = (function (){var statearr_54469 = state_54414;
(statearr_54469[(13)] = inst_54294);

(statearr_54469[(15)] = inst_54291);

(statearr_54469[(16)] = inst_54293);

(statearr_54469[(17)] = inst_54292);

return statearr_54469;
})();
var statearr_54470_54537 = state_54414__$1;
(statearr_54470_54537[(2)] = null);

(statearr_54470_54537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (11))){
var inst_54291 = (state_54414[(15)]);
var inst_54313 = (state_54414[(7)]);
var inst_54313__$1 = cljs.core.seq.call(null,inst_54291);
var state_54414__$1 = (function (){var statearr_54471 = state_54414;
(statearr_54471[(7)] = inst_54313__$1);

return statearr_54471;
})();
if(inst_54313__$1){
var statearr_54472_54538 = state_54414__$1;
(statearr_54472_54538[(1)] = (16));

} else {
var statearr_54473_54539 = state_54414__$1;
(statearr_54473_54539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (9))){
var inst_54343 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
var statearr_54474_54540 = state_54414__$1;
(statearr_54474_54540[(2)] = inst_54343);

(statearr_54474_54540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (5))){
var inst_54289 = cljs.core.deref.call(null,cs);
var inst_54290 = cljs.core.seq.call(null,inst_54289);
var inst_54291 = inst_54290;
var inst_54292 = null;
var inst_54293 = (0);
var inst_54294 = (0);
var state_54414__$1 = (function (){var statearr_54475 = state_54414;
(statearr_54475[(13)] = inst_54294);

(statearr_54475[(15)] = inst_54291);

(statearr_54475[(16)] = inst_54293);

(statearr_54475[(17)] = inst_54292);

return statearr_54475;
})();
var statearr_54476_54541 = state_54414__$1;
(statearr_54476_54541[(2)] = null);

(statearr_54476_54541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (14))){
var state_54414__$1 = state_54414;
var statearr_54477_54542 = state_54414__$1;
(statearr_54477_54542[(2)] = null);

(statearr_54477_54542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (45))){
var inst_54404 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
var statearr_54478_54543 = state_54414__$1;
(statearr_54478_54543[(2)] = inst_54404);

(statearr_54478_54543[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (26))){
var inst_54346 = (state_54414[(29)]);
var inst_54400 = (state_54414[(2)]);
var inst_54401 = cljs.core.seq.call(null,inst_54346);
var state_54414__$1 = (function (){var statearr_54479 = state_54414;
(statearr_54479[(31)] = inst_54400);

return statearr_54479;
})();
if(inst_54401){
var statearr_54480_54544 = state_54414__$1;
(statearr_54480_54544[(1)] = (42));

} else {
var statearr_54481_54545 = state_54414__$1;
(statearr_54481_54545[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (16))){
var inst_54313 = (state_54414[(7)]);
var inst_54315 = cljs.core.chunked_seq_QMARK_.call(null,inst_54313);
var state_54414__$1 = state_54414;
if(inst_54315){
var statearr_54482_54546 = state_54414__$1;
(statearr_54482_54546[(1)] = (19));

} else {
var statearr_54483_54547 = state_54414__$1;
(statearr_54483_54547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (38))){
var inst_54393 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
var statearr_54484_54548 = state_54414__$1;
(statearr_54484_54548[(2)] = inst_54393);

(statearr_54484_54548[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (30))){
var state_54414__$1 = state_54414;
var statearr_54485_54549 = state_54414__$1;
(statearr_54485_54549[(2)] = null);

(statearr_54485_54549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (10))){
var inst_54294 = (state_54414[(13)]);
var inst_54292 = (state_54414[(17)]);
var inst_54302 = cljs.core._nth.call(null,inst_54292,inst_54294);
var inst_54303 = cljs.core.nth.call(null,inst_54302,(0),null);
var inst_54304 = cljs.core.nth.call(null,inst_54302,(1),null);
var state_54414__$1 = (function (){var statearr_54486 = state_54414;
(statearr_54486[(26)] = inst_54303);

return statearr_54486;
})();
if(cljs.core.truth_(inst_54304)){
var statearr_54487_54550 = state_54414__$1;
(statearr_54487_54550[(1)] = (13));

} else {
var statearr_54488_54551 = state_54414__$1;
(statearr_54488_54551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (18))){
var inst_54339 = (state_54414[(2)]);
var state_54414__$1 = state_54414;
var statearr_54489_54552 = state_54414__$1;
(statearr_54489_54552[(2)] = inst_54339);

(statearr_54489_54552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (42))){
var state_54414__$1 = state_54414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54414__$1,(45),dchan);
} else {
if((state_val_54415 === (37))){
var inst_54373 = (state_54414[(25)]);
var inst_54282 = (state_54414[(12)]);
var inst_54382 = (state_54414[(23)]);
var inst_54382__$1 = cljs.core.first.call(null,inst_54373);
var inst_54383 = cljs.core.async.put_BANG_.call(null,inst_54382__$1,inst_54282,done);
var state_54414__$1 = (function (){var statearr_54490 = state_54414;
(statearr_54490[(23)] = inst_54382__$1);

return statearr_54490;
})();
if(cljs.core.truth_(inst_54383)){
var statearr_54491_54553 = state_54414__$1;
(statearr_54491_54553[(1)] = (39));

} else {
var statearr_54492_54554 = state_54414__$1;
(statearr_54492_54554[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54415 === (8))){
var inst_54294 = (state_54414[(13)]);
var inst_54293 = (state_54414[(16)]);
var inst_54296 = (inst_54294 < inst_54293);
var inst_54297 = inst_54296;
var state_54414__$1 = state_54414;
if(cljs.core.truth_(inst_54297)){
var statearr_54493_54555 = state_54414__$1;
(statearr_54493_54555[(1)] = (10));

} else {
var statearr_54494_54556 = state_54414__$1;
(statearr_54494_54556[(1)] = (11));

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
});})(c__53134__auto___54502,cs,m,dchan,dctr,done))
;
return ((function (switch__53020__auto__,c__53134__auto___54502,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__53021__auto__ = null;
var cljs$core$async$mult_$_state_machine__53021__auto____0 = (function (){
var statearr_54498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54498[(0)] = cljs$core$async$mult_$_state_machine__53021__auto__);

(statearr_54498[(1)] = (1));

return statearr_54498;
});
var cljs$core$async$mult_$_state_machine__53021__auto____1 = (function (state_54414){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_54414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e54499){if((e54499 instanceof Object)){
var ex__53024__auto__ = e54499;
var statearr_54500_54557 = state_54414;
(statearr_54500_54557[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54558 = state_54414;
state_54414 = G__54558;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__53021__auto__ = function(state_54414){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__53021__auto____1.call(this,state_54414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__53021__auto____0;
cljs$core$async$mult_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__53021__auto____1;
return cljs$core$async$mult_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___54502,cs,m,dchan,dctr,done))
})();
var state__53136__auto__ = (function (){var statearr_54501 = f__53135__auto__.call(null);
(statearr_54501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___54502);

return statearr_54501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___54502,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args54559 = [];
var len__46645__auto___54562 = arguments.length;
var i__46646__auto___54563 = (0);
while(true){
if((i__46646__auto___54563 < len__46645__auto___54562)){
args54559.push((arguments[i__46646__auto___54563]));

var G__54564 = (i__46646__auto___54563 + (1));
i__46646__auto___54563 = G__54564;
continue;
} else {
}
break;
}

var G__54561 = args54559.length;
switch (G__54561) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54559.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__46142__auto__ = (((m == null))?null:m);
var m__46143__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,m,ch);
} else {
var m__46143__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__46142__auto__ = (((m == null))?null:m);
var m__46143__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,m,ch);
} else {
var m__46143__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__46142__auto__ = (((m == null))?null:m);
var m__46143__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,m);
} else {
var m__46143__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__46142__auto__ = (((m == null))?null:m);
var m__46143__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,m,state_map);
} else {
var m__46143__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__46142__auto__ = (((m == null))?null:m);
var m__46143__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,m,mode);
} else {
var m__46143__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__46652__auto__ = [];
var len__46645__auto___54576 = arguments.length;
var i__46646__auto___54577 = (0);
while(true){
if((i__46646__auto___54577 < len__46645__auto___54576)){
args__46652__auto__.push((arguments[i__46646__auto___54577]));

var G__54578 = (i__46646__auto___54577 + (1));
i__46646__auto___54577 = G__54578;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((3) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__46653__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54570){
var map__54571 = p__54570;
var map__54571__$1 = ((((!((map__54571 == null)))?((((map__54571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54571):map__54571);
var opts = map__54571__$1;
var statearr_54573_54579 = state;
(statearr_54573_54579[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__54571,map__54571__$1,opts){
return (function (val){
var statearr_54574_54580 = state;
(statearr_54574_54580[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__54571,map__54571__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_54575_54581 = state;
(statearr_54575_54581[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54566){
var G__54567 = cljs.core.first.call(null,seq54566);
var seq54566__$1 = cljs.core.next.call(null,seq54566);
var G__54568 = cljs.core.first.call(null,seq54566__$1);
var seq54566__$2 = cljs.core.next.call(null,seq54566__$1);
var G__54569 = cljs.core.first.call(null,seq54566__$2);
var seq54566__$3 = cljs.core.next.call(null,seq54566__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54567,G__54568,G__54569,seq54566__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async54749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54749 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta54750){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta54750 = meta54750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54751,meta54750__$1){
var self__ = this;
var _54751__$1 = this;
return (new cljs.core.async.t_cljs$core$async54749(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta54750__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_54751){
var self__ = this;
var _54751__$1 = this;
return self__.meta54750;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54749.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54749.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta54750","meta54750",-979292681,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async54749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54749";

cljs.core.async.t_cljs$core$async54749.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async54749");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async54749 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async54749(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta54750){
return (new cljs.core.async.t_cljs$core$async54749(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta54750));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async54749(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53134__auto___54916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___54916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___54916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_54853){
var state_val_54854 = (state_54853[(1)]);
if((state_val_54854 === (7))){
var inst_54768 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
var statearr_54855_54917 = state_54853__$1;
(statearr_54855_54917[(2)] = inst_54768);

(statearr_54855_54917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (20))){
var inst_54780 = (state_54853[(7)]);
var state_54853__$1 = state_54853;
var statearr_54856_54918 = state_54853__$1;
(statearr_54856_54918[(2)] = inst_54780);

(statearr_54856_54918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (27))){
var state_54853__$1 = state_54853;
var statearr_54857_54919 = state_54853__$1;
(statearr_54857_54919[(2)] = null);

(statearr_54857_54919[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (1))){
var inst_54755 = (state_54853[(8)]);
var inst_54755__$1 = calc_state.call(null);
var inst_54757 = (inst_54755__$1 == null);
var inst_54758 = cljs.core.not.call(null,inst_54757);
var state_54853__$1 = (function (){var statearr_54858 = state_54853;
(statearr_54858[(8)] = inst_54755__$1);

return statearr_54858;
})();
if(inst_54758){
var statearr_54859_54920 = state_54853__$1;
(statearr_54859_54920[(1)] = (2));

} else {
var statearr_54860_54921 = state_54853__$1;
(statearr_54860_54921[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (24))){
var inst_54813 = (state_54853[(9)]);
var inst_54804 = (state_54853[(10)]);
var inst_54827 = (state_54853[(11)]);
var inst_54827__$1 = inst_54804.call(null,inst_54813);
var state_54853__$1 = (function (){var statearr_54861 = state_54853;
(statearr_54861[(11)] = inst_54827__$1);

return statearr_54861;
})();
if(cljs.core.truth_(inst_54827__$1)){
var statearr_54862_54922 = state_54853__$1;
(statearr_54862_54922[(1)] = (29));

} else {
var statearr_54863_54923 = state_54853__$1;
(statearr_54863_54923[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (4))){
var inst_54771 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
if(cljs.core.truth_(inst_54771)){
var statearr_54864_54924 = state_54853__$1;
(statearr_54864_54924[(1)] = (8));

} else {
var statearr_54865_54925 = state_54853__$1;
(statearr_54865_54925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (15))){
var inst_54798 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
if(cljs.core.truth_(inst_54798)){
var statearr_54866_54926 = state_54853__$1;
(statearr_54866_54926[(1)] = (19));

} else {
var statearr_54867_54927 = state_54853__$1;
(statearr_54867_54927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (21))){
var inst_54803 = (state_54853[(12)]);
var inst_54803__$1 = (state_54853[(2)]);
var inst_54804 = cljs.core.get.call(null,inst_54803__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54805 = cljs.core.get.call(null,inst_54803__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54806 = cljs.core.get.call(null,inst_54803__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_54853__$1 = (function (){var statearr_54868 = state_54853;
(statearr_54868[(12)] = inst_54803__$1);

(statearr_54868[(10)] = inst_54804);

(statearr_54868[(13)] = inst_54805);

return statearr_54868;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_54853__$1,(22),inst_54806);
} else {
if((state_val_54854 === (31))){
var inst_54835 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
if(cljs.core.truth_(inst_54835)){
var statearr_54869_54928 = state_54853__$1;
(statearr_54869_54928[(1)] = (32));

} else {
var statearr_54870_54929 = state_54853__$1;
(statearr_54870_54929[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (32))){
var inst_54812 = (state_54853[(14)]);
var state_54853__$1 = state_54853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54853__$1,(35),out,inst_54812);
} else {
if((state_val_54854 === (33))){
var inst_54803 = (state_54853[(12)]);
var inst_54780 = inst_54803;
var state_54853__$1 = (function (){var statearr_54871 = state_54853;
(statearr_54871[(7)] = inst_54780);

return statearr_54871;
})();
var statearr_54872_54930 = state_54853__$1;
(statearr_54872_54930[(2)] = null);

(statearr_54872_54930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (13))){
var inst_54780 = (state_54853[(7)]);
var inst_54787 = inst_54780.cljs$lang$protocol_mask$partition0$;
var inst_54788 = (inst_54787 & (64));
var inst_54789 = inst_54780.cljs$core$ISeq$;
var inst_54790 = (cljs.core.PROTOCOL_SENTINEL === inst_54789);
var inst_54791 = (inst_54788) || (inst_54790);
var state_54853__$1 = state_54853;
if(cljs.core.truth_(inst_54791)){
var statearr_54873_54931 = state_54853__$1;
(statearr_54873_54931[(1)] = (16));

} else {
var statearr_54874_54932 = state_54853__$1;
(statearr_54874_54932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (22))){
var inst_54812 = (state_54853[(14)]);
var inst_54813 = (state_54853[(9)]);
var inst_54811 = (state_54853[(2)]);
var inst_54812__$1 = cljs.core.nth.call(null,inst_54811,(0),null);
var inst_54813__$1 = cljs.core.nth.call(null,inst_54811,(1),null);
var inst_54814 = (inst_54812__$1 == null);
var inst_54815 = cljs.core._EQ_.call(null,inst_54813__$1,change);
var inst_54816 = (inst_54814) || (inst_54815);
var state_54853__$1 = (function (){var statearr_54875 = state_54853;
(statearr_54875[(14)] = inst_54812__$1);

(statearr_54875[(9)] = inst_54813__$1);

return statearr_54875;
})();
if(cljs.core.truth_(inst_54816)){
var statearr_54876_54933 = state_54853__$1;
(statearr_54876_54933[(1)] = (23));

} else {
var statearr_54877_54934 = state_54853__$1;
(statearr_54877_54934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (36))){
var inst_54803 = (state_54853[(12)]);
var inst_54780 = inst_54803;
var state_54853__$1 = (function (){var statearr_54878 = state_54853;
(statearr_54878[(7)] = inst_54780);

return statearr_54878;
})();
var statearr_54879_54935 = state_54853__$1;
(statearr_54879_54935[(2)] = null);

(statearr_54879_54935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (29))){
var inst_54827 = (state_54853[(11)]);
var state_54853__$1 = state_54853;
var statearr_54880_54936 = state_54853__$1;
(statearr_54880_54936[(2)] = inst_54827);

(statearr_54880_54936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (6))){
var state_54853__$1 = state_54853;
var statearr_54881_54937 = state_54853__$1;
(statearr_54881_54937[(2)] = false);

(statearr_54881_54937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (28))){
var inst_54823 = (state_54853[(2)]);
var inst_54824 = calc_state.call(null);
var inst_54780 = inst_54824;
var state_54853__$1 = (function (){var statearr_54882 = state_54853;
(statearr_54882[(7)] = inst_54780);

(statearr_54882[(15)] = inst_54823);

return statearr_54882;
})();
var statearr_54883_54938 = state_54853__$1;
(statearr_54883_54938[(2)] = null);

(statearr_54883_54938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (25))){
var inst_54849 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
var statearr_54884_54939 = state_54853__$1;
(statearr_54884_54939[(2)] = inst_54849);

(statearr_54884_54939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (34))){
var inst_54847 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
var statearr_54885_54940 = state_54853__$1;
(statearr_54885_54940[(2)] = inst_54847);

(statearr_54885_54940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (17))){
var state_54853__$1 = state_54853;
var statearr_54886_54941 = state_54853__$1;
(statearr_54886_54941[(2)] = false);

(statearr_54886_54941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (3))){
var state_54853__$1 = state_54853;
var statearr_54887_54942 = state_54853__$1;
(statearr_54887_54942[(2)] = false);

(statearr_54887_54942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (12))){
var inst_54851 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54853__$1,inst_54851);
} else {
if((state_val_54854 === (2))){
var inst_54755 = (state_54853[(8)]);
var inst_54760 = inst_54755.cljs$lang$protocol_mask$partition0$;
var inst_54761 = (inst_54760 & (64));
var inst_54762 = inst_54755.cljs$core$ISeq$;
var inst_54763 = (cljs.core.PROTOCOL_SENTINEL === inst_54762);
var inst_54764 = (inst_54761) || (inst_54763);
var state_54853__$1 = state_54853;
if(cljs.core.truth_(inst_54764)){
var statearr_54888_54943 = state_54853__$1;
(statearr_54888_54943[(1)] = (5));

} else {
var statearr_54889_54944 = state_54853__$1;
(statearr_54889_54944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (23))){
var inst_54812 = (state_54853[(14)]);
var inst_54818 = (inst_54812 == null);
var state_54853__$1 = state_54853;
if(cljs.core.truth_(inst_54818)){
var statearr_54890_54945 = state_54853__$1;
(statearr_54890_54945[(1)] = (26));

} else {
var statearr_54891_54946 = state_54853__$1;
(statearr_54891_54946[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (35))){
var inst_54838 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
if(cljs.core.truth_(inst_54838)){
var statearr_54892_54947 = state_54853__$1;
(statearr_54892_54947[(1)] = (36));

} else {
var statearr_54893_54948 = state_54853__$1;
(statearr_54893_54948[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (19))){
var inst_54780 = (state_54853[(7)]);
var inst_54800 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54780);
var state_54853__$1 = state_54853;
var statearr_54894_54949 = state_54853__$1;
(statearr_54894_54949[(2)] = inst_54800);

(statearr_54894_54949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (11))){
var inst_54780 = (state_54853[(7)]);
var inst_54784 = (inst_54780 == null);
var inst_54785 = cljs.core.not.call(null,inst_54784);
var state_54853__$1 = state_54853;
if(inst_54785){
var statearr_54895_54950 = state_54853__$1;
(statearr_54895_54950[(1)] = (13));

} else {
var statearr_54896_54951 = state_54853__$1;
(statearr_54896_54951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (9))){
var inst_54755 = (state_54853[(8)]);
var state_54853__$1 = state_54853;
var statearr_54897_54952 = state_54853__$1;
(statearr_54897_54952[(2)] = inst_54755);

(statearr_54897_54952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (5))){
var state_54853__$1 = state_54853;
var statearr_54898_54953 = state_54853__$1;
(statearr_54898_54953[(2)] = true);

(statearr_54898_54953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (14))){
var state_54853__$1 = state_54853;
var statearr_54899_54954 = state_54853__$1;
(statearr_54899_54954[(2)] = false);

(statearr_54899_54954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (26))){
var inst_54813 = (state_54853[(9)]);
var inst_54820 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_54813);
var state_54853__$1 = state_54853;
var statearr_54900_54955 = state_54853__$1;
(statearr_54900_54955[(2)] = inst_54820);

(statearr_54900_54955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (16))){
var state_54853__$1 = state_54853;
var statearr_54901_54956 = state_54853__$1;
(statearr_54901_54956[(2)] = true);

(statearr_54901_54956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (38))){
var inst_54843 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
var statearr_54902_54957 = state_54853__$1;
(statearr_54902_54957[(2)] = inst_54843);

(statearr_54902_54957[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (30))){
var inst_54813 = (state_54853[(9)]);
var inst_54804 = (state_54853[(10)]);
var inst_54805 = (state_54853[(13)]);
var inst_54830 = cljs.core.empty_QMARK_.call(null,inst_54804);
var inst_54831 = inst_54805.call(null,inst_54813);
var inst_54832 = cljs.core.not.call(null,inst_54831);
var inst_54833 = (inst_54830) && (inst_54832);
var state_54853__$1 = state_54853;
var statearr_54903_54958 = state_54853__$1;
(statearr_54903_54958[(2)] = inst_54833);

(statearr_54903_54958[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (10))){
var inst_54755 = (state_54853[(8)]);
var inst_54776 = (state_54853[(2)]);
var inst_54777 = cljs.core.get.call(null,inst_54776,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54778 = cljs.core.get.call(null,inst_54776,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54779 = cljs.core.get.call(null,inst_54776,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_54780 = inst_54755;
var state_54853__$1 = (function (){var statearr_54904 = state_54853;
(statearr_54904[(7)] = inst_54780);

(statearr_54904[(16)] = inst_54778);

(statearr_54904[(17)] = inst_54779);

(statearr_54904[(18)] = inst_54777);

return statearr_54904;
})();
var statearr_54905_54959 = state_54853__$1;
(statearr_54905_54959[(2)] = null);

(statearr_54905_54959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (18))){
var inst_54795 = (state_54853[(2)]);
var state_54853__$1 = state_54853;
var statearr_54906_54960 = state_54853__$1;
(statearr_54906_54960[(2)] = inst_54795);

(statearr_54906_54960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (37))){
var state_54853__$1 = state_54853;
var statearr_54907_54961 = state_54853__$1;
(statearr_54907_54961[(2)] = null);

(statearr_54907_54961[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54854 === (8))){
var inst_54755 = (state_54853[(8)]);
var inst_54773 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54755);
var state_54853__$1 = state_54853;
var statearr_54908_54962 = state_54853__$1;
(statearr_54908_54962[(2)] = inst_54773);

(statearr_54908_54962[(1)] = (10));


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
});})(c__53134__auto___54916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__53020__auto__,c__53134__auto___54916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__53021__auto__ = null;
var cljs$core$async$mix_$_state_machine__53021__auto____0 = (function (){
var statearr_54912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54912[(0)] = cljs$core$async$mix_$_state_machine__53021__auto__);

(statearr_54912[(1)] = (1));

return statearr_54912;
});
var cljs$core$async$mix_$_state_machine__53021__auto____1 = (function (state_54853){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_54853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e54913){if((e54913 instanceof Object)){
var ex__53024__auto__ = e54913;
var statearr_54914_54963 = state_54853;
(statearr_54914_54963[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54964 = state_54853;
state_54853 = G__54964;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__53021__auto__ = function(state_54853){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__53021__auto____1.call(this,state_54853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__53021__auto____0;
cljs$core$async$mix_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__53021__auto____1;
return cljs$core$async$mix_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___54916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__53136__auto__ = (function (){var statearr_54915 = f__53135__auto__.call(null);
(statearr_54915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___54916);

return statearr_54915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___54916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__46142__auto__ = (((p == null))?null:p);
var m__46143__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__46143__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__46142__auto__ = (((p == null))?null:p);
var m__46143__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,p,v,ch);
} else {
var m__46143__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args54965 = [];
var len__46645__auto___54968 = arguments.length;
var i__46646__auto___54969 = (0);
while(true){
if((i__46646__auto___54969 < len__46645__auto___54968)){
args54965.push((arguments[i__46646__auto___54969]));

var G__54970 = (i__46646__auto___54969 + (1));
i__46646__auto___54969 = G__54970;
continue;
} else {
}
break;
}

var G__54967 = args54965.length;
switch (G__54967) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54965.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__46142__auto__ = (((p == null))?null:p);
var m__46143__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,p);
} else {
var m__46143__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__46142__auto__ = (((p == null))?null:p);
var m__46143__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__46142__auto__)]);
if(!((m__46143__auto__ == null))){
return m__46143__auto__.call(null,p,v);
} else {
var m__46143__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__46143__auto____$1 == null))){
return m__46143__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args54973 = [];
var len__46645__auto___55098 = arguments.length;
var i__46646__auto___55099 = (0);
while(true){
if((i__46646__auto___55099 < len__46645__auto___55098)){
args54973.push((arguments[i__46646__auto___55099]));

var G__55100 = (i__46646__auto___55099 + (1));
i__46646__auto___55099 = G__55100;
continue;
} else {
}
break;
}

var G__54975 = args54973.length;
switch (G__54975) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54973.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__45424__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__45424__auto__,mults){
return (function (p1__54972_SHARP_){
if(cljs.core.truth_(p1__54972_SHARP_.call(null,topic))){
return p1__54972_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__54972_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__45424__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async54976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54976 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta54977){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta54977 = meta54977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_54978,meta54977__$1){
var self__ = this;
var _54978__$1 = this;
return (new cljs.core.async.t_cljs$core$async54976(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta54977__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_54978){
var self__ = this;
var _54978__$1 = this;
return self__.meta54977;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54976.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async54976.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54976.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54976.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta54977","meta54977",-1270368646,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54976";

cljs.core.async.t_cljs$core$async54976.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async54976");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async54976 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async54976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54977){
return (new cljs.core.async.t_cljs$core$async54976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54977));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async54976(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53134__auto___55102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___55102,mults,ensure_mult,p){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___55102,mults,ensure_mult,p){
return (function (state_55050){
var state_val_55051 = (state_55050[(1)]);
if((state_val_55051 === (7))){
var inst_55046 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
var statearr_55052_55103 = state_55050__$1;
(statearr_55052_55103[(2)] = inst_55046);

(statearr_55052_55103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (20))){
var state_55050__$1 = state_55050;
var statearr_55053_55104 = state_55050__$1;
(statearr_55053_55104[(2)] = null);

(statearr_55053_55104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (1))){
var state_55050__$1 = state_55050;
var statearr_55054_55105 = state_55050__$1;
(statearr_55054_55105[(2)] = null);

(statearr_55054_55105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (24))){
var inst_55029 = (state_55050[(7)]);
var inst_55038 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_55029);
var state_55050__$1 = state_55050;
var statearr_55055_55106 = state_55050__$1;
(statearr_55055_55106[(2)] = inst_55038);

(statearr_55055_55106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (4))){
var inst_54981 = (state_55050[(8)]);
var inst_54981__$1 = (state_55050[(2)]);
var inst_54982 = (inst_54981__$1 == null);
var state_55050__$1 = (function (){var statearr_55056 = state_55050;
(statearr_55056[(8)] = inst_54981__$1);

return statearr_55056;
})();
if(cljs.core.truth_(inst_54982)){
var statearr_55057_55107 = state_55050__$1;
(statearr_55057_55107[(1)] = (5));

} else {
var statearr_55058_55108 = state_55050__$1;
(statearr_55058_55108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (15))){
var inst_55023 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
var statearr_55059_55109 = state_55050__$1;
(statearr_55059_55109[(2)] = inst_55023);

(statearr_55059_55109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (21))){
var inst_55043 = (state_55050[(2)]);
var state_55050__$1 = (function (){var statearr_55060 = state_55050;
(statearr_55060[(9)] = inst_55043);

return statearr_55060;
})();
var statearr_55061_55110 = state_55050__$1;
(statearr_55061_55110[(2)] = null);

(statearr_55061_55110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (13))){
var inst_55005 = (state_55050[(10)]);
var inst_55007 = cljs.core.chunked_seq_QMARK_.call(null,inst_55005);
var state_55050__$1 = state_55050;
if(inst_55007){
var statearr_55062_55111 = state_55050__$1;
(statearr_55062_55111[(1)] = (16));

} else {
var statearr_55063_55112 = state_55050__$1;
(statearr_55063_55112[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (22))){
var inst_55035 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
if(cljs.core.truth_(inst_55035)){
var statearr_55064_55113 = state_55050__$1;
(statearr_55064_55113[(1)] = (23));

} else {
var statearr_55065_55114 = state_55050__$1;
(statearr_55065_55114[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (6))){
var inst_55029 = (state_55050[(7)]);
var inst_54981 = (state_55050[(8)]);
var inst_55031 = (state_55050[(11)]);
var inst_55029__$1 = topic_fn.call(null,inst_54981);
var inst_55030 = cljs.core.deref.call(null,mults);
var inst_55031__$1 = cljs.core.get.call(null,inst_55030,inst_55029__$1);
var state_55050__$1 = (function (){var statearr_55066 = state_55050;
(statearr_55066[(7)] = inst_55029__$1);

(statearr_55066[(11)] = inst_55031__$1);

return statearr_55066;
})();
if(cljs.core.truth_(inst_55031__$1)){
var statearr_55067_55115 = state_55050__$1;
(statearr_55067_55115[(1)] = (19));

} else {
var statearr_55068_55116 = state_55050__$1;
(statearr_55068_55116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (25))){
var inst_55040 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
var statearr_55069_55117 = state_55050__$1;
(statearr_55069_55117[(2)] = inst_55040);

(statearr_55069_55117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (17))){
var inst_55005 = (state_55050[(10)]);
var inst_55014 = cljs.core.first.call(null,inst_55005);
var inst_55015 = cljs.core.async.muxch_STAR_.call(null,inst_55014);
var inst_55016 = cljs.core.async.close_BANG_.call(null,inst_55015);
var inst_55017 = cljs.core.next.call(null,inst_55005);
var inst_54991 = inst_55017;
var inst_54992 = null;
var inst_54993 = (0);
var inst_54994 = (0);
var state_55050__$1 = (function (){var statearr_55070 = state_55050;
(statearr_55070[(12)] = inst_54991);

(statearr_55070[(13)] = inst_54994);

(statearr_55070[(14)] = inst_55016);

(statearr_55070[(15)] = inst_54993);

(statearr_55070[(16)] = inst_54992);

return statearr_55070;
})();
var statearr_55071_55118 = state_55050__$1;
(statearr_55071_55118[(2)] = null);

(statearr_55071_55118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (3))){
var inst_55048 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55050__$1,inst_55048);
} else {
if((state_val_55051 === (12))){
var inst_55025 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
var statearr_55072_55119 = state_55050__$1;
(statearr_55072_55119[(2)] = inst_55025);

(statearr_55072_55119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (2))){
var state_55050__$1 = state_55050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55050__$1,(4),ch);
} else {
if((state_val_55051 === (23))){
var state_55050__$1 = state_55050;
var statearr_55073_55120 = state_55050__$1;
(statearr_55073_55120[(2)] = null);

(statearr_55073_55120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (19))){
var inst_54981 = (state_55050[(8)]);
var inst_55031 = (state_55050[(11)]);
var inst_55033 = cljs.core.async.muxch_STAR_.call(null,inst_55031);
var state_55050__$1 = state_55050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55050__$1,(22),inst_55033,inst_54981);
} else {
if((state_val_55051 === (11))){
var inst_54991 = (state_55050[(12)]);
var inst_55005 = (state_55050[(10)]);
var inst_55005__$1 = cljs.core.seq.call(null,inst_54991);
var state_55050__$1 = (function (){var statearr_55074 = state_55050;
(statearr_55074[(10)] = inst_55005__$1);

return statearr_55074;
})();
if(inst_55005__$1){
var statearr_55075_55121 = state_55050__$1;
(statearr_55075_55121[(1)] = (13));

} else {
var statearr_55076_55122 = state_55050__$1;
(statearr_55076_55122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (9))){
var inst_55027 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
var statearr_55077_55123 = state_55050__$1;
(statearr_55077_55123[(2)] = inst_55027);

(statearr_55077_55123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (5))){
var inst_54988 = cljs.core.deref.call(null,mults);
var inst_54989 = cljs.core.vals.call(null,inst_54988);
var inst_54990 = cljs.core.seq.call(null,inst_54989);
var inst_54991 = inst_54990;
var inst_54992 = null;
var inst_54993 = (0);
var inst_54994 = (0);
var state_55050__$1 = (function (){var statearr_55078 = state_55050;
(statearr_55078[(12)] = inst_54991);

(statearr_55078[(13)] = inst_54994);

(statearr_55078[(15)] = inst_54993);

(statearr_55078[(16)] = inst_54992);

return statearr_55078;
})();
var statearr_55079_55124 = state_55050__$1;
(statearr_55079_55124[(2)] = null);

(statearr_55079_55124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (14))){
var state_55050__$1 = state_55050;
var statearr_55083_55125 = state_55050__$1;
(statearr_55083_55125[(2)] = null);

(statearr_55083_55125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (16))){
var inst_55005 = (state_55050[(10)]);
var inst_55009 = cljs.core.chunk_first.call(null,inst_55005);
var inst_55010 = cljs.core.chunk_rest.call(null,inst_55005);
var inst_55011 = cljs.core.count.call(null,inst_55009);
var inst_54991 = inst_55010;
var inst_54992 = inst_55009;
var inst_54993 = inst_55011;
var inst_54994 = (0);
var state_55050__$1 = (function (){var statearr_55084 = state_55050;
(statearr_55084[(12)] = inst_54991);

(statearr_55084[(13)] = inst_54994);

(statearr_55084[(15)] = inst_54993);

(statearr_55084[(16)] = inst_54992);

return statearr_55084;
})();
var statearr_55085_55126 = state_55050__$1;
(statearr_55085_55126[(2)] = null);

(statearr_55085_55126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (10))){
var inst_54991 = (state_55050[(12)]);
var inst_54994 = (state_55050[(13)]);
var inst_54993 = (state_55050[(15)]);
var inst_54992 = (state_55050[(16)]);
var inst_54999 = cljs.core._nth.call(null,inst_54992,inst_54994);
var inst_55000 = cljs.core.async.muxch_STAR_.call(null,inst_54999);
var inst_55001 = cljs.core.async.close_BANG_.call(null,inst_55000);
var inst_55002 = (inst_54994 + (1));
var tmp55080 = inst_54991;
var tmp55081 = inst_54993;
var tmp55082 = inst_54992;
var inst_54991__$1 = tmp55080;
var inst_54992__$1 = tmp55082;
var inst_54993__$1 = tmp55081;
var inst_54994__$1 = inst_55002;
var state_55050__$1 = (function (){var statearr_55086 = state_55050;
(statearr_55086[(12)] = inst_54991__$1);

(statearr_55086[(13)] = inst_54994__$1);

(statearr_55086[(15)] = inst_54993__$1);

(statearr_55086[(16)] = inst_54992__$1);

(statearr_55086[(17)] = inst_55001);

return statearr_55086;
})();
var statearr_55087_55127 = state_55050__$1;
(statearr_55087_55127[(2)] = null);

(statearr_55087_55127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (18))){
var inst_55020 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
var statearr_55088_55128 = state_55050__$1;
(statearr_55088_55128[(2)] = inst_55020);

(statearr_55088_55128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55051 === (8))){
var inst_54994 = (state_55050[(13)]);
var inst_54993 = (state_55050[(15)]);
var inst_54996 = (inst_54994 < inst_54993);
var inst_54997 = inst_54996;
var state_55050__$1 = state_55050;
if(cljs.core.truth_(inst_54997)){
var statearr_55089_55129 = state_55050__$1;
(statearr_55089_55129[(1)] = (10));

} else {
var statearr_55090_55130 = state_55050__$1;
(statearr_55090_55130[(1)] = (11));

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
});})(c__53134__auto___55102,mults,ensure_mult,p))
;
return ((function (switch__53020__auto__,c__53134__auto___55102,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_55094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55094[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_55094[(1)] = (1));

return statearr_55094;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_55050){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_55050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e55095){if((e55095 instanceof Object)){
var ex__53024__auto__ = e55095;
var statearr_55096_55131 = state_55050;
(statearr_55096_55131[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55132 = state_55050;
state_55050 = G__55132;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_55050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_55050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___55102,mults,ensure_mult,p))
})();
var state__53136__auto__ = (function (){var statearr_55097 = f__53135__auto__.call(null);
(statearr_55097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___55102);

return statearr_55097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___55102,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args55133 = [];
var len__46645__auto___55136 = arguments.length;
var i__46646__auto___55137 = (0);
while(true){
if((i__46646__auto___55137 < len__46645__auto___55136)){
args55133.push((arguments[i__46646__auto___55137]));

var G__55138 = (i__46646__auto___55137 + (1));
i__46646__auto___55137 = G__55138;
continue;
} else {
}
break;
}

var G__55135 = args55133.length;
switch (G__55135) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55133.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args55140 = [];
var len__46645__auto___55143 = arguments.length;
var i__46646__auto___55144 = (0);
while(true){
if((i__46646__auto___55144 < len__46645__auto___55143)){
args55140.push((arguments[i__46646__auto___55144]));

var G__55145 = (i__46646__auto___55144 + (1));
i__46646__auto___55144 = G__55145;
continue;
} else {
}
break;
}

var G__55142 = args55140.length;
switch (G__55142) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55140.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args55147 = [];
var len__46645__auto___55218 = arguments.length;
var i__46646__auto___55219 = (0);
while(true){
if((i__46646__auto___55219 < len__46645__auto___55218)){
args55147.push((arguments[i__46646__auto___55219]));

var G__55220 = (i__46646__auto___55219 + (1));
i__46646__auto___55219 = G__55220;
continue;
} else {
}
break;
}

var G__55149 = args55147.length;
switch (G__55149) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55147.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__53134__auto___55222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___55222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___55222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_55188){
var state_val_55189 = (state_55188[(1)]);
if((state_val_55189 === (7))){
var state_55188__$1 = state_55188;
var statearr_55190_55223 = state_55188__$1;
(statearr_55190_55223[(2)] = null);

(statearr_55190_55223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (1))){
var state_55188__$1 = state_55188;
var statearr_55191_55224 = state_55188__$1;
(statearr_55191_55224[(2)] = null);

(statearr_55191_55224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (4))){
var inst_55152 = (state_55188[(7)]);
var inst_55154 = (inst_55152 < cnt);
var state_55188__$1 = state_55188;
if(cljs.core.truth_(inst_55154)){
var statearr_55192_55225 = state_55188__$1;
(statearr_55192_55225[(1)] = (6));

} else {
var statearr_55193_55226 = state_55188__$1;
(statearr_55193_55226[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (15))){
var inst_55184 = (state_55188[(2)]);
var state_55188__$1 = state_55188;
var statearr_55194_55227 = state_55188__$1;
(statearr_55194_55227[(2)] = inst_55184);

(statearr_55194_55227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (13))){
var inst_55177 = cljs.core.async.close_BANG_.call(null,out);
var state_55188__$1 = state_55188;
var statearr_55195_55228 = state_55188__$1;
(statearr_55195_55228[(2)] = inst_55177);

(statearr_55195_55228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (6))){
var state_55188__$1 = state_55188;
var statearr_55196_55229 = state_55188__$1;
(statearr_55196_55229[(2)] = null);

(statearr_55196_55229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (3))){
var inst_55186 = (state_55188[(2)]);
var state_55188__$1 = state_55188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55188__$1,inst_55186);
} else {
if((state_val_55189 === (12))){
var inst_55174 = (state_55188[(8)]);
var inst_55174__$1 = (state_55188[(2)]);
var inst_55175 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_55174__$1);
var state_55188__$1 = (function (){var statearr_55197 = state_55188;
(statearr_55197[(8)] = inst_55174__$1);

return statearr_55197;
})();
if(cljs.core.truth_(inst_55175)){
var statearr_55198_55230 = state_55188__$1;
(statearr_55198_55230[(1)] = (13));

} else {
var statearr_55199_55231 = state_55188__$1;
(statearr_55199_55231[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (2))){
var inst_55151 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_55152 = (0);
var state_55188__$1 = (function (){var statearr_55200 = state_55188;
(statearr_55200[(7)] = inst_55152);

(statearr_55200[(9)] = inst_55151);

return statearr_55200;
})();
var statearr_55201_55232 = state_55188__$1;
(statearr_55201_55232[(2)] = null);

(statearr_55201_55232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (11))){
var inst_55152 = (state_55188[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_55188,(10),Object,null,(9));
var inst_55161 = chs__$1.call(null,inst_55152);
var inst_55162 = done.call(null,inst_55152);
var inst_55163 = cljs.core.async.take_BANG_.call(null,inst_55161,inst_55162);
var state_55188__$1 = state_55188;
var statearr_55202_55233 = state_55188__$1;
(statearr_55202_55233[(2)] = inst_55163);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55188__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (9))){
var inst_55152 = (state_55188[(7)]);
var inst_55165 = (state_55188[(2)]);
var inst_55166 = (inst_55152 + (1));
var inst_55152__$1 = inst_55166;
var state_55188__$1 = (function (){var statearr_55203 = state_55188;
(statearr_55203[(7)] = inst_55152__$1);

(statearr_55203[(10)] = inst_55165);

return statearr_55203;
})();
var statearr_55204_55234 = state_55188__$1;
(statearr_55204_55234[(2)] = null);

(statearr_55204_55234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (5))){
var inst_55172 = (state_55188[(2)]);
var state_55188__$1 = (function (){var statearr_55205 = state_55188;
(statearr_55205[(11)] = inst_55172);

return statearr_55205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55188__$1,(12),dchan);
} else {
if((state_val_55189 === (14))){
var inst_55174 = (state_55188[(8)]);
var inst_55179 = cljs.core.apply.call(null,f,inst_55174);
var state_55188__$1 = state_55188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55188__$1,(16),out,inst_55179);
} else {
if((state_val_55189 === (16))){
var inst_55181 = (state_55188[(2)]);
var state_55188__$1 = (function (){var statearr_55206 = state_55188;
(statearr_55206[(12)] = inst_55181);

return statearr_55206;
})();
var statearr_55207_55235 = state_55188__$1;
(statearr_55207_55235[(2)] = null);

(statearr_55207_55235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (10))){
var inst_55156 = (state_55188[(2)]);
var inst_55157 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_55188__$1 = (function (){var statearr_55208 = state_55188;
(statearr_55208[(13)] = inst_55156);

return statearr_55208;
})();
var statearr_55209_55236 = state_55188__$1;
(statearr_55209_55236[(2)] = inst_55157);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55188__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (8))){
var inst_55170 = (state_55188[(2)]);
var state_55188__$1 = state_55188;
var statearr_55210_55237 = state_55188__$1;
(statearr_55210_55237[(2)] = inst_55170);

(statearr_55210_55237[(1)] = (5));


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
});})(c__53134__auto___55222,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__53020__auto__,c__53134__auto___55222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_55214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55214[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_55214[(1)] = (1));

return statearr_55214;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_55188){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_55188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e55215){if((e55215 instanceof Object)){
var ex__53024__auto__ = e55215;
var statearr_55216_55238 = state_55188;
(statearr_55216_55238[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55239 = state_55188;
state_55188 = G__55239;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_55188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_55188);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___55222,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__53136__auto__ = (function (){var statearr_55217 = f__53135__auto__.call(null);
(statearr_55217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___55222);

return statearr_55217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___55222,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args55241 = [];
var len__46645__auto___55299 = arguments.length;
var i__46646__auto___55300 = (0);
while(true){
if((i__46646__auto___55300 < len__46645__auto___55299)){
args55241.push((arguments[i__46646__auto___55300]));

var G__55301 = (i__46646__auto___55300 + (1));
i__46646__auto___55300 = G__55301;
continue;
} else {
}
break;
}

var G__55243 = args55241.length;
switch (G__55243) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55241.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53134__auto___55303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___55303,out){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___55303,out){
return (function (state_55275){
var state_val_55276 = (state_55275[(1)]);
if((state_val_55276 === (7))){
var inst_55254 = (state_55275[(7)]);
var inst_55255 = (state_55275[(8)]);
var inst_55254__$1 = (state_55275[(2)]);
var inst_55255__$1 = cljs.core.nth.call(null,inst_55254__$1,(0),null);
var inst_55256 = cljs.core.nth.call(null,inst_55254__$1,(1),null);
var inst_55257 = (inst_55255__$1 == null);
var state_55275__$1 = (function (){var statearr_55277 = state_55275;
(statearr_55277[(9)] = inst_55256);

(statearr_55277[(7)] = inst_55254__$1);

(statearr_55277[(8)] = inst_55255__$1);

return statearr_55277;
})();
if(cljs.core.truth_(inst_55257)){
var statearr_55278_55304 = state_55275__$1;
(statearr_55278_55304[(1)] = (8));

} else {
var statearr_55279_55305 = state_55275__$1;
(statearr_55279_55305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55276 === (1))){
var inst_55244 = cljs.core.vec.call(null,chs);
var inst_55245 = inst_55244;
var state_55275__$1 = (function (){var statearr_55280 = state_55275;
(statearr_55280[(10)] = inst_55245);

return statearr_55280;
})();
var statearr_55281_55306 = state_55275__$1;
(statearr_55281_55306[(2)] = null);

(statearr_55281_55306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55276 === (4))){
var inst_55245 = (state_55275[(10)]);
var state_55275__$1 = state_55275;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55275__$1,(7),inst_55245);
} else {
if((state_val_55276 === (6))){
var inst_55271 = (state_55275[(2)]);
var state_55275__$1 = state_55275;
var statearr_55282_55307 = state_55275__$1;
(statearr_55282_55307[(2)] = inst_55271);

(statearr_55282_55307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55276 === (3))){
var inst_55273 = (state_55275[(2)]);
var state_55275__$1 = state_55275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55275__$1,inst_55273);
} else {
if((state_val_55276 === (2))){
var inst_55245 = (state_55275[(10)]);
var inst_55247 = cljs.core.count.call(null,inst_55245);
var inst_55248 = (inst_55247 > (0));
var state_55275__$1 = state_55275;
if(cljs.core.truth_(inst_55248)){
var statearr_55284_55308 = state_55275__$1;
(statearr_55284_55308[(1)] = (4));

} else {
var statearr_55285_55309 = state_55275__$1;
(statearr_55285_55309[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55276 === (11))){
var inst_55245 = (state_55275[(10)]);
var inst_55264 = (state_55275[(2)]);
var tmp55283 = inst_55245;
var inst_55245__$1 = tmp55283;
var state_55275__$1 = (function (){var statearr_55286 = state_55275;
(statearr_55286[(10)] = inst_55245__$1);

(statearr_55286[(11)] = inst_55264);

return statearr_55286;
})();
var statearr_55287_55310 = state_55275__$1;
(statearr_55287_55310[(2)] = null);

(statearr_55287_55310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55276 === (9))){
var inst_55255 = (state_55275[(8)]);
var state_55275__$1 = state_55275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55275__$1,(11),out,inst_55255);
} else {
if((state_val_55276 === (5))){
var inst_55269 = cljs.core.async.close_BANG_.call(null,out);
var state_55275__$1 = state_55275;
var statearr_55288_55311 = state_55275__$1;
(statearr_55288_55311[(2)] = inst_55269);

(statearr_55288_55311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55276 === (10))){
var inst_55267 = (state_55275[(2)]);
var state_55275__$1 = state_55275;
var statearr_55289_55312 = state_55275__$1;
(statearr_55289_55312[(2)] = inst_55267);

(statearr_55289_55312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55276 === (8))){
var inst_55256 = (state_55275[(9)]);
var inst_55254 = (state_55275[(7)]);
var inst_55245 = (state_55275[(10)]);
var inst_55255 = (state_55275[(8)]);
var inst_55259 = (function (){var cs = inst_55245;
var vec__55250 = inst_55254;
var v = inst_55255;
var c = inst_55256;
return ((function (cs,vec__55250,v,c,inst_55256,inst_55254,inst_55245,inst_55255,state_val_55276,c__53134__auto___55303,out){
return (function (p1__55240_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__55240_SHARP_);
});
;})(cs,vec__55250,v,c,inst_55256,inst_55254,inst_55245,inst_55255,state_val_55276,c__53134__auto___55303,out))
})();
var inst_55260 = cljs.core.filterv.call(null,inst_55259,inst_55245);
var inst_55245__$1 = inst_55260;
var state_55275__$1 = (function (){var statearr_55290 = state_55275;
(statearr_55290[(10)] = inst_55245__$1);

return statearr_55290;
})();
var statearr_55291_55313 = state_55275__$1;
(statearr_55291_55313[(2)] = null);

(statearr_55291_55313[(1)] = (2));


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
});})(c__53134__auto___55303,out))
;
return ((function (switch__53020__auto__,c__53134__auto___55303,out){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_55295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55295[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_55295[(1)] = (1));

return statearr_55295;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_55275){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_55275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e55296){if((e55296 instanceof Object)){
var ex__53024__auto__ = e55296;
var statearr_55297_55314 = state_55275;
(statearr_55297_55314[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55315 = state_55275;
state_55275 = G__55315;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_55275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_55275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___55303,out))
})();
var state__53136__auto__ = (function (){var statearr_55298 = f__53135__auto__.call(null);
(statearr_55298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___55303);

return statearr_55298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___55303,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args55316 = [];
var len__46645__auto___55365 = arguments.length;
var i__46646__auto___55366 = (0);
while(true){
if((i__46646__auto___55366 < len__46645__auto___55365)){
args55316.push((arguments[i__46646__auto___55366]));

var G__55367 = (i__46646__auto___55366 + (1));
i__46646__auto___55366 = G__55367;
continue;
} else {
}
break;
}

var G__55318 = args55316.length;
switch (G__55318) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55316.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53134__auto___55369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___55369,out){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___55369,out){
return (function (state_55342){
var state_val_55343 = (state_55342[(1)]);
if((state_val_55343 === (7))){
var inst_55324 = (state_55342[(7)]);
var inst_55324__$1 = (state_55342[(2)]);
var inst_55325 = (inst_55324__$1 == null);
var inst_55326 = cljs.core.not.call(null,inst_55325);
var state_55342__$1 = (function (){var statearr_55344 = state_55342;
(statearr_55344[(7)] = inst_55324__$1);

return statearr_55344;
})();
if(inst_55326){
var statearr_55345_55370 = state_55342__$1;
(statearr_55345_55370[(1)] = (8));

} else {
var statearr_55346_55371 = state_55342__$1;
(statearr_55346_55371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (1))){
var inst_55319 = (0);
var state_55342__$1 = (function (){var statearr_55347 = state_55342;
(statearr_55347[(8)] = inst_55319);

return statearr_55347;
})();
var statearr_55348_55372 = state_55342__$1;
(statearr_55348_55372[(2)] = null);

(statearr_55348_55372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (4))){
var state_55342__$1 = state_55342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55342__$1,(7),ch);
} else {
if((state_val_55343 === (6))){
var inst_55337 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55349_55373 = state_55342__$1;
(statearr_55349_55373[(2)] = inst_55337);

(statearr_55349_55373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (3))){
var inst_55339 = (state_55342[(2)]);
var inst_55340 = cljs.core.async.close_BANG_.call(null,out);
var state_55342__$1 = (function (){var statearr_55350 = state_55342;
(statearr_55350[(9)] = inst_55339);

return statearr_55350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55342__$1,inst_55340);
} else {
if((state_val_55343 === (2))){
var inst_55319 = (state_55342[(8)]);
var inst_55321 = (inst_55319 < n);
var state_55342__$1 = state_55342;
if(cljs.core.truth_(inst_55321)){
var statearr_55351_55374 = state_55342__$1;
(statearr_55351_55374[(1)] = (4));

} else {
var statearr_55352_55375 = state_55342__$1;
(statearr_55352_55375[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (11))){
var inst_55319 = (state_55342[(8)]);
var inst_55329 = (state_55342[(2)]);
var inst_55330 = (inst_55319 + (1));
var inst_55319__$1 = inst_55330;
var state_55342__$1 = (function (){var statearr_55353 = state_55342;
(statearr_55353[(8)] = inst_55319__$1);

(statearr_55353[(10)] = inst_55329);

return statearr_55353;
})();
var statearr_55354_55376 = state_55342__$1;
(statearr_55354_55376[(2)] = null);

(statearr_55354_55376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (9))){
var state_55342__$1 = state_55342;
var statearr_55355_55377 = state_55342__$1;
(statearr_55355_55377[(2)] = null);

(statearr_55355_55377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (5))){
var state_55342__$1 = state_55342;
var statearr_55356_55378 = state_55342__$1;
(statearr_55356_55378[(2)] = null);

(statearr_55356_55378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (10))){
var inst_55334 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55357_55379 = state_55342__$1;
(statearr_55357_55379[(2)] = inst_55334);

(statearr_55357_55379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (8))){
var inst_55324 = (state_55342[(7)]);
var state_55342__$1 = state_55342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55342__$1,(11),out,inst_55324);
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
});})(c__53134__auto___55369,out))
;
return ((function (switch__53020__auto__,c__53134__auto___55369,out){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_55361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55361[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_55361[(1)] = (1));

return statearr_55361;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_55342){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_55342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e55362){if((e55362 instanceof Object)){
var ex__53024__auto__ = e55362;
var statearr_55363_55380 = state_55342;
(statearr_55363_55380[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55381 = state_55342;
state_55342 = G__55381;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_55342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_55342);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___55369,out))
})();
var state__53136__auto__ = (function (){var statearr_55364 = f__53135__auto__.call(null);
(statearr_55364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___55369);

return statearr_55364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___55369,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55389 = (function (f,ch,meta55390){
this.f = f;
this.ch = ch;
this.meta55390 = meta55390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55391,meta55390__$1){
var self__ = this;
var _55391__$1 = this;
return (new cljs.core.async.t_cljs$core$async55389(self__.f,self__.ch,meta55390__$1));
});

cljs.core.async.t_cljs$core$async55389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55391){
var self__ = this;
var _55391__$1 = this;
return self__.meta55390;
});

cljs.core.async.t_cljs$core$async55389.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55389.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async55392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55392 = (function (f,ch,meta55390,_,fn1,meta55393){
this.f = f;
this.ch = ch;
this.meta55390 = meta55390;
this._ = _;
this.fn1 = fn1;
this.meta55393 = meta55393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_55394,meta55393__$1){
var self__ = this;
var _55394__$1 = this;
return (new cljs.core.async.t_cljs$core$async55392(self__.f,self__.ch,self__.meta55390,self__._,self__.fn1,meta55393__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async55392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_55394){
var self__ = this;
var _55394__$1 = this;
return self__.meta55393;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55392.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async55392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__55382_SHARP_){
return f1.call(null,(((p1__55382_SHARP_ == null))?null:self__.f.call(null,p1__55382_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async55392.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55390","meta55390",282886857,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55389","cljs.core.async/t_cljs$core$async55389",1664067593,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55393","meta55393",646101604,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async55392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55392";

cljs.core.async.t_cljs$core$async55392.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async55392");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async55392 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55392(f__$1,ch__$1,meta55390__$1,___$2,fn1__$1,meta55393){
return (new cljs.core.async.t_cljs$core$async55392(f__$1,ch__$1,meta55390__$1,___$2,fn1__$1,meta55393));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async55392(self__.f,self__.ch,self__.meta55390,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__45412__auto__ = ret;
if(cljs.core.truth_(and__45412__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__45412__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async55389.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async55389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55390","meta55390",282886857,null)], null);
});

cljs.core.async.t_cljs$core$async55389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55389";

cljs.core.async.t_cljs$core$async55389.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async55389");
});

cljs.core.async.__GT_t_cljs$core$async55389 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55389(f__$1,ch__$1,meta55390){
return (new cljs.core.async.t_cljs$core$async55389(f__$1,ch__$1,meta55390));
});

}

return (new cljs.core.async.t_cljs$core$async55389(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async55398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55398 = (function (f,ch,meta55399){
this.f = f;
this.ch = ch;
this.meta55399 = meta55399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55400,meta55399__$1){
var self__ = this;
var _55400__$1 = this;
return (new cljs.core.async.t_cljs$core$async55398(self__.f,self__.ch,meta55399__$1));
});

cljs.core.async.t_cljs$core$async55398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55400){
var self__ = this;
var _55400__$1 = this;
return self__.meta55399;
});

cljs.core.async.t_cljs$core$async55398.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55398.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55398.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async55398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55399","meta55399",1920639183,null)], null);
});

cljs.core.async.t_cljs$core$async55398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55398";

cljs.core.async.t_cljs$core$async55398.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async55398");
});

cljs.core.async.__GT_t_cljs$core$async55398 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55398(f__$1,ch__$1,meta55399){
return (new cljs.core.async.t_cljs$core$async55398(f__$1,ch__$1,meta55399));
});

}

return (new cljs.core.async.t_cljs$core$async55398(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async55404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55404 = (function (p,ch,meta55405){
this.p = p;
this.ch = ch;
this.meta55405 = meta55405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55406,meta55405__$1){
var self__ = this;
var _55406__$1 = this;
return (new cljs.core.async.t_cljs$core$async55404(self__.p,self__.ch,meta55405__$1));
});

cljs.core.async.t_cljs$core$async55404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55406){
var self__ = this;
var _55406__$1 = this;
return self__.meta55405;
});

cljs.core.async.t_cljs$core$async55404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async55404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async55404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async55404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async55404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55405","meta55405",191364859,null)], null);
});

cljs.core.async.t_cljs$core$async55404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55404";

cljs.core.async.t_cljs$core$async55404.cljs$lang$ctorPrWriter = (function (this__46081__auto__,writer__46082__auto__,opt__46083__auto__){
return cljs.core._write.call(null,writer__46082__auto__,"cljs.core.async/t_cljs$core$async55404");
});

cljs.core.async.__GT_t_cljs$core$async55404 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55404(p__$1,ch__$1,meta55405){
return (new cljs.core.async.t_cljs$core$async55404(p__$1,ch__$1,meta55405));
});

}

return (new cljs.core.async.t_cljs$core$async55404(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args55407 = [];
var len__46645__auto___55451 = arguments.length;
var i__46646__auto___55452 = (0);
while(true){
if((i__46646__auto___55452 < len__46645__auto___55451)){
args55407.push((arguments[i__46646__auto___55452]));

var G__55453 = (i__46646__auto___55452 + (1));
i__46646__auto___55452 = G__55453;
continue;
} else {
}
break;
}

var G__55409 = args55407.length;
switch (G__55409) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55407.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53134__auto___55455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___55455,out){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___55455,out){
return (function (state_55430){
var state_val_55431 = (state_55430[(1)]);
if((state_val_55431 === (7))){
var inst_55426 = (state_55430[(2)]);
var state_55430__$1 = state_55430;
var statearr_55432_55456 = state_55430__$1;
(statearr_55432_55456[(2)] = inst_55426);

(statearr_55432_55456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55431 === (1))){
var state_55430__$1 = state_55430;
var statearr_55433_55457 = state_55430__$1;
(statearr_55433_55457[(2)] = null);

(statearr_55433_55457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55431 === (4))){
var inst_55412 = (state_55430[(7)]);
var inst_55412__$1 = (state_55430[(2)]);
var inst_55413 = (inst_55412__$1 == null);
var state_55430__$1 = (function (){var statearr_55434 = state_55430;
(statearr_55434[(7)] = inst_55412__$1);

return statearr_55434;
})();
if(cljs.core.truth_(inst_55413)){
var statearr_55435_55458 = state_55430__$1;
(statearr_55435_55458[(1)] = (5));

} else {
var statearr_55436_55459 = state_55430__$1;
(statearr_55436_55459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55431 === (6))){
var inst_55412 = (state_55430[(7)]);
var inst_55417 = p.call(null,inst_55412);
var state_55430__$1 = state_55430;
if(cljs.core.truth_(inst_55417)){
var statearr_55437_55460 = state_55430__$1;
(statearr_55437_55460[(1)] = (8));

} else {
var statearr_55438_55461 = state_55430__$1;
(statearr_55438_55461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55431 === (3))){
var inst_55428 = (state_55430[(2)]);
var state_55430__$1 = state_55430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55430__$1,inst_55428);
} else {
if((state_val_55431 === (2))){
var state_55430__$1 = state_55430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55430__$1,(4),ch);
} else {
if((state_val_55431 === (11))){
var inst_55420 = (state_55430[(2)]);
var state_55430__$1 = state_55430;
var statearr_55439_55462 = state_55430__$1;
(statearr_55439_55462[(2)] = inst_55420);

(statearr_55439_55462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55431 === (9))){
var state_55430__$1 = state_55430;
var statearr_55440_55463 = state_55430__$1;
(statearr_55440_55463[(2)] = null);

(statearr_55440_55463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55431 === (5))){
var inst_55415 = cljs.core.async.close_BANG_.call(null,out);
var state_55430__$1 = state_55430;
var statearr_55441_55464 = state_55430__$1;
(statearr_55441_55464[(2)] = inst_55415);

(statearr_55441_55464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55431 === (10))){
var inst_55423 = (state_55430[(2)]);
var state_55430__$1 = (function (){var statearr_55442 = state_55430;
(statearr_55442[(8)] = inst_55423);

return statearr_55442;
})();
var statearr_55443_55465 = state_55430__$1;
(statearr_55443_55465[(2)] = null);

(statearr_55443_55465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55431 === (8))){
var inst_55412 = (state_55430[(7)]);
var state_55430__$1 = state_55430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55430__$1,(11),out,inst_55412);
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
});})(c__53134__auto___55455,out))
;
return ((function (switch__53020__auto__,c__53134__auto___55455,out){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_55447 = [null,null,null,null,null,null,null,null,null];
(statearr_55447[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_55447[(1)] = (1));

return statearr_55447;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_55430){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_55430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e55448){if((e55448 instanceof Object)){
var ex__53024__auto__ = e55448;
var statearr_55449_55466 = state_55430;
(statearr_55449_55466[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55467 = state_55430;
state_55430 = G__55467;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_55430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_55430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___55455,out))
})();
var state__53136__auto__ = (function (){var statearr_55450 = f__53135__auto__.call(null);
(statearr_55450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___55455);

return statearr_55450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___55455,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args55468 = [];
var len__46645__auto___55471 = arguments.length;
var i__46646__auto___55472 = (0);
while(true){
if((i__46646__auto___55472 < len__46645__auto___55471)){
args55468.push((arguments[i__46646__auto___55472]));

var G__55473 = (i__46646__auto___55472 + (1));
i__46646__auto___55472 = G__55473;
continue;
} else {
}
break;
}

var G__55470 = args55468.length;
switch (G__55470) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55468.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__){
return (function (state_55640){
var state_val_55641 = (state_55640[(1)]);
if((state_val_55641 === (7))){
var inst_55636 = (state_55640[(2)]);
var state_55640__$1 = state_55640;
var statearr_55642_55683 = state_55640__$1;
(statearr_55642_55683[(2)] = inst_55636);

(statearr_55642_55683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (20))){
var inst_55606 = (state_55640[(7)]);
var inst_55617 = (state_55640[(2)]);
var inst_55618 = cljs.core.next.call(null,inst_55606);
var inst_55592 = inst_55618;
var inst_55593 = null;
var inst_55594 = (0);
var inst_55595 = (0);
var state_55640__$1 = (function (){var statearr_55643 = state_55640;
(statearr_55643[(8)] = inst_55595);

(statearr_55643[(9)] = inst_55593);

(statearr_55643[(10)] = inst_55594);

(statearr_55643[(11)] = inst_55592);

(statearr_55643[(12)] = inst_55617);

return statearr_55643;
})();
var statearr_55644_55684 = state_55640__$1;
(statearr_55644_55684[(2)] = null);

(statearr_55644_55684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (1))){
var state_55640__$1 = state_55640;
var statearr_55645_55685 = state_55640__$1;
(statearr_55645_55685[(2)] = null);

(statearr_55645_55685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (4))){
var inst_55581 = (state_55640[(13)]);
var inst_55581__$1 = (state_55640[(2)]);
var inst_55582 = (inst_55581__$1 == null);
var state_55640__$1 = (function (){var statearr_55646 = state_55640;
(statearr_55646[(13)] = inst_55581__$1);

return statearr_55646;
})();
if(cljs.core.truth_(inst_55582)){
var statearr_55647_55686 = state_55640__$1;
(statearr_55647_55686[(1)] = (5));

} else {
var statearr_55648_55687 = state_55640__$1;
(statearr_55648_55687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (15))){
var state_55640__$1 = state_55640;
var statearr_55652_55688 = state_55640__$1;
(statearr_55652_55688[(2)] = null);

(statearr_55652_55688[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (21))){
var state_55640__$1 = state_55640;
var statearr_55653_55689 = state_55640__$1;
(statearr_55653_55689[(2)] = null);

(statearr_55653_55689[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (13))){
var inst_55595 = (state_55640[(8)]);
var inst_55593 = (state_55640[(9)]);
var inst_55594 = (state_55640[(10)]);
var inst_55592 = (state_55640[(11)]);
var inst_55602 = (state_55640[(2)]);
var inst_55603 = (inst_55595 + (1));
var tmp55649 = inst_55593;
var tmp55650 = inst_55594;
var tmp55651 = inst_55592;
var inst_55592__$1 = tmp55651;
var inst_55593__$1 = tmp55649;
var inst_55594__$1 = tmp55650;
var inst_55595__$1 = inst_55603;
var state_55640__$1 = (function (){var statearr_55654 = state_55640;
(statearr_55654[(14)] = inst_55602);

(statearr_55654[(8)] = inst_55595__$1);

(statearr_55654[(9)] = inst_55593__$1);

(statearr_55654[(10)] = inst_55594__$1);

(statearr_55654[(11)] = inst_55592__$1);

return statearr_55654;
})();
var statearr_55655_55690 = state_55640__$1;
(statearr_55655_55690[(2)] = null);

(statearr_55655_55690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (22))){
var state_55640__$1 = state_55640;
var statearr_55656_55691 = state_55640__$1;
(statearr_55656_55691[(2)] = null);

(statearr_55656_55691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (6))){
var inst_55581 = (state_55640[(13)]);
var inst_55590 = f.call(null,inst_55581);
var inst_55591 = cljs.core.seq.call(null,inst_55590);
var inst_55592 = inst_55591;
var inst_55593 = null;
var inst_55594 = (0);
var inst_55595 = (0);
var state_55640__$1 = (function (){var statearr_55657 = state_55640;
(statearr_55657[(8)] = inst_55595);

(statearr_55657[(9)] = inst_55593);

(statearr_55657[(10)] = inst_55594);

(statearr_55657[(11)] = inst_55592);

return statearr_55657;
})();
var statearr_55658_55692 = state_55640__$1;
(statearr_55658_55692[(2)] = null);

(statearr_55658_55692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (17))){
var inst_55606 = (state_55640[(7)]);
var inst_55610 = cljs.core.chunk_first.call(null,inst_55606);
var inst_55611 = cljs.core.chunk_rest.call(null,inst_55606);
var inst_55612 = cljs.core.count.call(null,inst_55610);
var inst_55592 = inst_55611;
var inst_55593 = inst_55610;
var inst_55594 = inst_55612;
var inst_55595 = (0);
var state_55640__$1 = (function (){var statearr_55659 = state_55640;
(statearr_55659[(8)] = inst_55595);

(statearr_55659[(9)] = inst_55593);

(statearr_55659[(10)] = inst_55594);

(statearr_55659[(11)] = inst_55592);

return statearr_55659;
})();
var statearr_55660_55693 = state_55640__$1;
(statearr_55660_55693[(2)] = null);

(statearr_55660_55693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (3))){
var inst_55638 = (state_55640[(2)]);
var state_55640__$1 = state_55640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55640__$1,inst_55638);
} else {
if((state_val_55641 === (12))){
var inst_55626 = (state_55640[(2)]);
var state_55640__$1 = state_55640;
var statearr_55661_55694 = state_55640__$1;
(statearr_55661_55694[(2)] = inst_55626);

(statearr_55661_55694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (2))){
var state_55640__$1 = state_55640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55640__$1,(4),in$);
} else {
if((state_val_55641 === (23))){
var inst_55634 = (state_55640[(2)]);
var state_55640__$1 = state_55640;
var statearr_55662_55695 = state_55640__$1;
(statearr_55662_55695[(2)] = inst_55634);

(statearr_55662_55695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (19))){
var inst_55621 = (state_55640[(2)]);
var state_55640__$1 = state_55640;
var statearr_55663_55696 = state_55640__$1;
(statearr_55663_55696[(2)] = inst_55621);

(statearr_55663_55696[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (11))){
var inst_55606 = (state_55640[(7)]);
var inst_55592 = (state_55640[(11)]);
var inst_55606__$1 = cljs.core.seq.call(null,inst_55592);
var state_55640__$1 = (function (){var statearr_55664 = state_55640;
(statearr_55664[(7)] = inst_55606__$1);

return statearr_55664;
})();
if(inst_55606__$1){
var statearr_55665_55697 = state_55640__$1;
(statearr_55665_55697[(1)] = (14));

} else {
var statearr_55666_55698 = state_55640__$1;
(statearr_55666_55698[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (9))){
var inst_55628 = (state_55640[(2)]);
var inst_55629 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_55640__$1 = (function (){var statearr_55667 = state_55640;
(statearr_55667[(15)] = inst_55628);

return statearr_55667;
})();
if(cljs.core.truth_(inst_55629)){
var statearr_55668_55699 = state_55640__$1;
(statearr_55668_55699[(1)] = (21));

} else {
var statearr_55669_55700 = state_55640__$1;
(statearr_55669_55700[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (5))){
var inst_55584 = cljs.core.async.close_BANG_.call(null,out);
var state_55640__$1 = state_55640;
var statearr_55670_55701 = state_55640__$1;
(statearr_55670_55701[(2)] = inst_55584);

(statearr_55670_55701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (14))){
var inst_55606 = (state_55640[(7)]);
var inst_55608 = cljs.core.chunked_seq_QMARK_.call(null,inst_55606);
var state_55640__$1 = state_55640;
if(inst_55608){
var statearr_55671_55702 = state_55640__$1;
(statearr_55671_55702[(1)] = (17));

} else {
var statearr_55672_55703 = state_55640__$1;
(statearr_55672_55703[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (16))){
var inst_55624 = (state_55640[(2)]);
var state_55640__$1 = state_55640;
var statearr_55673_55704 = state_55640__$1;
(statearr_55673_55704[(2)] = inst_55624);

(statearr_55673_55704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55641 === (10))){
var inst_55595 = (state_55640[(8)]);
var inst_55593 = (state_55640[(9)]);
var inst_55600 = cljs.core._nth.call(null,inst_55593,inst_55595);
var state_55640__$1 = state_55640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55640__$1,(13),out,inst_55600);
} else {
if((state_val_55641 === (18))){
var inst_55606 = (state_55640[(7)]);
var inst_55615 = cljs.core.first.call(null,inst_55606);
var state_55640__$1 = state_55640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55640__$1,(20),out,inst_55615);
} else {
if((state_val_55641 === (8))){
var inst_55595 = (state_55640[(8)]);
var inst_55594 = (state_55640[(10)]);
var inst_55597 = (inst_55595 < inst_55594);
var inst_55598 = inst_55597;
var state_55640__$1 = state_55640;
if(cljs.core.truth_(inst_55598)){
var statearr_55674_55705 = state_55640__$1;
(statearr_55674_55705[(1)] = (10));

} else {
var statearr_55675_55706 = state_55640__$1;
(statearr_55675_55706[(1)] = (11));

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
});})(c__53134__auto__))
;
return ((function (switch__53020__auto__,c__53134__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__53021__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__53021__auto____0 = (function (){
var statearr_55679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55679[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__53021__auto__);

(statearr_55679[(1)] = (1));

return statearr_55679;
});
var cljs$core$async$mapcat_STAR__$_state_machine__53021__auto____1 = (function (state_55640){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_55640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e55680){if((e55680 instanceof Object)){
var ex__53024__auto__ = e55680;
var statearr_55681_55707 = state_55640;
(statearr_55681_55707[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55708 = state_55640;
state_55640 = G__55708;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__53021__auto__ = function(state_55640){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__53021__auto____1.call(this,state_55640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__53021__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__53021__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__))
})();
var state__53136__auto__ = (function (){var statearr_55682 = f__53135__auto__.call(null);
(statearr_55682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_55682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__))
);

return c__53134__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args55709 = [];
var len__46645__auto___55712 = arguments.length;
var i__46646__auto___55713 = (0);
while(true){
if((i__46646__auto___55713 < len__46645__auto___55712)){
args55709.push((arguments[i__46646__auto___55713]));

var G__55714 = (i__46646__auto___55713 + (1));
i__46646__auto___55713 = G__55714;
continue;
} else {
}
break;
}

var G__55711 = args55709.length;
switch (G__55711) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55709.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args55716 = [];
var len__46645__auto___55719 = arguments.length;
var i__46646__auto___55720 = (0);
while(true){
if((i__46646__auto___55720 < len__46645__auto___55719)){
args55716.push((arguments[i__46646__auto___55720]));

var G__55721 = (i__46646__auto___55720 + (1));
i__46646__auto___55720 = G__55721;
continue;
} else {
}
break;
}

var G__55718 = args55716.length;
switch (G__55718) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55716.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args55723 = [];
var len__46645__auto___55774 = arguments.length;
var i__46646__auto___55775 = (0);
while(true){
if((i__46646__auto___55775 < len__46645__auto___55774)){
args55723.push((arguments[i__46646__auto___55775]));

var G__55776 = (i__46646__auto___55775 + (1));
i__46646__auto___55775 = G__55776;
continue;
} else {
}
break;
}

var G__55725 = args55723.length;
switch (G__55725) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55723.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53134__auto___55778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___55778,out){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___55778,out){
return (function (state_55749){
var state_val_55750 = (state_55749[(1)]);
if((state_val_55750 === (7))){
var inst_55744 = (state_55749[(2)]);
var state_55749__$1 = state_55749;
var statearr_55751_55779 = state_55749__$1;
(statearr_55751_55779[(2)] = inst_55744);

(statearr_55751_55779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55750 === (1))){
var inst_55726 = null;
var state_55749__$1 = (function (){var statearr_55752 = state_55749;
(statearr_55752[(7)] = inst_55726);

return statearr_55752;
})();
var statearr_55753_55780 = state_55749__$1;
(statearr_55753_55780[(2)] = null);

(statearr_55753_55780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55750 === (4))){
var inst_55729 = (state_55749[(8)]);
var inst_55729__$1 = (state_55749[(2)]);
var inst_55730 = (inst_55729__$1 == null);
var inst_55731 = cljs.core.not.call(null,inst_55730);
var state_55749__$1 = (function (){var statearr_55754 = state_55749;
(statearr_55754[(8)] = inst_55729__$1);

return statearr_55754;
})();
if(inst_55731){
var statearr_55755_55781 = state_55749__$1;
(statearr_55755_55781[(1)] = (5));

} else {
var statearr_55756_55782 = state_55749__$1;
(statearr_55756_55782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55750 === (6))){
var state_55749__$1 = state_55749;
var statearr_55757_55783 = state_55749__$1;
(statearr_55757_55783[(2)] = null);

(statearr_55757_55783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55750 === (3))){
var inst_55746 = (state_55749[(2)]);
var inst_55747 = cljs.core.async.close_BANG_.call(null,out);
var state_55749__$1 = (function (){var statearr_55758 = state_55749;
(statearr_55758[(9)] = inst_55746);

return statearr_55758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55749__$1,inst_55747);
} else {
if((state_val_55750 === (2))){
var state_55749__$1 = state_55749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55749__$1,(4),ch);
} else {
if((state_val_55750 === (11))){
var inst_55729 = (state_55749[(8)]);
var inst_55738 = (state_55749[(2)]);
var inst_55726 = inst_55729;
var state_55749__$1 = (function (){var statearr_55759 = state_55749;
(statearr_55759[(10)] = inst_55738);

(statearr_55759[(7)] = inst_55726);

return statearr_55759;
})();
var statearr_55760_55784 = state_55749__$1;
(statearr_55760_55784[(2)] = null);

(statearr_55760_55784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55750 === (9))){
var inst_55729 = (state_55749[(8)]);
var state_55749__$1 = state_55749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55749__$1,(11),out,inst_55729);
} else {
if((state_val_55750 === (5))){
var inst_55729 = (state_55749[(8)]);
var inst_55726 = (state_55749[(7)]);
var inst_55733 = cljs.core._EQ_.call(null,inst_55729,inst_55726);
var state_55749__$1 = state_55749;
if(inst_55733){
var statearr_55762_55785 = state_55749__$1;
(statearr_55762_55785[(1)] = (8));

} else {
var statearr_55763_55786 = state_55749__$1;
(statearr_55763_55786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55750 === (10))){
var inst_55741 = (state_55749[(2)]);
var state_55749__$1 = state_55749;
var statearr_55764_55787 = state_55749__$1;
(statearr_55764_55787[(2)] = inst_55741);

(statearr_55764_55787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55750 === (8))){
var inst_55726 = (state_55749[(7)]);
var tmp55761 = inst_55726;
var inst_55726__$1 = tmp55761;
var state_55749__$1 = (function (){var statearr_55765 = state_55749;
(statearr_55765[(7)] = inst_55726__$1);

return statearr_55765;
})();
var statearr_55766_55788 = state_55749__$1;
(statearr_55766_55788[(2)] = null);

(statearr_55766_55788[(1)] = (2));


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
});})(c__53134__auto___55778,out))
;
return ((function (switch__53020__auto__,c__53134__auto___55778,out){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_55770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55770[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_55770[(1)] = (1));

return statearr_55770;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_55749){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_55749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e55771){if((e55771 instanceof Object)){
var ex__53024__auto__ = e55771;
var statearr_55772_55789 = state_55749;
(statearr_55772_55789[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55790 = state_55749;
state_55749 = G__55790;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_55749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_55749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___55778,out))
})();
var state__53136__auto__ = (function (){var statearr_55773 = f__53135__auto__.call(null);
(statearr_55773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___55778);

return statearr_55773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___55778,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args55791 = [];
var len__46645__auto___55861 = arguments.length;
var i__46646__auto___55862 = (0);
while(true){
if((i__46646__auto___55862 < len__46645__auto___55861)){
args55791.push((arguments[i__46646__auto___55862]));

var G__55863 = (i__46646__auto___55862 + (1));
i__46646__auto___55862 = G__55863;
continue;
} else {
}
break;
}

var G__55793 = args55791.length;
switch (G__55793) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55791.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53134__auto___55865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___55865,out){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___55865,out){
return (function (state_55831){
var state_val_55832 = (state_55831[(1)]);
if((state_val_55832 === (7))){
var inst_55827 = (state_55831[(2)]);
var state_55831__$1 = state_55831;
var statearr_55833_55866 = state_55831__$1;
(statearr_55833_55866[(2)] = inst_55827);

(statearr_55833_55866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (1))){
var inst_55794 = (new Array(n));
var inst_55795 = inst_55794;
var inst_55796 = (0);
var state_55831__$1 = (function (){var statearr_55834 = state_55831;
(statearr_55834[(7)] = inst_55795);

(statearr_55834[(8)] = inst_55796);

return statearr_55834;
})();
var statearr_55835_55867 = state_55831__$1;
(statearr_55835_55867[(2)] = null);

(statearr_55835_55867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (4))){
var inst_55799 = (state_55831[(9)]);
var inst_55799__$1 = (state_55831[(2)]);
var inst_55800 = (inst_55799__$1 == null);
var inst_55801 = cljs.core.not.call(null,inst_55800);
var state_55831__$1 = (function (){var statearr_55836 = state_55831;
(statearr_55836[(9)] = inst_55799__$1);

return statearr_55836;
})();
if(inst_55801){
var statearr_55837_55868 = state_55831__$1;
(statearr_55837_55868[(1)] = (5));

} else {
var statearr_55838_55869 = state_55831__$1;
(statearr_55838_55869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (15))){
var inst_55821 = (state_55831[(2)]);
var state_55831__$1 = state_55831;
var statearr_55839_55870 = state_55831__$1;
(statearr_55839_55870[(2)] = inst_55821);

(statearr_55839_55870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (13))){
var state_55831__$1 = state_55831;
var statearr_55840_55871 = state_55831__$1;
(statearr_55840_55871[(2)] = null);

(statearr_55840_55871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (6))){
var inst_55796 = (state_55831[(8)]);
var inst_55817 = (inst_55796 > (0));
var state_55831__$1 = state_55831;
if(cljs.core.truth_(inst_55817)){
var statearr_55841_55872 = state_55831__$1;
(statearr_55841_55872[(1)] = (12));

} else {
var statearr_55842_55873 = state_55831__$1;
(statearr_55842_55873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (3))){
var inst_55829 = (state_55831[(2)]);
var state_55831__$1 = state_55831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55831__$1,inst_55829);
} else {
if((state_val_55832 === (12))){
var inst_55795 = (state_55831[(7)]);
var inst_55819 = cljs.core.vec.call(null,inst_55795);
var state_55831__$1 = state_55831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55831__$1,(15),out,inst_55819);
} else {
if((state_val_55832 === (2))){
var state_55831__$1 = state_55831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55831__$1,(4),ch);
} else {
if((state_val_55832 === (11))){
var inst_55811 = (state_55831[(2)]);
var inst_55812 = (new Array(n));
var inst_55795 = inst_55812;
var inst_55796 = (0);
var state_55831__$1 = (function (){var statearr_55843 = state_55831;
(statearr_55843[(7)] = inst_55795);

(statearr_55843[(8)] = inst_55796);

(statearr_55843[(10)] = inst_55811);

return statearr_55843;
})();
var statearr_55844_55874 = state_55831__$1;
(statearr_55844_55874[(2)] = null);

(statearr_55844_55874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (9))){
var inst_55795 = (state_55831[(7)]);
var inst_55809 = cljs.core.vec.call(null,inst_55795);
var state_55831__$1 = state_55831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55831__$1,(11),out,inst_55809);
} else {
if((state_val_55832 === (5))){
var inst_55804 = (state_55831[(11)]);
var inst_55795 = (state_55831[(7)]);
var inst_55796 = (state_55831[(8)]);
var inst_55799 = (state_55831[(9)]);
var inst_55803 = (inst_55795[inst_55796] = inst_55799);
var inst_55804__$1 = (inst_55796 + (1));
var inst_55805 = (inst_55804__$1 < n);
var state_55831__$1 = (function (){var statearr_55845 = state_55831;
(statearr_55845[(11)] = inst_55804__$1);

(statearr_55845[(12)] = inst_55803);

return statearr_55845;
})();
if(cljs.core.truth_(inst_55805)){
var statearr_55846_55875 = state_55831__$1;
(statearr_55846_55875[(1)] = (8));

} else {
var statearr_55847_55876 = state_55831__$1;
(statearr_55847_55876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (14))){
var inst_55824 = (state_55831[(2)]);
var inst_55825 = cljs.core.async.close_BANG_.call(null,out);
var state_55831__$1 = (function (){var statearr_55849 = state_55831;
(statearr_55849[(13)] = inst_55824);

return statearr_55849;
})();
var statearr_55850_55877 = state_55831__$1;
(statearr_55850_55877[(2)] = inst_55825);

(statearr_55850_55877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (10))){
var inst_55815 = (state_55831[(2)]);
var state_55831__$1 = state_55831;
var statearr_55851_55878 = state_55831__$1;
(statearr_55851_55878[(2)] = inst_55815);

(statearr_55851_55878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55832 === (8))){
var inst_55804 = (state_55831[(11)]);
var inst_55795 = (state_55831[(7)]);
var tmp55848 = inst_55795;
var inst_55795__$1 = tmp55848;
var inst_55796 = inst_55804;
var state_55831__$1 = (function (){var statearr_55852 = state_55831;
(statearr_55852[(7)] = inst_55795__$1);

(statearr_55852[(8)] = inst_55796);

return statearr_55852;
})();
var statearr_55853_55879 = state_55831__$1;
(statearr_55853_55879[(2)] = null);

(statearr_55853_55879[(1)] = (2));


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
});})(c__53134__auto___55865,out))
;
return ((function (switch__53020__auto__,c__53134__auto___55865,out){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_55857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55857[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_55857[(1)] = (1));

return statearr_55857;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_55831){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_55831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e55858){if((e55858 instanceof Object)){
var ex__53024__auto__ = e55858;
var statearr_55859_55880 = state_55831;
(statearr_55859_55880[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55881 = state_55831;
state_55831 = G__55881;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_55831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_55831);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___55865,out))
})();
var state__53136__auto__ = (function (){var statearr_55860 = f__53135__auto__.call(null);
(statearr_55860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___55865);

return statearr_55860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___55865,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args55882 = [];
var len__46645__auto___55956 = arguments.length;
var i__46646__auto___55957 = (0);
while(true){
if((i__46646__auto___55957 < len__46645__auto___55956)){
args55882.push((arguments[i__46646__auto___55957]));

var G__55958 = (i__46646__auto___55957 + (1));
i__46646__auto___55957 = G__55958;
continue;
} else {
}
break;
}

var G__55884 = args55882.length;
switch (G__55884) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55882.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53134__auto___55960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___55960,out){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___55960,out){
return (function (state_55926){
var state_val_55927 = (state_55926[(1)]);
if((state_val_55927 === (7))){
var inst_55922 = (state_55926[(2)]);
var state_55926__$1 = state_55926;
var statearr_55928_55961 = state_55926__$1;
(statearr_55928_55961[(2)] = inst_55922);

(statearr_55928_55961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (1))){
var inst_55885 = [];
var inst_55886 = inst_55885;
var inst_55887 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55926__$1 = (function (){var statearr_55929 = state_55926;
(statearr_55929[(7)] = inst_55886);

(statearr_55929[(8)] = inst_55887);

return statearr_55929;
})();
var statearr_55930_55962 = state_55926__$1;
(statearr_55930_55962[(2)] = null);

(statearr_55930_55962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (4))){
var inst_55890 = (state_55926[(9)]);
var inst_55890__$1 = (state_55926[(2)]);
var inst_55891 = (inst_55890__$1 == null);
var inst_55892 = cljs.core.not.call(null,inst_55891);
var state_55926__$1 = (function (){var statearr_55931 = state_55926;
(statearr_55931[(9)] = inst_55890__$1);

return statearr_55931;
})();
if(inst_55892){
var statearr_55932_55963 = state_55926__$1;
(statearr_55932_55963[(1)] = (5));

} else {
var statearr_55933_55964 = state_55926__$1;
(statearr_55933_55964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (15))){
var inst_55916 = (state_55926[(2)]);
var state_55926__$1 = state_55926;
var statearr_55934_55965 = state_55926__$1;
(statearr_55934_55965[(2)] = inst_55916);

(statearr_55934_55965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (13))){
var state_55926__$1 = state_55926;
var statearr_55935_55966 = state_55926__$1;
(statearr_55935_55966[(2)] = null);

(statearr_55935_55966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (6))){
var inst_55886 = (state_55926[(7)]);
var inst_55911 = inst_55886.length;
var inst_55912 = (inst_55911 > (0));
var state_55926__$1 = state_55926;
if(cljs.core.truth_(inst_55912)){
var statearr_55936_55967 = state_55926__$1;
(statearr_55936_55967[(1)] = (12));

} else {
var statearr_55937_55968 = state_55926__$1;
(statearr_55937_55968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (3))){
var inst_55924 = (state_55926[(2)]);
var state_55926__$1 = state_55926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55926__$1,inst_55924);
} else {
if((state_val_55927 === (12))){
var inst_55886 = (state_55926[(7)]);
var inst_55914 = cljs.core.vec.call(null,inst_55886);
var state_55926__$1 = state_55926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55926__$1,(15),out,inst_55914);
} else {
if((state_val_55927 === (2))){
var state_55926__$1 = state_55926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55926__$1,(4),ch);
} else {
if((state_val_55927 === (11))){
var inst_55890 = (state_55926[(9)]);
var inst_55894 = (state_55926[(10)]);
var inst_55904 = (state_55926[(2)]);
var inst_55905 = [];
var inst_55906 = inst_55905.push(inst_55890);
var inst_55886 = inst_55905;
var inst_55887 = inst_55894;
var state_55926__$1 = (function (){var statearr_55938 = state_55926;
(statearr_55938[(7)] = inst_55886);

(statearr_55938[(11)] = inst_55906);

(statearr_55938[(8)] = inst_55887);

(statearr_55938[(12)] = inst_55904);

return statearr_55938;
})();
var statearr_55939_55969 = state_55926__$1;
(statearr_55939_55969[(2)] = null);

(statearr_55939_55969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (9))){
var inst_55886 = (state_55926[(7)]);
var inst_55902 = cljs.core.vec.call(null,inst_55886);
var state_55926__$1 = state_55926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55926__$1,(11),out,inst_55902);
} else {
if((state_val_55927 === (5))){
var inst_55887 = (state_55926[(8)]);
var inst_55890 = (state_55926[(9)]);
var inst_55894 = (state_55926[(10)]);
var inst_55894__$1 = f.call(null,inst_55890);
var inst_55895 = cljs.core._EQ_.call(null,inst_55894__$1,inst_55887);
var inst_55896 = cljs.core.keyword_identical_QMARK_.call(null,inst_55887,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_55897 = (inst_55895) || (inst_55896);
var state_55926__$1 = (function (){var statearr_55940 = state_55926;
(statearr_55940[(10)] = inst_55894__$1);

return statearr_55940;
})();
if(cljs.core.truth_(inst_55897)){
var statearr_55941_55970 = state_55926__$1;
(statearr_55941_55970[(1)] = (8));

} else {
var statearr_55942_55971 = state_55926__$1;
(statearr_55942_55971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (14))){
var inst_55919 = (state_55926[(2)]);
var inst_55920 = cljs.core.async.close_BANG_.call(null,out);
var state_55926__$1 = (function (){var statearr_55944 = state_55926;
(statearr_55944[(13)] = inst_55919);

return statearr_55944;
})();
var statearr_55945_55972 = state_55926__$1;
(statearr_55945_55972[(2)] = inst_55920);

(statearr_55945_55972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (10))){
var inst_55909 = (state_55926[(2)]);
var state_55926__$1 = state_55926;
var statearr_55946_55973 = state_55926__$1;
(statearr_55946_55973[(2)] = inst_55909);

(statearr_55946_55973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55927 === (8))){
var inst_55886 = (state_55926[(7)]);
var inst_55890 = (state_55926[(9)]);
var inst_55894 = (state_55926[(10)]);
var inst_55899 = inst_55886.push(inst_55890);
var tmp55943 = inst_55886;
var inst_55886__$1 = tmp55943;
var inst_55887 = inst_55894;
var state_55926__$1 = (function (){var statearr_55947 = state_55926;
(statearr_55947[(7)] = inst_55886__$1);

(statearr_55947[(14)] = inst_55899);

(statearr_55947[(8)] = inst_55887);

return statearr_55947;
})();
var statearr_55948_55974 = state_55926__$1;
(statearr_55948_55974[(2)] = null);

(statearr_55948_55974[(1)] = (2));


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
});})(c__53134__auto___55960,out))
;
return ((function (switch__53020__auto__,c__53134__auto___55960,out){
return (function() {
var cljs$core$async$state_machine__53021__auto__ = null;
var cljs$core$async$state_machine__53021__auto____0 = (function (){
var statearr_55952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55952[(0)] = cljs$core$async$state_machine__53021__auto__);

(statearr_55952[(1)] = (1));

return statearr_55952;
});
var cljs$core$async$state_machine__53021__auto____1 = (function (state_55926){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_55926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e55953){if((e55953 instanceof Object)){
var ex__53024__auto__ = e55953;
var statearr_55954_55975 = state_55926;
(statearr_55954_55975[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55976 = state_55926;
state_55926 = G__55976;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
cljs$core$async$state_machine__53021__auto__ = function(state_55926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53021__auto____1.call(this,state_55926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53021__auto____0;
cljs$core$async$state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53021__auto____1;
return cljs$core$async$state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___55960,out))
})();
var state__53136__auto__ = (function (){var statearr_55955 = f__53135__auto__.call(null);
(statearr_55955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___55960);

return statearr_55955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___55960,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1498049878931