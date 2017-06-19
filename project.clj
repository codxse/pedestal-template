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
                 [com.stuartsierra/component "0.3.2"]
                 [reloaded.repl "0.2.3"]
                 [environ "1.1.0"]
                 [org.slf4j/slf4j-simple "1.7.25"]

                 [hiccup "1.0.5"]]
  :plugins [[lein-environ "1.1.0"]]
  :main app.core
 ; :repl-options {:init-ns user}
  :source-paths ["src" "spec"]
  :target-path "target/%s"
  :profiles {:dev     {:source-paths ["dev"]
                       :jvm-opts ["-Ddev.mode=development"]
                       :env {:profile :dev}}
             :uberjar {:aot :all}})
