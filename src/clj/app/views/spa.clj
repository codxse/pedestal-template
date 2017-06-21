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
      [:h1 "Loading.."]
      [:img {:src "img/logo.png"}]]
     (h/include-js "js/compiled/desktop/app.js")
     [:script {:type "text/javascript"} "app.system.go();"]]))

(defn mobile [title]
  (h/html5
    {:lang "en"}
    [:head
     [:title title]
     (h/include-css "//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css")]
    [:body
     [:div#app
      [:h1 "Loading.."]]
     (h/include-js"js/compiled/mobile/app.js")
     [:script {:type "text/javascript"} "app.system.go();"]]))