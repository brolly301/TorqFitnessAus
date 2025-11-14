import { User } from "@/types/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

type UserContextType = {
  user: User;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    id: "",
    firstName: "",
    surname: "",
    email: "",
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be inside  UserProvider");
  return context;
};
