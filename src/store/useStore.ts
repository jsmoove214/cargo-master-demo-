import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  membership: 'free' | 'base' | 'pro' | 'enterprise';
}

interface Order {
  id: string;
  customer: string;
  type: string;
  items: string[];
  status: string;
  location: string;
  createdAt: string;
}

interface AppState {
  user: User | null;
  orders: Order[];
  inventory: any[];
  suppliers: any[];
  documents: any[];
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
  clearData: () => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      orders: [],
      inventory: [],
      suppliers: [],
      documents: [],
      isAuthenticated: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
      
      setOrders: (orders) => set({ orders }),
      
      addOrder: (order) => set((state) => ({ 
        orders: [order, ...state.orders] 
      })),

      clearData: () => set((state) => {
        if (!state.user || state.user.membership === 'free') {
          return {
            orders: [],
            inventory: [],
            suppliers: [],
            documents: []
          };
        }
        return state;
      }),

      login: async (email: string, _password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        const mockUser = {
          id: '1',
          email,
          membership: 'free' as const
        };
        set({ user: mockUser, isAuthenticated: true });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          orders: [],
          inventory: [],
          suppliers: [],
          documents: []
        });
      }
    }),
    {
      name: 'cargo-master-storage',
      partialize: (state) => {
        if (!state.user || state.user.membership === 'free') {
          return {
            user: state.user,
            isAuthenticated: state.isAuthenticated
          };
        }
        return state;
      }
    }
  )
);

export default useStore;