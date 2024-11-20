import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/shared/index.css";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./appStore";
import BaseLayout from "./layouts/BaseLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
