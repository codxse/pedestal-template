(ns figwheel.connect.build-desktop-dev (:require [app.system] [figwheel.client] [figwheel.client.utils] [cljs.user]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/app.system.reset (apply js/app.system.reset x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'app.system/reset' is missing"))), :build-id "desktop-dev", :websocket-url "ws://localhost:3450/figwheel-ws"})

