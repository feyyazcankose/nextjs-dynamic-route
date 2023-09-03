import { defaultLang } from "../language";
import { routers } from "./router";

export interface IRouter {
  path: string;
  component: string;
}
export interface IDynamicParameters {
  [key: string]: string;
}

export function urlParamsToObject(
  url: string
): { [key: string]: string } | null {
  if (!url.length) return null;
  const params = url.split("&");
  const result: { [key: string]: string } = {};

  for (const param of params) {
    const [key, value] = param.split("=");
    result[key] = value;
  }

  return result;
}

export const findRoute = (
  url: string
): {
  route: IRouter;
  params: { [key: string]: string };
  query: { [key: string]: string } | null;
} | null => {
  let bestMatch: {
    route: IRouter;
    params: { [key: string]: string };
    query: { [key: string]: string } | null;
  } | null = null;
  const urlSegments: any = url.split("?")[0].split("/") ?? "";
  const queries: any = url.split("?")[1] ?? "";

  if (urlSegments[1] === defaultLang) {
    urlSegments.splice(1, 1);
  }
  for (const route of routers) {
    const routeSegments = route.path.split("/");
    if (routeSegments.length === urlSegments.length) {
      const params: { [key: string]: string } = {};
      let isMatch = true;
      for (let i = 0; i < routeSegments.length; i++) {
        if (
          routeSegments[i] === urlSegments[i] ||
          routeSegments[i].startsWith(":")
        ) {
          if (routeSegments[i].startsWith(":")) {
            const paramName = routeSegments[i].substring(1);
            params[paramName] = urlSegments[i];
          }
        } else {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        if (
          !bestMatch ||
          routeSegments.length > bestMatch.route.path.split("/").length
        ) {
          bestMatch = { route, params, query: urlParamsToObject(queries) };
        }
      }
    }
  }

  return bestMatch;
};
