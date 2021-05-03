import { Children, createContext, ReactNode, useState } from "react";
export interface InstanceContextType {
  keyPair?: any;
  setKeyPair: (keyPair: any) => void;
}

export const InstanceContext = createContext<InstanceContextType>(null);

interface ProviderProps {
  children?: ReactNode;
}
export function InstanceProvider({ children }: ProviderProps) {
  const [keyPair, setKeyPair] = useState<any>(null as any);
  return (
    <InstanceContext.Provider value={{ keyPair, setKeyPair }}>
      {children}
    </InstanceContext.Provider>
  );
}
