(ns dev
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [environ.core :as environ]))

;; --- ENVIRONMENT SETUP ---

(defn- config-file [path-from-root]
  (let [cfg-file (io/file path-from-root)]
    (if (.exists cfg-file)
      (edn/read-string (slurp cfg-file))
      {})))

(defn- config [profile]
  (get (config-file "resources/config.edn") profile))

(def env (or (config (-> environ/env :profile edn/read-string)) {}))

