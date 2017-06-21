// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60099){
var map__60124 = p__60099;
var map__60124__$1 = ((((!((map__60124 == null)))?((((map__60124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60124):map__60124);
var m = map__60124__$1;
var n = cljs.core.get.call(null,map__60124__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__60124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60126_60148 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60127_60149 = null;
var count__60128_60150 = (0);
var i__60129_60151 = (0);
while(true){
if((i__60129_60151 < count__60128_60150)){
var f_60152 = cljs.core._nth.call(null,chunk__60127_60149,i__60129_60151);
cljs.core.println.call(null,"  ",f_60152);

var G__60153 = seq__60126_60148;
var G__60154 = chunk__60127_60149;
var G__60155 = count__60128_60150;
var G__60156 = (i__60129_60151 + (1));
seq__60126_60148 = G__60153;
chunk__60127_60149 = G__60154;
count__60128_60150 = G__60155;
i__60129_60151 = G__60156;
continue;
} else {
var temp__5278__auto___60157 = cljs.core.seq.call(null,seq__60126_60148);
if(temp__5278__auto___60157){
var seq__60126_60158__$1 = temp__5278__auto___60157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60126_60158__$1)){
var c__46335__auto___60159 = cljs.core.chunk_first.call(null,seq__60126_60158__$1);
var G__60160 = cljs.core.chunk_rest.call(null,seq__60126_60158__$1);
var G__60161 = c__46335__auto___60159;
var G__60162 = cljs.core.count.call(null,c__46335__auto___60159);
var G__60163 = (0);
seq__60126_60148 = G__60160;
chunk__60127_60149 = G__60161;
count__60128_60150 = G__60162;
i__60129_60151 = G__60163;
continue;
} else {
var f_60164 = cljs.core.first.call(null,seq__60126_60158__$1);
cljs.core.println.call(null,"  ",f_60164);

var G__60165 = cljs.core.next.call(null,seq__60126_60158__$1);
var G__60166 = null;
var G__60167 = (0);
var G__60168 = (0);
seq__60126_60148 = G__60165;
chunk__60127_60149 = G__60166;
count__60128_60150 = G__60167;
i__60129_60151 = G__60168;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60169 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__45424__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__45424__auto__)){
return or__45424__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_60169);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_60169)))?cljs.core.second.call(null,arglists_60169):arglists_60169));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60130_60170 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60131_60171 = null;
var count__60132_60172 = (0);
var i__60133_60173 = (0);
while(true){
if((i__60133_60173 < count__60132_60172)){
var vec__60134_60174 = cljs.core._nth.call(null,chunk__60131_60171,i__60133_60173);
var name_60175 = cljs.core.nth.call(null,vec__60134_60174,(0),null);
var map__60137_60176 = cljs.core.nth.call(null,vec__60134_60174,(1),null);
var map__60137_60177__$1 = ((((!((map__60137_60176 == null)))?((((map__60137_60176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60137_60176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60137_60176):map__60137_60176);
var doc_60178 = cljs.core.get.call(null,map__60137_60177__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60179 = cljs.core.get.call(null,map__60137_60177__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_60175);

cljs.core.println.call(null," ",arglists_60179);

if(cljs.core.truth_(doc_60178)){
cljs.core.println.call(null," ",doc_60178);
} else {
}

var G__60180 = seq__60130_60170;
var G__60181 = chunk__60131_60171;
var G__60182 = count__60132_60172;
var G__60183 = (i__60133_60173 + (1));
seq__60130_60170 = G__60180;
chunk__60131_60171 = G__60181;
count__60132_60172 = G__60182;
i__60133_60173 = G__60183;
continue;
} else {
var temp__5278__auto___60184 = cljs.core.seq.call(null,seq__60130_60170);
if(temp__5278__auto___60184){
var seq__60130_60185__$1 = temp__5278__auto___60184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60130_60185__$1)){
var c__46335__auto___60186 = cljs.core.chunk_first.call(null,seq__60130_60185__$1);
var G__60187 = cljs.core.chunk_rest.call(null,seq__60130_60185__$1);
var G__60188 = c__46335__auto___60186;
var G__60189 = cljs.core.count.call(null,c__46335__auto___60186);
var G__60190 = (0);
seq__60130_60170 = G__60187;
chunk__60131_60171 = G__60188;
count__60132_60172 = G__60189;
i__60133_60173 = G__60190;
continue;
} else {
var vec__60139_60191 = cljs.core.first.call(null,seq__60130_60185__$1);
var name_60192 = cljs.core.nth.call(null,vec__60139_60191,(0),null);
var map__60142_60193 = cljs.core.nth.call(null,vec__60139_60191,(1),null);
var map__60142_60194__$1 = ((((!((map__60142_60193 == null)))?((((map__60142_60193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60142_60193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60142_60193):map__60142_60193);
var doc_60195 = cljs.core.get.call(null,map__60142_60194__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60196 = cljs.core.get.call(null,map__60142_60194__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_60192);

cljs.core.println.call(null," ",arglists_60196);

if(cljs.core.truth_(doc_60195)){
cljs.core.println.call(null," ",doc_60195);
} else {
}

var G__60197 = cljs.core.next.call(null,seq__60130_60185__$1);
var G__60198 = null;
var G__60199 = (0);
var G__60200 = (0);
seq__60130_60170 = G__60197;
chunk__60131_60171 = G__60198;
count__60132_60172 = G__60199;
i__60133_60173 = G__60200;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__60144 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60145 = null;
var count__60146 = (0);
var i__60147 = (0);
while(true){
if((i__60147 < count__60146)){
var role = cljs.core._nth.call(null,chunk__60145,i__60147);
var temp__5278__auto___60201__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___60201__$1)){
var spec_60202 = temp__5278__auto___60201__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_60202));
} else {
}

var G__60203 = seq__60144;
var G__60204 = chunk__60145;
var G__60205 = count__60146;
var G__60206 = (i__60147 + (1));
seq__60144 = G__60203;
chunk__60145 = G__60204;
count__60146 = G__60205;
i__60147 = G__60206;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__60144);
if(temp__5278__auto____$1){
var seq__60144__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60144__$1)){
var c__46335__auto__ = cljs.core.chunk_first.call(null,seq__60144__$1);
var G__60207 = cljs.core.chunk_rest.call(null,seq__60144__$1);
var G__60208 = c__46335__auto__;
var G__60209 = cljs.core.count.call(null,c__46335__auto__);
var G__60210 = (0);
seq__60144 = G__60207;
chunk__60145 = G__60208;
count__60146 = G__60209;
i__60147 = G__60210;
continue;
} else {
var role = cljs.core.first.call(null,seq__60144__$1);
var temp__5278__auto___60211__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___60211__$2)){
var spec_60212 = temp__5278__auto___60211__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_60212));
} else {
}

var G__60213 = cljs.core.next.call(null,seq__60144__$1);
var G__60214 = null;
var G__60215 = (0);
var G__60216 = (0);
seq__60144 = G__60213;
chunk__60145 = G__60214;
count__60146 = G__60215;
i__60147 = G__60216;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1498049883762