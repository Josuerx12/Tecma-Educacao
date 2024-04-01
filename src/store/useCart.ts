import { create } from "zustand";

type CartItem = {
  courseId: string;
  courseName: string;
  courseImg: string;
  duration: string;
  startAt: string;
  value: number;
};

type States = {
  cart: CartItem[];
};

type Actions = {
  addCart: (item: CartItem) => void;
  removeCart: (id: string) => void;
  cleanCart: () => void;
};

export const useCart = create<States & Actions>((set) => ({
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  addCart: (item: CartItem) => {
    set((prev) => {
      const oldCart = [...prev.cart];

      if (item.courseId === String(0) && oldCart.length > 0) {
        return { cart: [item] };
      }

      if (oldCart.find((i) => i.courseId === String(0))) {
        alert("Plano Ilimitado já adicionado no carrinho!");
        return prev;
      }

      if (oldCart.find((i) => i.courseId === item.courseId)) {
        alert("Curso já no carrinho!");
        return prev;
      }

      localStorage.setItem("cart", JSON.stringify([...prev.cart, item]));

      return { cart: [...prev.cart, item] };
    });
  },
  removeCart: (id: string) => {
    set((prev) => {
      const newCart = prev.cart.filter((item) => item.courseId !== id);

      localStorage.removeItem("cart");

      return { cart: newCart };
    });
  },
  cleanCart: () => {
    localStorage.removeItem("cart");
    set(() => ({ cart: [] }));
  },
}));
