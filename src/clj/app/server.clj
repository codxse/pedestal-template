(ns app.server
  (:require [io.pedestal.http :as http]
            [com.stuartsierra.component :as component]))

(defrecord Server [service-map service]
  component/Lifecycle
  (start [component]
    (if service
      component
      (-> service-map
          (http/default-interceptors)
          (http/create-server)
          (http/start)
          ((partial assoc component :service)))))
  (stop [component]
    (do (when service
          (http/stop service))
        (assoc component :service nil))))

(defn new-service []
  (map->Server {}))
