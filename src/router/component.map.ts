import React, { LazyExoticComponent } from "react";

interface ComponentMap {
  [key: string]: LazyExoticComponent<React.ComponentType<any>>;
}

export const componentMap: ComponentMap = {
  Home: React.lazy(() => import("../pages/index")),
  About: React.lazy(() => import("../app/pages/About")),
  BlogPage: React.lazy(() => import("../app/pages/Blog/BlogPage")),
  BlogDetailPage: React.lazy(() => import("../app/pages/Blog/BlogDetailPage")),
};
