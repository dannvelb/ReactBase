import { environment } from "./environment";

export const Endpoints = {
  auth: {
    base: `${environment.urlBase}/auth`,
  },
  task: {
    base: `${environment.urlBase}/task`,
  },
};

export const TokenExcludedEndpoints = ["/api/auth"];
