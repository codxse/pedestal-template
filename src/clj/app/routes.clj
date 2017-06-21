(ns app.routes
  (:require [io.pedestal.http.route :as route]
            [io.pedestal.http :as http]
            [io.pedestal.http.body-params :refer [body-params]]
            [io.pedestal.http.ring-middlewares :as mdw]
            [clojure.pprint :refer [pprint]]
            [app.util.interceptors :as interceptors]
            [app.views.spa :as views.spa]))

(defn respond-hello [request]
  {:status 200
   :body (str "Hallo " (get-in request [:path-params :name]))
   :headers {}})

(defn respond-spa-desktop [request]
  {:status 200
   :body (views.spa/desktop "Try Out!")
   :headers {}})

(defn display-request [request]
  {:status 200
   :body (with-out-str (pprint request))
   :headers {}})

(def routes
  {"/" {:interceptors      [(body-params) route/query-params]
        :get               [:root         `respond-hello]
        "/display-request" {:get          `display-request}
        "/greet"           {:interceptors [http/html-body]
                            :get          [:about `respond-spa-desktop]}
        "/hello"           {:get          [:hello `respond-hello]
                            "/:name"      {:get [:hello.name `respond-hello]}}
        "/desktop"         {:interceptors [interceptors/inject-no-csp http/html-body]
                            :get          [:desktop `respond-spa-desktop]}}})