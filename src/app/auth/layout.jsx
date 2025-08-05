import { nunito } from "@/styles/fonts";
import "@/styles/globals.css";

const AuthLayout = ({ children }) => {
  return <div className={`${nunito.className} antialiased`}>{children}</div>;
};

export default AuthLayout;
