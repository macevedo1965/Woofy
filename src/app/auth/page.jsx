"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import Input from "./_components/Input";

const AuthPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("register");

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const register = useCallback(async () => {
    try {
      const data = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Error during registration:", error);
    }
  }, [email, password, name]);

  const login = useCallback(async () => {
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      console.log("response", response);
      if (response.ok) {
        toast.success("Inicio de sesión exitoso");
        router.push(response.url || "/");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Error during login:", error);
    }
  }, [email, password]);

  return (
    <div className="flex w-full h-screen items-center justify-center bg-[url('/assets/images/bg-auth/bg-08-1366px_x_768px.jpeg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="flex w-full h-full items-center justify-center bg-black/70">
        <div
          className={`flex flex-col w-[400px] items-center justify-start rounded-lg bg-white/50 px-8 py-6 gap-2 ${
            variant === "login" ? "h-[400px]" : "h-[500px]"
          } shadow-lg `}
        >
          <h2 className="text-orange-700 text-4xl font-bold">
            {variant === "login" ? "Iniciar Sesión" : "Registrarse"}
          </h2>
          <div className="flex flex-col w-full justify-center gap-4">
            {/*
                        <div className="bg-neutral-50/50 w-full h-20 flex items-center justify-around rounded-lg">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/images/icons-auth/icons8-google-48.png"
                  alt="Google Icon"
                  width={40}
                  height={400}
                  className="w-10 h-10 object-cover cursor-pointer"
                />
                <span className="text-orange-700 text-xs font-semibold mt-1">
                  Google
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/images/icons-auth/icons8-facebook-nuevo-48.png"
                  alt="Facebook Icon"
                  width={40}
                  height={400}
                  className="w-10 h-10 object-cover cursor-pointer"
                />
                <span className="text-orange-700 text-xs font-semibold mt-1">
                  Facebook
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/images/icons-auth/icons8-instagram-48.png"
                  alt="Instagram Icon"
                  width={40}
                  height={400}
                  className="w-10 h-10 object-cover cursor-pointer"
                />
                <span className="text-orange-700 text-xs font-semibold mt-1">
                  Instagram
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/assets/images/icons-auth/icons8-tiktok-48.png"
                  alt="TikTok Icon"
                  width={40}
                  height={400}
                  className="w-10 h-10 object-cover cursor-pointer"
                />
                <span className="text-orange-700 text-xs font-semibold mt-1">
                  TikTok
                </span>
              </div>
            </div> 
            */}

            <div className="flex flex-col w-full gap-4 mt-4">
              {variant === "register" && (
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Nombre Completo"
                />
              )}
              {/*               {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )} */}

              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Correo Electrónico"
              />
              {/*               {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )} */}
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Contraseña"
              />
              {/*               {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )} */}
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-orange-600 py-3 text-white rounded-lg w-full hover:bg-orange-700 transition cursor-pointer"
            >
              {variant === "login" ? "Iniciar Sesión" : "Registrarse"}
            </button>
            <p className="text-orange-800 mt-2 flex items-center justify-center font-semibold">
              {variant === "login"
                ? "¿Primera vez uando Woofy?"
                : "¿Ya tiene una cuenta?"}
              <span
                onClick={toggleVariant}
                className="text-slate-300 ml-2 hover:underline underline-offset-4 cursor-pointer"
              >
                {variant === "login" ? "Cree una cuenta" : "Inicie Sesión"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
