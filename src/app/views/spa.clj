(ns app.views.spa
  (:require [hiccup.page :as h]))

(defn desktop [title]
  (h/html5
    {:lang "en"}
    [:head
     [:title title]
     (h/include-css "//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css")]
    [:body
     [:div#app
      [:h1 "Loading.."]]
     [:script {:type "text/javascript" :src "js/compiled/desktop.js"}]
     [:script {:type "text/javascript"} "desktop.system.go();"]]))

(defn mobile [title]
  (h/html5
    {:lang "en"}
    [:head
     [:title title]
     (h/include-css "//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css")]
    [:body
     [:div#app
      [:h1 "Loading.."]]
     [:script {:type "text/javascript" :src "js/compiled/mobile.js"}]
     [:script {:type "text/javascript"} "mobile.system.go();"]]))