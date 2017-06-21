// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args60538 = [];
var len__46645__auto___60541 = arguments.length;
var i__46646__auto___60542 = (0);
while(true){
if((i__46646__auto___60542 < len__46645__auto___60541)){
args60538.push((arguments[i__46646__auto___60542]));

var G__60543 = (i__46646__auto___60542 + (1));
i__46646__auto___60542 = G__60543;
continue;
} else {
}
break;
}

var G__60540 = args60538.length;
switch (G__60540) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60538.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__46652__auto__ = [];
var len__46645__auto___60546 = arguments.length;
var i__46646__auto___60547 = (0);
while(true){
if((i__46646__auto___60547 < len__46645__auto___60546)){
args__46652__auto__.push((arguments[i__46646__auto___60547]));

var G__60548 = (i__46646__auto___60547 + (1));
i__46646__auto___60547 = G__60548;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq60545){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60545));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__46652__auto__ = [];
var len__46645__auto___60550 = arguments.length;
var i__46646__auto___60551 = (0);
while(true){
if((i__46646__auto___60551 < len__46645__auto___60550)){
args__46652__auto__.push((arguments[i__46646__auto___60551]));

var G__60552 = (i__46646__auto___60551 + (1));
i__46646__auto___60551 = G__60552;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq60549){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60549));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__60553){
var map__60556 = p__60553;
var map__60556__$1 = ((((!((map__60556 == null)))?((((map__60556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60556):map__60556);
var message = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__45424__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__45412__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__45412__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__45412__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__53134__auto___60718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___60718,ch){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___60718,ch){
return (function (state_60687){
var state_val_60688 = (state_60687[(1)]);
if((state_val_60688 === (7))){
var inst_60683 = (state_60687[(2)]);
var state_60687__$1 = state_60687;
var statearr_60689_60719 = state_60687__$1;
(statearr_60689_60719[(2)] = inst_60683);

(statearr_60689_60719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (1))){
var state_60687__$1 = state_60687;
var statearr_60690_60720 = state_60687__$1;
(statearr_60690_60720[(2)] = null);

(statearr_60690_60720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (4))){
var inst_60640 = (state_60687[(7)]);
var inst_60640__$1 = (state_60687[(2)]);
var state_60687__$1 = (function (){var statearr_60691 = state_60687;
(statearr_60691[(7)] = inst_60640__$1);

return statearr_60691;
})();
if(cljs.core.truth_(inst_60640__$1)){
var statearr_60692_60721 = state_60687__$1;
(statearr_60692_60721[(1)] = (5));

} else {
var statearr_60693_60722 = state_60687__$1;
(statearr_60693_60722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (15))){
var inst_60647 = (state_60687[(8)]);
var inst_60662 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60647);
var inst_60663 = cljs.core.first.call(null,inst_60662);
var inst_60664 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_60663);
var inst_60665 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60664)].join('');
var inst_60666 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_60665);
var state_60687__$1 = state_60687;
var statearr_60694_60723 = state_60687__$1;
(statearr_60694_60723[(2)] = inst_60666);

(statearr_60694_60723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (13))){
var inst_60671 = (state_60687[(2)]);
var state_60687__$1 = state_60687;
var statearr_60695_60724 = state_60687__$1;
(statearr_60695_60724[(2)] = inst_60671);

(statearr_60695_60724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (6))){
var state_60687__$1 = state_60687;
var statearr_60696_60725 = state_60687__$1;
(statearr_60696_60725[(2)] = null);

(statearr_60696_60725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (17))){
var inst_60669 = (state_60687[(2)]);
var state_60687__$1 = state_60687;
var statearr_60697_60726 = state_60687__$1;
(statearr_60697_60726[(2)] = inst_60669);

(statearr_60697_60726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (3))){
var inst_60685 = (state_60687[(2)]);
var state_60687__$1 = state_60687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60687__$1,inst_60685);
} else {
if((state_val_60688 === (12))){
var inst_60646 = (state_60687[(9)]);
var inst_60660 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_60646,opts);
var state_60687__$1 = state_60687;
if(cljs.core.truth_(inst_60660)){
var statearr_60698_60727 = state_60687__$1;
(statearr_60698_60727[(1)] = (15));

} else {
var statearr_60699_60728 = state_60687__$1;
(statearr_60699_60728[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (2))){
var state_60687__$1 = state_60687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60687__$1,(4),ch);
} else {
if((state_val_60688 === (11))){
var inst_60647 = (state_60687[(8)]);
var inst_60652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60653 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_60647);
var inst_60654 = cljs.core.async.timeout.call(null,(1000));
var inst_60655 = [inst_60653,inst_60654];
var inst_60656 = (new cljs.core.PersistentVector(null,2,(5),inst_60652,inst_60655,null));
var state_60687__$1 = state_60687;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60687__$1,(14),inst_60656);
} else {
if((state_val_60688 === (9))){
var inst_60647 = (state_60687[(8)]);
var inst_60673 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_60674 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60647);
var inst_60675 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60674);
var inst_60676 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60675)].join('');
var inst_60677 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_60676);
var state_60687__$1 = (function (){var statearr_60700 = state_60687;
(statearr_60700[(10)] = inst_60673);

return statearr_60700;
})();
var statearr_60701_60729 = state_60687__$1;
(statearr_60701_60729[(2)] = inst_60677);

