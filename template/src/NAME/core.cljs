(ns NAME.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defonce state (r/atom {}))

(defn component-main [state]
  [:div
   [:h1 "Hello world"]
   [:p "Welcome to your app!"]
   [:button {:on-click #(js/alert "Hello world!")} "click me"]])

(defn start {:dev/after-load true} []
  (rdom/render [component-main state]
               (js/document.getElementById "app")))

(defn init []
  (start))
