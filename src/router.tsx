import React, { LazyExoticComponent } from 'react';
import { defaultLang, lang, languages } from './language';

export const routers: [{ path: string, component: string }] = [
    {
        path: "/",
        component: "index"
    }
]

for (const language of languages) {
    routers.push(...[
        {
            path: `/${language}`,
            component: "Home"
        },
        {
            path: `${language === defaultLang ? "" : "/" + language}/${lang[language]["about"]}`,
            component: "About"
        },
        {
            path: `${language === defaultLang ? "" : "/" + language}/${lang[language]["blog"]}`,
            component: "BlogPage"
        },
        {
            path: `${language === defaultLang ? "" : "/" + language}/${lang[language]["blog"]}/:parameter`,
            component: "BlogDetailPage"
        }
    ])
}

interface ComponentMap {
    [key: string]: LazyExoticComponent<React.ComponentType<any>>;
}

export const componentMap: ComponentMap = {
    "Home": React.lazy(() => import('./pages/index')),
    "About": React.lazy(() => import('./app/About')),
    "BlogPage": React.lazy(() => import('./app/Blog/BlogPage')),
    "BlogDetailPage": React.lazy(() => import('./app/Blog/BlogDetailPage')),
};

