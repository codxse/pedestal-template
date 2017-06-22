(ns user
  (:require [reloaded.repl :as rr]
            [clojure.pprint :refer [pprint]]
            [clojure.tools.namespace.repl :refer [set-refresh-dirs]]
            [dev]))

;(set! *print-length* 100)
(set-refresh-dirs "src" "dev")
(rr/set-init! #(dev/dev-system))

(defn start [] (rr/start))
(defn stop [] (rr/stop))
(defn go [] (rr/go))
(defn reset [] (rr/reset))
(defn reset-all [] (rr/reset-all))

(defn cljs-repl []
  (reset-all)
  (dev/cljs-repl rr/system))

(defn system-map []
  (into {} rr/system))

(defn print-system []
  (pprint (system-map)))
