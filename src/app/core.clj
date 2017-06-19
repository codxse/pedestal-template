(ns app.core
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [com.stuartsierra.component :as component]
            [app.system :refer [system]]))

(defn -main [& args]
  (-> (system (-> (io/file "resources/config.edn")
                  (slurp)
                  (edn/read-string)
                  :prod))
      (component/start)))