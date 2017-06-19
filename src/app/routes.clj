(ns app.routes
  (:require [io.pedestal.http.route :as route]
            [app.views.spa :as views.spa]))

(defn respond-hello [request]
  {:status 200
   :body "Hello, world!"
   :headers {}})

(defn respond-spa-desktop [request]
  {:status 200
   :body (views.spa/desktop "Try Out!")
   :headers {"Content-Type" "text/html"}})

(def routes
  (route/expand-routes
    #{["/greet" :get respond-hello :route-name :greet]
      ["/hello" :get respond-hello :route-name :hello]
      ["/desktop" :get respond-spa-desktop :route-name :spa-desktop]}))