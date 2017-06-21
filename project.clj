(defproject app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha17"]
                 [org.clojure/core.async "0.3.443"]
                 [io.pedestal/pedestal.service "0.5.2"]
                 [io.pedestal/pedestal.route "0.5.2"]
                 [io.pedestal/pedestal.immutant  "0.5.2"]
                 [io.pedestal/pedestal.jetty "0.5.2"]
                 [com.stuartsierra/component "0.3.2"]
                 [environ "1.1.0"]
                 [org.slf4j/slf4j-simple "1.7.25"]
                 [hiccup "1.0.5"]

                 ;; cljs
                 [org.clojure/clojurescript "1.9.562" :scope "provided"]
                 [org.omcljs/om "1.0.0-beta1"]]
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-environ "1.1.0"]]

  :main app.core
  :repl-options {:init-ns user}
  :source-paths ["src/clj" "src/cljs" "src/cljc" "spec"]
  :target-path "target/%s"

  :figwheel {:server-port 3450
             :css-dirs ["resources/public/css"]  ;; watch and update CSS
             ;:http-server-root "public"         ;; serve static assets from resources/public/
             ;; :server-ip "127.0.0.1"           ;; default

             ;; Start an nREPL server into the running figwheel process. We
             ;; don't do this, instead we do the opposite, running figwheel from
             ;; an nREPL process, see
             ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
             ;; :nrepl-port 7888

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             :server-logfile "log/figwheel.log"}

  :cljsbuild {:builds [{:id "desktop-dev"
                        :source-paths ["src/cljs" "src/cljc" "dev"]
                        :figwheel {:on-jsload "app.system/reset"}
                        :compiler {:main cljs.user
                                   :output-dir "resources/public/js/compiled/desktop/out"
                                   :output-to "resources/public/js/compiled/desktop/app.js"
                                   :asset-path "js/compiled/desktop/out"
                                   :source-map-timestamp true}}

                       {:id "desktop"
                        :source-paths ["src/cljs" "src/cljc"]
                        :compiler {:main app.core
                                   :output-dir "resources/public/js/compiled/desktop"
                                   :output-to "resources/public/js/compiled/desktop/app.js"
                                   :source-map-timestamp true
                                   :optimizations :advanced
                                   :pretty-print false}}]}

  :profiles {:dev {:source-paths ["dev"]
                   :jvm-opts ["-Ddev.mode=development"]
                   :env {:profile :dev}
                   :dependencies [[figwheel "0.5.10"]
                                  [figwheel-sidecar "0.5.10"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [reloaded.repl "0.2.3"]]
                   :plugins [[lein-figwheel "0.5.10"]]}

             :prod {:jvm-opts ["-Ddev.mode=production"]
                    :env {:profile :prod}}

             :test {:jvm-opts ["-Ddev.mode=testing"]
                    :env {:profile :test}}

             :uberjar {:aot :all}})
