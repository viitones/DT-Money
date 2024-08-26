import { createContext, ReactNode, useEffect, useState } from "react";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transactions[]
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children } :TransactionProviderProps) {
  const [transactions, seTtransactions] = useState<Transactions[]>([])

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions")
    const data = await response.json()
    seTtransactions(data); 
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }} >
      {children}
    </TransactionsContext.Provider>
  )
}