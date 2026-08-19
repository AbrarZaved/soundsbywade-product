import { createBrowserRouter, useRoutes, type RouteObject } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { OverviewPage } from "./pages/OverviewPage";
import { PlatformPage } from "./pages/PlatformPage";
import { ManagementCompaniesPage } from "./pages/ManagementCompaniesPage";
import { PoolBoardsPage } from "./pages/PoolBoardsPage";
import { PoolWebsitesPage } from "./pages/PoolWebsitesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "platform", Component: PlatformPage },
      { path: "management-companies", Component: ManagementCompaniesPage },
      { path: "pool-boards", Component: PoolBoardsPage },
      { path: "pool-websites", Component: PoolWebsitesPage },
      { path: "overview", Component: OverviewPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

export function createAppRouter() {
  return createBrowserRouter(appRoutes);
}

export function AppRoutes() {
  return useRoutes(appRoutes);
}
