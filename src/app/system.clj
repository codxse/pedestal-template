(ns app.system
  (:require [io.pedestal.http :as http]
            [com.stuartsierra.component :as component]
            [app.server :refer [new-service]]
            [app.routes :refer [routes]]))

(defn system [env]
  (component/system-map
    :service-map {:env                env
                  ::http/routes       routes
                  ::http/type         :immutant
                  ::http/join?        false
                  ::http/port         (or (:api-port env) 5050)}
    :service     (component/using (new-service) [:service-map])))

