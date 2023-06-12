import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/LoginLayout"))
  );

  app.component(
    "main-layout",
    defineAsyncComponent(() => import("@/layouts/MainLayout"))
  );
}
