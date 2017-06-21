(ns app.system
  (:require [io.pedestal.http :as http]
            [com.stuartsierra.component :as component]
            [app.server :refer [new-service]]
            [app.routes :refer [routes]]
            [io.pedestal.http.ring-middlewares :as middlewares]))

(defn system [config]
  (component/system-map
    :service-map {:config              config
                  ::http/routes        routes
                  ::http/type          :immutant
                  ::http/join?         false
                  ::http/port          (or (:api-port config) 5050)
                  ::http/resource-path "/public"}
    :service (component/using (new-service) [:service-map])))

