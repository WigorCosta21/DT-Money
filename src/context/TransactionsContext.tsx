import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionImput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContexType {
  transactions: Transaction[];
  fetchTransaction: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionImput) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}
// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionContexType);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransaction = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(
    async (data: CreateTransactionImput) => {
      const { description, category, price, type } = data;

      const respose = await api.post("/transactions", {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      });

      setTransactions((state) => [...state, respose.data]);
    },
    []
  );

  useEffect(() => {
    fetchTransaction();
  }, [fetchTransaction]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransaction, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
