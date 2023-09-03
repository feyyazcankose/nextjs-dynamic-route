import { defaultLang, tLang, languages } from "../language";

export interface IRouter {
  path: string;
  component: string;
}
export interface IDynamicParameters {
  [key: string]: string;
}

export const routers: IRouter[] = [
  {
    path: "/",
    component: "index",
  },
];

for (const language of languages) {
  let prefix = language === defaultLang ? "" : "/" + language;
  let t = tLang[language];
  routers.push(
    ...[
      {
        path: `/${language}`,
        component: "Home",
      },
      {
        path: `${prefix}/${t["about"]}`,
        component: "About",
      },
      {
        path: `${prefix}/${t["blog"]}`,
        component: "BlogPage",
      },
      {
        path: `${prefix}/${t["blog"]}/selam/:parameter`,
        component: "BlogDetailPage",
      },
      {
        path: `${prefix}/${t["blog"]}/:parameter`,
        component: "BlogDetailPage",
      },
      {
        path: `${prefix}/bloglarim/bloglar/bloglarim/canim-bloglarim`,
        component: "BlogPage",
      },
      {
        path: `${prefix}/${t["blog"]}/:parameter/:parameter2`,
        component: "BlogDetailPage",
      },
      {
        path: `${prefix}/${t["blog"]}/:parameter/:parameter2/:parameter3`,
        component: "BlogDetailPage",
      },
    ]
  );
}
