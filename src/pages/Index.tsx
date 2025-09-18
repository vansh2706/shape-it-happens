import { useState } from "react";
import { LoginPage } from "@/components/auth/LoginPage";
import { SignupPage } from "@/components/auth/SignupPage";
import { Dashboard } from "./Dashboard";
import { ConditionalExamples } from "@/components/examples/ConditionalExamples";

type AuthState = "login" | "signup" | "authenticated";

const Index = () => {
  const [authState, setAuthState] = useState<AuthState>("login");

  const handleLogin = () => {
    setAuthState("authenticated");
  };

  const handleSignup = () => {
    setAuthState("authenticated");
  };

  const handleLogout = () => {
    setAuthState("login");
  };

  if (authState === "authenticated") {
    return <Dashboard onLogout={handleLogout} />;
  }

  if (authState === "signup") {
    return (
      <SignupPage
        onSignup={handleSignup}
        onSwitchToLogin={() => setAuthState("login")}
      />
    );
  }

  return <ConditionalExamples />;
};

export default Index;
