"use client";
import "./sass/all.scss";
import Footer from "./components/Footer";
import { logo } from "./json/home";
import { footer } from "./json/footer";
import { store } from "./store/store";
import { Provider } from "react-redux";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
          <Footer footerdata={footer} logo={logo} />
        </Provider>
      </body>
    </html>
  );
}
