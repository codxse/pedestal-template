(ns app.util.interceptors
  (:require [io.pedestal.interceptor.helpers :as interceptor]))

(def inject-no-csp
  "Disable content security policy to avoid js refused to load."
  (interceptor/on-response
    ::no-csp
    (fn [response]
      (assoc-in response [:headers "Content-Security-Policy"] "object-src 'none'"))))

