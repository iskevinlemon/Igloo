/*
Igloo
Single Page Application (SPA) router for static site.
Developed by: Kevin
https://github.com/iskevinlemon
*/

(function (window) {
  // Selector
  function $$(a) {return document.querySelector(a);}
  window.$Igloo = function (config) {
    document.addEventListener("DOMContentLoaded", function() {
      var DEFAULT_ROUTE = config.default_path;
      var $CurrentRoute = window.location.hash.substring(1);
      if ($CurrentRoute === "") {
        $CurrentRoute = `${config.default}`; // slash(/) path
        if (DEFAULT_ROUTE !== "") {
          $CurrentRoute = DEFAULT_ROUTE;
          window.location.hash = "#" + $CurrentRoute;
        }
      }
      // Specifies which folder all the pages will be stored in
      var VIEWS_FOLDER = config.folder;
      var rootDiv = $$("#_igloo");
      // Route scope
      var routeScope = config.scope;
      // Error scope
      var errScope = config.error;
      var loadPage = function (route, changeURL) {
        if (routeScope.includes(route)) {
          var url = VIEWS_FOLDER + "/" + route + ".html";
          fetch(url)
            .then(function (response) {return response.text();})
            .then(function (html) {
              // rootDiv.innerHTML = html;
              rootDiv.innerHTML = `
              <!-- ${route} start-->
              ${html}
              <!-- ${route} end-->`;
              // console.log(`Current route: ${route}`);
              if (changeURL) {
                history.pushState({}, "", route);
              }
            })
            .catch(function (error) {
              console.error("Error fetching page:", error);
            });
        } else {
          var url = VIEWS_FOLDER + "/" + errScope + ".html";
          fetch(url)
            .then(function (response) {
              return response.text();
            })
            .then(function (html) {
              rootDiv.innerHTML = html;
              console.log(`Current route: ${route}`);
              if (changeURL) {
                history.pushState({}, "", route);
              }
            })
            .catch(function (error) {
              console.error("Error fetching page:", error);
            });
        }
      };
      window.addEventListener("popstate", function (event) {
        var currentRoute = window.location.hash.substring(1);
        loadPage(currentRoute, false);
      });
      // Check the current route on page load
      loadPage($CurrentRoute, false);
    });
  };
})(window);