(statearr_60701_60729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (5))){
var inst_60640 = (state_60687[(7)]);
var inst_60642 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_60643 = (new cljs.core.PersistentArrayMap(null,2,inst_60642,null));
var inst_60644 = (new cljs.core.PersistentHashSet(null,inst_60643,null));
var inst_60645 = figwheel.client.focus_msgs.call(null,inst_60644,inst_60640);
var inst_60646 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_60645);
var inst_60647 = cljs.core.first.call(null,inst_60645);
var inst_60648 = figwheel.client.autoload_QMARK_.call(null);
var state_60687__$1 = (function (){var statearr_60702 = state_60687;
(statearr_60702[(8)] = inst_60647);

(statearr_60702[(9)] = inst_60646);

return statearr_60702;
})();
if(cljs.core.truth_(inst_60648)){
var statearr_60703_60730 = state_60687__$1;
(statearr_60703_60730[(1)] = (8));

} else {
var statearr_60704_60731 = state_60687__$1;
(statearr_60704_60731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (14))){
var inst_60658 = (state_60687[(2)]);
var state_60687__$1 = state_60687;
var statearr_60705_60732 = state_60687__$1;
(statearr_60705_60732[(2)] = inst_60658);

(statearr_60705_60732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (16))){
var state_60687__$1 = state_60687;
var statearr_60706_60733 = state_60687__$1;
(statearr_60706_60733[(2)] = null);

(statearr_60706_60733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (10))){
var inst_60679 = (state_60687[(2)]);
var state_60687__$1 = (function (){var statearr_60707 = state_60687;
(statearr_60707[(11)] = inst_60679);

return statearr_60707;
})();
var statearr_60708_60734 = state_60687__$1;
(statearr_60708_60734[(2)] = null);

(statearr_60708_60734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60688 === (8))){
var inst_60646 = (state_60687[(9)]);
var inst_60650 = figwheel.client.reload_file_state_QMARK_.call(null,inst_60646,opts);
var state_60687__$1 = state_60687;
if(cljs.core.truth_(inst_60650)){
var statearr_60709_60735 = state_60687__$1;
(statearr_60709_60735[(1)] = (11));

} else {
var statearr_60710_60736 = state_60687__$1;
(statearr_60710_60736[(1)] = (12));

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
});})(c__53134__auto___60718,ch))
;
return ((function (switch__53020__auto__,c__53134__auto___60718,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__53021__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__53021__auto____0 = (function (){
var statearr_60714 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60714[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__53021__auto__);

(statearr_60714[(1)] = (1));

return statearr_60714;
});
var figwheel$client$file_reloader_plugin_$_state_machine__53021__auto____1 = (function (state_60687){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_60687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e60715){if((e60715 instanceof Object)){
var ex__53024__auto__ = e60715;
var statearr_60716_60737 = state_60687;
(statearr_60716_60737[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60738 = state_60687;
state_60687 = G__60738;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__53021__auto__ = function(state_60687){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__53021__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__53021__auto____1.call(this,state_60687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__53021__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__53021__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___60718,ch))
})();
var state__53136__auto__ = (function (){var statearr_60717 = f__53135__auto__.call(null);
(statearr_60717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___60718);

return statearr_60717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___60718,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__60739_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__60739_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_60742 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_60742){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e60741){if((e60741 instanceof Error)){
var e = e60741;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_60742], null));
} else {
var e = e60741;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_60742))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__60743){
var map__60752 = p__60743;
var map__60752__$1 = ((((!((map__60752 == null)))?((((map__60752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60752):map__60752);
var opts = map__60752__$1;
var build_id = cljs.core.get.call(null,map__60752__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__60752,map__60752__$1,opts,build_id){
return (function (p__60754){
var vec__60755 = p__60754;
var seq__60756 = cljs.core.seq.call(null,vec__60755);
var first__60757 = cljs.core.first.call(null,seq__60756);
var seq__60756__$1 = cljs.core.next.call(null,seq__60756);
var map__60758 = first__60757;
var map__60758__$1 = ((((!((map__60758 == null)))?((((map__60758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60758):map__60758);
var msg = map__60758__$1;
var msg_name = cljs.core.get.call(null,map__60758__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60756__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__60755,seq__60756,first__60757,seq__60756__$1,map__60758,map__60758__$1,msg,msg_name,_,map__60752,map__60752__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__60755,seq__60756,first__60757,seq__60756__$1,map__60758,map__60758__$1,msg,msg_name,_,map__60752,map__60752__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__60752,map__60752__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__60766){
var vec__60767 = p__60766;
var seq__60768 = cljs.core.seq.call(null,vec__60767);
var first__60769 = cljs.core.first.call(null,seq__60768);
var seq__60768__$1 = cljs.core.next.call(null,seq__60768);
var map__60770 = first__60769;
var map__60770__$1 = ((((!((map__60770 == null)))?((((map__60770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60770):map__60770);
var msg = map__60770__$1;
var msg_name = cljs.core.get.call(null,map__60770__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60768__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__60772){
var map__60784 = p__60772;
var map__60784__$1 = ((((!((map__60784 == null)))?((((map__60784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60784):map__60784);
var on_compile_warning = cljs.core.get.call(null,map__60784__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__60784__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__60784,map__60784__$1,on_compile_warning,on_compile_fail){
return (function (p__60786){
var vec__60787 = p__60786;
var seq__60788 = cljs.core.seq.call(null,vec__60787);
var first__60789 = cljs.core.first.call(null,seq__60788);
var seq__60788__$1 = cljs.core.next.call(null,seq__60788);
var map__60790 = first__60789;
var map__60790__$1 = ((((!((map__60790 == null)))?((((map__60790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60790):map__60790);
var msg = map__60790__$1;
var msg_name = cljs.core.get.call(null,map__60790__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60788__$1;
var pred__60792 = cljs.core._EQ_;
var expr__60793 = msg_name;
if(cljs.core.truth_(pred__60792.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__60793))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__60792.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__60793))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__60784,map__60784__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__,msg_hist,msg_names,msg){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__,msg_hist,msg_names,msg){
return (function (state_61021){
var state_val_61022 = (state_61021[(1)]);
if((state_val_61022 === (7))){
var inst_60941 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
if(cljs.core.truth_(inst_60941)){
var statearr_61023_61073 = state_61021__$1;
(statearr_61023_61073[(1)] = (8));

} else {
var statearr_61024_61074 = state_61021__$1;
(statearr_61024_61074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (20))){
var inst_61015 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61025_61075 = state_61021__$1;
(statearr_61025_61075[(2)] = inst_61015);

(statearr_61025_61075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (27))){
var inst_61011 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61026_61076 = state_61021__$1;
(statearr_61026_61076[(2)] = inst_61011);

(statearr_61026_61076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (1))){
var inst_60934 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_61021__$1 = state_61021;
if(cljs.core.truth_(inst_60934)){
var statearr_61027_61077 = state_61021__$1;
(statearr_61027_61077[(1)] = (2));

} else {
var statearr_61028_61078 = state_61021__$1;
(statearr_61028_61078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (24))){
var inst_61013 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61029_61079 = state_61021__$1;
(statearr_61029_61079[(2)] = inst_61013);

(statearr_61029_61079[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (4))){
var inst_61019 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61021__$1,inst_61019);
} else {
if((state_val_61022 === (15))){
var inst_61017 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61030_61080 = state_61021__$1;
(statearr_61030_61080[(2)] = inst_61017);

(statearr_61030_61080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (21))){
var inst_60970 = (state_61021[(2)]);
var inst_60971 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60972 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60971);
var state_61021__$1 = (function (){var statearr_61031 = state_61021;
(statearr_61031[(7)] = inst_60970);

return statearr_61031;
})();
var statearr_61032_61081 = state_61021__$1;
(statearr_61032_61081[(2)] = inst_60972);

(statearr_61032_61081[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (31))){
var inst_61000 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_61021__$1 = state_61021;
if(cljs.core.truth_(inst_61000)){
var statearr_61033_61082 = state_61021__$1;
(statearr_61033_61082[(1)] = (34));

} else {
var statearr_61034_61083 = state_61021__$1;
(statearr_61034_61083[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (32))){
var inst_61009 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61035_61084 = state_61021__$1;
(statearr_61035_61084[(2)] = inst_61009);

(statearr_61035_61084[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (33))){
var inst_60996 = (state_61021[(2)]);
var inst_60997 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60998 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60997);
var state_61021__$1 = (function (){var statearr_61036 = state_61021;
(statearr_61036[(8)] = inst_60996);

return statearr_61036;
})();
var statearr_61037_61085 = state_61021__$1;
(statearr_61037_61085[(2)] = inst_60998);

(statearr_61037_61085[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (13))){
var inst_60955 = figwheel.client.heads_up.clear.call(null);
var state_61021__$1 = state_61021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61021__$1,(16),inst_60955);
} else {
if((state_val_61022 === (22))){
var inst_60976 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60977 = figwheel.client.heads_up.append_warning_message.call(null,inst_60976);
var state_61021__$1 = state_61021;
var statearr_61038_61086 = state_61021__$1;
(statearr_61038_61086[(2)] = inst_60977);

(statearr_61038_61086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (36))){
var inst_61007 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61039_61087 = state_61021__$1;
(statearr_61039_61087[(2)] = inst_61007);

(statearr_61039_61087[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (29))){
var inst_60987 = (state_61021[(2)]);
var inst_60988 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60989 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60988);
var state_61021__$1 = (function (){var statearr_61040 = state_61021;
(statearr_61040[(9)] = inst_60987);

return statearr_61040;
})();
var statearr_61041_61088 = state_61021__$1;
(statearr_61041_61088[(2)] = inst_60989);

(statearr_61041_61088[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (6))){
var inst_60936 = (state_61021[(10)]);
var state_61021__$1 = state_61021;
var statearr_61042_61089 = state_61021__$1;
(statearr_61042_61089[(2)] = inst_60936);

(statearr_61042_61089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (28))){
var inst_60983 = (state_61021[(2)]);
var inst_60984 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60985 = figwheel.client.heads_up.display_warning.call(null,inst_60984);
var state_61021__$1 = (function (){var statearr_61043 = state_61021;
(statearr_61043[(11)] = inst_60983);

return statearr_61043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61021__$1,(29),inst_60985);
} else {
if((state_val_61022 === (25))){
var inst_60981 = figwheel.client.heads_up.clear.call(null);
var state_61021__$1 = state_61021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61021__$1,(28),inst_60981);
} else {
if((state_val_61022 === (34))){
var inst_61002 = figwheel.client.heads_up.flash_loaded.call(null);
var state_61021__$1 = state_61021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61021__$1,(37),inst_61002);
} else {
if((state_val_61022 === (17))){
var inst_60961 = (state_61021[(2)]);
var inst_60962 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60963 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60962);
var state_61021__$1 = (function (){var statearr_61044 = state_61021;
(statearr_61044[(12)] = inst_60961);

return statearr_61044;
})();
var statearr_61045_61090 = state_61021__$1;
(statearr_61045_61090[(2)] = inst_60963);

(statearr_61045_61090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (3))){
var inst_60953 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_61021__$1 = state_61021;
if(cljs.core.truth_(inst_60953)){
var statearr_61046_61091 = state_61021__$1;
(statearr_61046_61091[(1)] = (13));

} else {
var statearr_61047_61092 = state_61021__$1;
(statearr_61047_61092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (12))){
var inst_60949 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61048_61093 = state_61021__$1;
(statearr_61048_61093[(2)] = inst_60949);

(statearr_61048_61093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (2))){
var inst_60936 = (state_61021[(10)]);
var inst_60936__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_61021__$1 = (function (){var statearr_61049 = state_61021;
(statearr_61049[(10)] = inst_60936__$1);

return statearr_61049;
})();
if(cljs.core.truth_(inst_60936__$1)){
var statearr_61050_61094 = state_61021__$1;
(statearr_61050_61094[(1)] = (5));

} else {
var statearr_61051_61095 = state_61021__$1;
(statearr_61051_61095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (23))){
var inst_60979 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_61021__$1 = state_61021;
if(cljs.core.truth_(inst_60979)){
var statearr_61052_61096 = state_61021__$1;
(statearr_61052_61096[(1)] = (25));

} else {
var statearr_61053_61097 = state_61021__$1;
(statearr_61053_61097[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (35))){
var state_61021__$1 = state_61021;
var statearr_61054_61098 = state_61021__$1;
(statearr_61054_61098[(2)] = null);

(statearr_61054_61098[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (19))){
var inst_60974 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_61021__$1 = state_61021;
if(cljs.core.truth_(inst_60974)){
var statearr_61055_61099 = state_61021__$1;
(statearr_61055_61099[(1)] = (22));

} else {
var statearr_61056_61100 = state_61021__$1;
(statearr_61056_61100[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (11))){
var inst_60945 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61057_61101 = state_61021__$1;
(statearr_61057_61101[(2)] = inst_60945);

(statearr_61057_61101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (9))){
var inst_60947 = figwheel.client.heads_up.clear.call(null);
var state_61021__$1 = state_61021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61021__$1,(12),inst_60947);
} else {
if((state_val_61022 === (5))){
var inst_60938 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_61021__$1 = state_61021;
var statearr_61058_61102 = state_61021__$1;
(statearr_61058_61102[(2)] = inst_60938);

(statearr_61058_61102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (14))){
var inst_60965 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_61021__$1 = state_61021;
if(cljs.core.truth_(inst_60965)){
var statearr_61059_61103 = state_61021__$1;
(statearr_61059_61103[(1)] = (18));

} else {
var statearr_61060_61104 = state_61021__$1;
(statearr_61060_61104[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (26))){
var inst_60991 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_61021__$1 = state_61021;
if(cljs.core.truth_(inst_60991)){
var statearr_61061_61105 = state_61021__$1;
(statearr_61061_61105[(1)] = (30));

} else {
var statearr_61062_61106 = state_61021__$1;
(statearr_61062_61106[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (16))){
var inst_60957 = (state_61021[(2)]);
var inst_60958 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60959 = figwheel.client.heads_up.display_exception.call(null,inst_60958);
var state_61021__$1 = (function (){var statearr_61063 = state_61021;
(statearr_61063[(13)] = inst_60957);

return statearr_61063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61021__$1,(17),inst_60959);
} else {
if((state_val_61022 === (30))){
var inst_60993 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60994 = figwheel.client.heads_up.display_warning.call(null,inst_60993);
var state_61021__$1 = state_61021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61021__$1,(33),inst_60994);
} else {
if((state_val_61022 === (10))){
var inst_60951 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61064_61107 = state_61021__$1;
(statearr_61064_61107[(2)] = inst_60951);

(statearr_61064_61107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (18))){
var inst_60967 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60968 = figwheel.client.heads_up.display_exception.call(null,inst_60967);
var state_61021__$1 = state_61021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61021__$1,(21),inst_60968);
} else {
if((state_val_61022 === (37))){
var inst_61004 = (state_61021[(2)]);
var state_61021__$1 = state_61021;
var statearr_61065_61108 = state_61021__$1;
(statearr_61065_61108[(2)] = inst_61004);

(statearr_61065_61108[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61022 === (8))){
var inst_60943 = figwheel.client.heads_up.flash_loaded.call(null);
var state_61021__$1 = state_61021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61021__$1,(11),inst_60943);
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
});})(c__53134__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__53020__auto__,c__53134__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto____0 = (function (){
var statearr_61069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61069[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto__);

(statearr_61069[(1)] = (1));

return statearr_61069;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto____1 = (function (state_61021){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_61021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e61070){if((e61070 instanceof Object)){
var ex__53024__auto__ = e61070;
var statearr_61071_61109 = state_61021;
(statearr_61071_61109[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61110 = state_61021;
state_61021 = G__61110;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto__ = function(state_61021){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto____1.call(this,state_61021);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__,msg_hist,msg_names,msg))
})();
var state__53136__auto__ = (function (){var statearr_61072 = f__53135__auto__.call(null);
(statearr_61072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_61072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__,msg_hist,msg_names,msg))
);

return c__53134__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__53134__auto___61173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto___61173,ch){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto___61173,ch){
return (function (state_61156){
var state_val_61157 = (state_61156[(1)]);
if((state_val_61157 === (1))){
var state_61156__$1 = state_61156;
var statearr_61158_61174 = state_61156__$1;
(statearr_61158_61174[(2)] = null);

(statearr_61158_61174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61157 === (2))){
var state_61156__$1 = state_61156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61156__$1,(4),ch);
} else {
if((state_val_61157 === (3))){
var inst_61154 = (state_61156[(2)]);
var state_61156__$1 = state_61156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61156__$1,inst_61154);
} else {
if((state_val_61157 === (4))){
var inst_61144 = (state_61156[(7)]);
var inst_61144__$1 = (state_61156[(2)]);
var state_61156__$1 = (function (){var statearr_61159 = state_61156;
(statearr_61159[(7)] = inst_61144__$1);

return statearr_61159;
})();
if(cljs.core.truth_(inst_61144__$1)){
var statearr_61160_61175 = state_61156__$1;
(statearr_61160_61175[(1)] = (5));

} else {
var statearr_61161_61176 = state_61156__$1;
(statearr_61161_61176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61157 === (5))){
var inst_61144 = (state_61156[(7)]);
var inst_61146 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_61144);
var state_61156__$1 = state_61156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61156__$1,(8),inst_61146);
} else {
if((state_val_61157 === (6))){
var state_61156__$1 = state_61156;
var statearr_61162_61177 = state_61156__$1;
(statearr_61162_61177[(2)] = null);

(statearr_61162_61177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61157 === (7))){
var inst_61152 = (state_61156[(2)]);
var state_61156__$1 = state_61156;
var statearr_61163_61178 = state_61156__$1;
(statearr_61163_61178[(2)] = inst_61152);

(statearr_61163_61178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61157 === (8))){
var inst_61148 = (state_61156[(2)]);
var state_61156__$1 = (function (){var statearr_61164 = state_61156;
(statearr_61164[(8)] = inst_61148);

return statearr_61164;
})();
var statearr_61165_61179 = state_61156__$1;
(statearr_61165_61179[(2)] = null);

(statearr_61165_61179[(1)] = (2));


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
});})(c__53134__auto___61173,ch))
;
return ((function (switch__53020__auto__,c__53134__auto___61173,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__53021__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__53021__auto____0 = (function (){
var statearr_61169 = [null,null,null,null,null,null,null,null,null];
(statearr_61169[(0)] = figwheel$client$heads_up_plugin_$_state_machine__53021__auto__);

(statearr_61169[(1)] = (1));

return statearr_61169;
});
var figwheel$client$heads_up_plugin_$_state_machine__53021__auto____1 = (function (state_61156){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_61156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e61170){if((e61170 instanceof Object)){
var ex__53024__auto__ = e61170;
var statearr_61171_61180 = state_61156;
(statearr_61171_61180[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61181 = state_61156;
state_61156 = G__61181;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__53021__auto__ = function(state_61156){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__53021__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__53021__auto____1.call(this,state_61156);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__53021__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__53021__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto___61173,ch))
})();
var state__53136__auto__ = (function (){var statearr_61172 = f__53135__auto__.call(null);
(statearr_61172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto___61173);

return statearr_61172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto___61173,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__){
return (function (state_61202){
var state_val_61203 = (state_61202[(1)]);
if((state_val_61203 === (1))){
var inst_61197 = cljs.core.async.timeout.call(null,(3000));
var state_61202__$1 = state_61202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61202__$1,(2),inst_61197);
} else {
if((state_val_61203 === (2))){
var inst_61199 = (state_61202[(2)]);
var inst_61200 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_61202__$1 = (function (){var statearr_61204 = state_61202;
(statearr_61204[(7)] = inst_61199);

return statearr_61204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61202__$1,inst_61200);
} else {
return null;
}
}
});})(c__53134__auto__))
;
return ((function (switch__53020__auto__,c__53134__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__53021__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__53021__auto____0 = (function (){
var statearr_61208 = [null,null,null,null,null,null,null,null];
(statearr_61208[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__53021__auto__);

(statearr_61208[(1)] = (1));

return statearr_61208;
});
var figwheel$client$enforce_project_plugin_$_state_machine__53021__auto____1 = (function (state_61202){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_61202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e61209){if((e61209 instanceof Object)){
var ex__53024__auto__ = e61209;
var statearr_61210_61212 = state_61202;
(statearr_61210_61212[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61213 = state_61202;
state_61202 = G__61213;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__53021__auto__ = function(state_61202){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__53021__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__53021__auto____1.call(this,state_61202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__53021__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__53021__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__))
})();
var state__53136__auto__ = (function (){var statearr_61211 = f__53135__auto__.call(null);
(statearr_61211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_61211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__))
);

return c__53134__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__53134__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53134__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__53135__auto__ = (function (){var switch__53020__auto__ = ((function (c__53134__auto__,figwheel_version,temp__5278__auto__){
return (function (state_61236){
var state_val_61237 = (state_61236[(1)]);
if((state_val_61237 === (1))){
var inst_61230 = cljs.core.async.timeout.call(null,(2000));
var state_61236__$1 = state_61236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61236__$1,(2),inst_61230);
} else {
if((state_val_61237 === (2))){
var inst_61232 = (state_61236[(2)]);
var inst_61233 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_61234 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_61233);
var state_61236__$1 = (function (){var statearr_61238 = state_61236;
(statearr_61238[(7)] = inst_61232);

return statearr_61238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61236__$1,inst_61234);
} else {
return null;
}
}
});})(c__53134__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__53020__auto__,c__53134__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto____0 = (function (){
var statearr_61242 = [null,null,null,null,null,null,null,null];
(statearr_61242[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto__);

(statearr_61242[(1)] = (1));

return statearr_61242;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto____1 = (function (state_61236){
while(true){
var ret_value__53022__auto__ = (function (){try{while(true){
var result__53023__auto__ = switch__53020__auto__.call(null,state_61236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53023__auto__;
}
break;
}
}catch (e61243){if((e61243 instanceof Object)){
var ex__53024__auto__ = e61243;
var statearr_61244_61246 = state_61236;
(statearr_61244_61246[(5)] = ex__53024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61247 = state_61236;
state_61236 = G__61247;
continue;
} else {
return ret_value__53022__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto__ = function(state_61236){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto____1.call(this,state_61236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53021__auto__;
})()
;})(switch__53020__auto__,c__53134__auto__,figwheel_version,temp__5278__auto__))
})();
var state__53136__auto__ = (function (){var statearr_61245 = f__53135__auto__.call(null);
(statearr_61245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53134__auto__);

return statearr_61245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53136__auto__);
});})(c__53134__auto__,figwheel_version,temp__5278__auto__))
);

return c__53134__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__61248){
var map__61252 = p__61248;
var map__61252__$1 = ((((!((map__61252 == null)))?((((map__61252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61252):map__61252);
var file = cljs.core.get.call(null,map__61252__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__61252__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__61252__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__61254 = "";
var G__61254__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61254),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__61254);
var G__61254__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61254__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__61254__$1);
if(cljs.core.truth_((function (){var and__45412__auto__ = line;
if(cljs.core.truth_(and__45412__auto__)){
return column;
} else {
return and__45412__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61254__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__61254__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__61255){
var map__61262 = p__61255;
var map__61262__$1 = ((((!((map__61262 == null)))?((((map__61262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61262):map__61262);
var ed = map__61262__$1;
var formatted_exception = cljs.core.get.call(null,map__61262__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__61262__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__61262__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__61264_61268 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__61265_61269 = null;
var count__61266_61270 = (0);
var i__61267_61271 = (0);
while(true){
if((i__61267_61271 < count__61266_61270)){
var msg_61272 = cljs.core._nth.call(null,chunk__61265_61269,i__61267_61271);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_61272);

var G__61273 = seq__61264_61268;
var G__61274 = chunk__61265_61269;
var G__61275 = count__61266_61270;
var G__61276 = (i__61267_61271 + (1));
seq__61264_61268 = G__61273;
chunk__61265_61269 = G__61274;
count__61266_61270 = G__61275;
i__61267_61271 = G__61276;
continue;
} else {
var temp__5278__auto___61277 = cljs.core.seq.call(null,seq__61264_61268);
if(temp__5278__auto___61277){
var seq__61264_61278__$1 = temp__5278__auto___61277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61264_61278__$1)){
var c__46335__auto___61279 = cljs.core.chunk_first.call(null,seq__61264_61278__$1);
var G__61280 = cljs.core.chunk_rest.call(null,seq__61264_61278__$1);
var G__61281 = c__46335__auto___61279;
var G__61282 = cljs.core.count.call(null,c__46335__auto___61279);
var G__61283 = (0);
seq__61264_61268 = G__61280;
chunk__61265_61269 = G__61281;
count__61266_61270 = G__61282;
i__61267_61271 = G__61283;
continue;
} else {
var msg_61284 = cljs.core.first.call(null,seq__61264_61278__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_61284);

var G__61285 = cljs.core.next.call(null,seq__61264_61278__$1);
var G__61286 = null;
var G__61287 = (0);
var G__61288 = (0);
seq__61264_61268 = G__61285;
chunk__61265_61269 = G__61286;
count__61266_61270 = G__61287;
i__61267_61271 = G__61288;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__61289){
var map__61292 = p__61289;
var map__61292__$1 = ((((!((map__61292 == null)))?((((map__61292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61292):map__61292);
var w = map__61292__$1;
var message = cljs.core.get.call(null,map__61292__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/desktop/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/desktop/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__45412__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__45412__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__45412__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__61304 = cljs.core.seq.call(null,plugins);
var chunk__61305 = null;
var count__61306 = (0);
var i__61307 = (0);
while(true){
if((i__61307 < count__61306)){
var vec__61308 = cljs.core._nth.call(null,chunk__61305,i__61307);
var k = cljs.core.nth.call(null,vec__61308,(0),null);
var plugin = cljs.core.nth.call(null,vec__61308,(1),null);
if(cljs.core.truth_(plugin)){
var pl_61314 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__61304,chunk__61305,count__61306,i__61307,pl_61314,vec__61308,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_61314.call(null,msg_hist);
});})(seq__61304,chunk__61305,count__61306,i__61307,pl_61314,vec__61308,k,plugin))
);
} else {
}

var G__61315 = seq__61304;
var G__61316 = chunk__61305;
var G__61317 = count__61306;
var G__61318 = (i__61307 + (1));
seq__61304 = G__61315;
chunk__61305 = G__61316;
count__61306 = G__61317;
i__61307 = G__61318;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__61304);
if(temp__5278__auto__){
var seq__61304__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61304__$1)){
var c__46335__auto__ = cljs.core.chunk_first.call(null,seq__61304__$1);
var G__61319 = cljs.core.chunk_rest.call(null,seq__61304__$1);
var G__61320 = c__46335__auto__;
var G__61321 = cljs.core.count.call(null,c__46335__auto__);
var G__61322 = (0);
seq__61304 = G__61319;
chunk__61305 = G__61320;
count__61306 = G__61321;
i__61307 = G__61322;
continue;
} else {
var vec__61311 = cljs.core.first.call(null,seq__61304__$1);
var k = cljs.core.nth.call(null,vec__61311,(0),null);
var plugin = cljs.core.nth.call(null,vec__61311,(1),null);
if(cljs.core.truth_(plugin)){
var pl_61323 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__61304,chunk__61305,count__61306,i__61307,pl_61323,vec__61311,k,plugin,seq__61304__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_61323.call(null,msg_hist);
});})(seq__61304,chunk__61305,count__61306,i__61307,pl_61323,vec__61311,k,plugin,seq__61304__$1,temp__5278__auto__))
);
} else {
}

var G__61324 = cljs.core.next.call(null,seq__61304__$1);
var G__61325 = null;
var G__61326 = (0);
var G__61327 = (0);
seq__61304 = G__61324;
chunk__61305 = G__61325;
count__61306 = G__61326;
i__61307 = G__61327;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args61328 = [];
var len__46645__auto___61335 = arguments.length;
var i__46646__auto___61336 = (0);
while(true){
if((i__46646__auto___61336 < len__46645__auto___61335)){
args61328.push((arguments[i__46646__auto___61336]));

var G__61337 = (i__46646__auto___61336 + (1));
i__46646__auto___61336 = G__61337;
continue;
} else {
}
break;
}

var G__61330 = args61328.length;
switch (G__61330) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61328.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__61331_61339 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__61332_61340 = null;
var count__61333_61341 = (0);
var i__61334_61342 = (0);
while(true){
if((i__61334_61342 < count__61333_61341)){
var msg_61343 = cljs.core._nth.call(null,chunk__61332_61340,i__61334_61342);
figwheel.client.socket.handle_incoming_message.call(null,msg_61343);

var G__61344 = seq__61331_61339;
var G__61345 = chunk__61332_61340;
var G__61346 = count__61333_61341;
var G__61347 = (i__61334_61342 + (1));
seq__61331_61339 = G__61344;
chunk__61332_61340 = G__61345;
count__61333_61341 = G__61346;
i__61334_61342 = G__61347;
continue;
} else {
var temp__5278__auto___61348 = cljs.core.seq.call(null,seq__61331_61339);
if(temp__5278__auto___61348){
var seq__61331_61349__$1 = temp__5278__auto___61348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61331_61349__$1)){
var c__46335__auto___61350 = cljs.core.chunk_first.call(null,seq__61331_61349__$1);
var G__61351 = cljs.core.chunk_rest.call(null,seq__61331_61349__$1);
var G__61352 = c__46335__auto___61350;
var G__61353 = cljs.core.count.call(null,c__46335__auto___61350);
var G__61354 = (0);
seq__61331_61339 = G__61351;
chunk__61332_61340 = G__61352;
count__61333_61341 = G__61353;
i__61334_61342 = G__61354;
continue;
} else {
var msg_61355 = cljs.core.first.call(null,seq__61331_61349__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_61355);

var G__61356 = cljs.core.next.call(null,seq__61331_61349__$1);
var G__61357 = null;
var G__61358 = (0);
var G__61359 = (0);
seq__61331_61339 = G__61356;
chunk__61332_61340 = G__61357;
count__61333_61341 = G__61358;
i__61334_61342 = G__61359;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__46652__auto__ = [];
var len__46645__auto___61364 = arguments.length;
var i__46646__auto___61365 = (0);
while(true){
if((i__46646__auto___61365 < len__46645__auto___61364)){
args__46652__auto__.push((arguments[i__46646__auto___61365]));

var G__61366 = (i__46646__auto___61365 + (1));
i__46646__auto___61365 = G__61366;
continue;
} else {
}
break;
}

var argseq__46653__auto__ = ((((0) < args__46652__auto__.length))?(new cljs.core.IndexedSeq(args__46652__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__46653__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__61361){
var map__61362 = p__61361;
var map__61362__$1 = ((((!((map__61362 == null)))?((((map__61362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61362):map__61362);
var opts = map__61362__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq61360){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61360));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e61368){if((e61368 instanceof Error)){
var e = e61368;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e61368;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__61372){
var map__61373 = p__61372;
var map__61373__$1 = ((((!((map__61373 == null)))?((((map__61373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61373):map__61373);
var msg_name = cljs.core.get.call(null,map__61373__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1498049884467