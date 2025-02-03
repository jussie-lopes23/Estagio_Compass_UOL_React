import React, { createContext, useState, ReactNode } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

type CarrinhoContextType = {
  carrinho: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addTCarrinho: (product: Product) => void;
  AtualizarQTD: (id: string, quantity: number) => void;
  removerProduto: (id: string) => void;
  limparCarrinho: () => void;
  totalPrice: number;
};

export const CartContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCart] = useState<Product[]>([]);

  const addTCarrinho = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const AtualizarQTD = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removerProduto = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const limparCarrinho = () => {
    setCart([]);
  };

  const totalPrice = carrinho.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ carrinho, setCart, addTCarrinho, AtualizarQTD, removerProduto, limparCarrinho, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};