import { Toaster } from "sonner";
import { AuthProvider } from "@/providers/AuthProvider";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <Toaster position="top-center" richColors />
      {children}
    </AuthProvider>
  );
};

export default Providers;
