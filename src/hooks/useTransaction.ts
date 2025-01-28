import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export const useTransaction = () => {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
