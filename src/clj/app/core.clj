(ns app.core
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [com.stuartsierra.component :as component]
            [environ.core :as environ]
            [app.system :refer [system]]))

(defn -main [& args]
  (-> (system (-> (io/file "resources/config.edn")
                  (slurp)
                  (edn/read-string)
                  ((edn/read-string (:profile environ/env)))))
      (component/start)))