import { Requests, Submissions } from "@obscurus/database/src/sql.generated";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface RequestContextType {
    requests: Requests[];
    setRequests: Dispatch<SetStateAction<Requests[]>>;
    submissions: Submissions[];
    setSubmissions: Dispatch<SetStateAction<Submissions[]>>;
  }

  // Providing default values for the context
  const defaultContextValue: RequestContextType = {
    requests: [],
    setRequests: () => {},
    submissions: [],
    setSubmissions: () => {}
  };

  // Creating the context with default values
const RequestContext = createContext<RequestContextType>(defaultContextValue);

// Custom hook to use the context
export const useRequests = () => useContext(RequestContext);

// Component to provide context values
interface RequestProviderProps {
  children: ReactNode;
}

export const RequestProvider = ({ children }: RequestProviderProps) => {
  const [requests, setRequests] = useState<Requests[]>([]);
  const [submissions, setSubmissions] = useState<Submissions[]>([]);

  return (
    <RequestContext.Provider value={{ requests, setRequests, submissions, setSubmissions }}>
      {children}
    </RequestContext.Provider>
  );
};
