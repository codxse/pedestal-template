// Compiled by ClojureScript 1.9.562 {}
goog.provide('app.system');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('app.components.ui');
app.system.new_system = (function app$system$new_system(){
return com.stuartsierra.component.system_map.call(null,new cljs.core.Keyword(null,"app-root","app-root",1723856706),app.components.ui.new_ui_component.call(null));
});
app.system.init = (function app$system$init(){
return app.system.system = app.system.new_system.call(null);
});
app.system.start = (function app$system$start(){
return app.system.system = com.stuartsierra.component.start.call(null,app.system.system);
});
app.system.stop = (function app$system$stop(){
return app.system.system = com.stuartsierra.component.stop.call(null,app.system.system);
});
app.system.go = (function app$system$go(){
app.system.init.call(null);

return app.system.start.call(null);
});
goog.exportSymbol('app.system.go', app.system.go);
app.system.reset = (function app$system$reset(){
app.system.stop.call(null);

return app.system.go.call(null);
});

//# sourceMappingURL=system.js.map?rel=1498062435549