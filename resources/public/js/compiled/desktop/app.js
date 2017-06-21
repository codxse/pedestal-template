var CLOSURE_UNCOMPILED_DEFINES = null;
if(typeof goog == "undefined") document.write('<script src="js/compiled/desktop/out/goog/base.js"></script>');
document.write('<script src="js/compiled/desktop/out/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect.build_desktop_dev\"); }</script>");
document.write('<script>goog.require("cljs.user");</script>');