## Dosya Yapılandırması

Ana dizindeki `router.tsx` dosyasındaki `componentMap` Objesi içerisine oluşturduğumuz sayfa ile ilişkili olan anahtarları tanımlıyoruz.

```javascript
export const componentMap: ComponentMap = {
  Home: React.lazy(() => import("./pages/index")),
  About: React.lazy(() => import("./app/About")),
  BlogPage: React.lazy(() => import("./app/Blog/BlogPage")),
  BlogDetailPage: React.lazy(() => import("./app/Blog/BlogDetailPage")),
};
```

Yukarıdaki örneklerde "Home" anahtarı "./pages/index" sayfa ile ilişkili, "About" anahtarı "./app/About" sayfa ile ilişkili

## Yol (Route) Yapılandırması

Yolları yapılandırmak için aşağıdaki yöntem kullanılabilir. t["about"] bize içinde bulunduğumuz dilin "about" içeriğini verir. Türkçe için "hakkimizda", İngilizce için "about" olarak gelir. Parametre belirlemek için ise `${prefix}/${t["blog"]}/:parameter` bu şekilde sonuna ":parameter" yazılarak yapılabilir.

```javascript
export const defaultLang: string = "tr";
export const languages: string[] = ["tr", "en"];
export const tLang: { [key: string]: { [key: string]: string } } = {
  en: {
    about: "about",
    blog: "blogs",
  },
  tr: {
    about: "hakkimizda",
    blog: "bloglar",
  },
};

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
        path: `${prefix}/${t["blog"]}/:parameter`,
        component: "BlogDetailPage",
      },
    ]
  );
}
```
