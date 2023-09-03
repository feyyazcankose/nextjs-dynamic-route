import React, { LazyExoticComponent } from 'react';
import { defaultLang, tLang, languages } from './language';

export const routers: [{ path: string, component: string }] = [
    {
        path: "/",
        component: "index"
    }
]

for (const language of languages) {
    let prefix = language === defaultLang ? "" : "/" + language;
    let t = tLang[language];
    routers.push(...[
        {
            path: `/${language}`,
            component: "Home"
        },
        {
            path: `${prefix}/${t["about"]}`,
            component: "About"
        },
        {
            path: `${prefix}/${t["blog"]}`,
            component: "BlogPage"
        },
        {
            path: `${prefix}/${t["blog"]}/:parameter`,
            component: "BlogDetailPage"
        }
    ])
}

interface ComponentMap {
    [key: string]: LazyExoticComponent<React.ComponentType<any>>;
}

export const componentMap: ComponentMap = {
    "Home": React.lazy(() => import('./pages/index')),
    "About": React.lazy(() => import('./app/pages/About')),
    "BlogPage": React.lazy(() => import('./app/pages/Blog/BlogPage')),
    "BlogDetailPage": React.lazy(() => import('./app/pages/Blog/BlogDetailPage')),
};

