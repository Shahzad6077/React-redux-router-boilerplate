import React, { createContext, useContext, useState } from "react";

const uiContext = createContext();

export function ProvideUi({ children }) {
  const data = useProviderUi();
  return <uiContext.Provider value={data}>{children}</uiContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useUiSettings = () => {
  return useContext(uiContext);
};

const useProviderUi = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sidebarOpenToggler = () => {
    setSidebarOpen((prev) => !prev);
  };

  return { isSidebarOpen, postModalToggler };
};
