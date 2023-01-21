import React, { Suspense } from "react";

import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/reset.css';
import 'tw-elements';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import "./assets/css/tailwind.output.css";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import ThemedSuspense from "./components/ThemedSuspense.jsx";
import { Windmill } from "@windmill/react-ui";
import windmillTheme from "./windmillTheme";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <SidebarProvider>
                  <Suspense fallback={<ThemedSuspense />}>
                      <Windmill usePreferences theme={windmillTheme}>
                          <App />
                      </Windmill>
                  </Suspense>
              </SidebarProvider>,
          </Provider>
      </BrowserRouter>
     </React.StrictMode>
)
