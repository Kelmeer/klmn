import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Account = {
  name: string;
  email: string;
  specialty: string;
  memberSince: string;
};

type AuthValue = {
  user: Account | null;
  signIn: (email: string) => void;
  signUp: (data: Omit<Account, "memberSince">) => void;
  signOut: () => void;
};

const STORAGE_KEY = "roib.account";
const AuthContext = createContext<AuthValue | null>(null);

function readAccount(): Account | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Account) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Account | null>(readAccount);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const signIn = useCallback((email: string) => {
    const existing = readAccount();
    setUser(
      existing ?? {
        name: email.split("@")[0] || "Член РОИБ",
        email,
        specialty: "Не указана",
        memberSince: new Date().toLocaleDateString("ru-RU", {
          month: "long",
          year: "numeric",
        }),
      },
    );
  }, []);

  const signUp = useCallback((data: Omit<Account, "memberSince">) => {
    setUser({
      ...data,
      memberSince: new Date().toLocaleDateString("ru-RU", {
        month: "long",
        year: "numeric",
      }),
    });
  }, []);

  const signOut = useCallback(() => setUser(null), []);

  const value = useMemo(
    () => ({ user, signIn, signUp, signOut }),
    [user, signIn, signUp, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
