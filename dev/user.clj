(ns user
  (:require [reloaded.repl :as rr]
            [clojure.pprint :refer [pprint]]
            [app.system :refer [system]]
            [dev :refer [env]]))

(rr/set-init! #(system env))

(defn start [] (rr/start))
(defn stop [] (rr/stop))
(defn go [] (rr/go))
(defn reset [] (rr/reset))
(defn reset-all [] (rr/reset-all))

(defn system-map []
  (into {} rr/system))

(defn print-system []
  (pprint (system-map)))