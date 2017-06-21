(ns cljs.user
  (:require [app.core]
            [app.system :as system]))

(def go system/go)
(def reset system/reset)
(def stop system/stop)
(def start system/start)