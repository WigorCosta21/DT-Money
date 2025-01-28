import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContexType {
  transactions: Transaction[];
  fetchTransaction: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionContexType);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransaction = async (query?: string) => {
    const url = new URL("http://localhost:3333/transactions");

    if (query) {
      url.searchParams.append("q", query);
    }

    const response = await fetch(url);
    const data = await response.json();

    setTransactions(data);
  };

  useEffect(() => {
    fetchTransaction();
  }, []);
  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
