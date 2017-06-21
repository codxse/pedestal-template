(ns dev
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [environ.core :as environ]
            [figwheel-sidecar.config :as fw-config]
            [figwheel-sidecar.system :as fw-system]
            [figwheel-sidecar.repl-api :as fw]
            [app.system :refer [system]]))

;; --- ENVIRONMENT SETUP ---

(defn- config-file [path-from-root]
  (let [cfg-file (io/file path-from-root)]
    (if (.exists cfg-file)
      (edn/read-string (slurp cfg-file))
      {})))

(defn- config [profile]
  (get (config-file "resources/config.edn") profile))

(def env (or (config (-> environ/env :profile edn/read-string)) {}))

;; --- FIGWHEEL SETUP ---

(defn dev-system []
  (assoc (system env)
    :figwheel-system (fw-system/figwheel-system (fw-config/fetch-config))
    :css-watcher (fw-system/css-watcher {:watch-paths ["resources/public/css"]})))

(defn cljs-repl [system]
  (fw-system/cljs-repl (:figwheel-system system)))



