import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ProductVariant } from "@/types/product";

interface CartItem {
  id: string;
  variant: ProductVariant;
  quantity: number;
  extraOption: string;
  price: number; // Base price
  totalPrice: number; // Price including extras
}

interface CartStore {
  items: CartItem[];
  selectedItems: Set<string>;

  // Cart Operations
  addToCart: (variant: ProductVariant, extraOption: string) => void;
  removeFromCart: (id: string) => void;
  removeSelectedItems: () => void;
  updateQuantity: (id: string, change: number) => void;

  // Selection Operations
  toggleSelection: (id: string) => void;
  selectAll: () => void;
  deselectAll: () => void;

  // Getters
  getSelectedCount: () => { selected: number; total: number };
  getTotal: () => number;
  hasItem: (variant: ProductVariant, extraOption: string) => boolean;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      selectedItems: new Set(),

      addToCart: (variant, extraOption) => {
        set((state) => {
          // Check if item already exists
          const existingItem = state.items.find(
            (item) =>
              item.variant.size === variant.size &&
              item.variant.color === variant.color &&
              item.extraOption === extraOption
          );

          if (existingItem) {
            // Update quantity instead of adding new item
            return {
              items: state.items.map((item) =>
                item.id === existingItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          const extraPrice =
            extraOption && variant.extraPrice ? variant.extraPrice : 0;
          const basePrice = variant.price ?? 0;

          return {
            items: [
              ...state.items,
              {
                id: crypto.randomUUID(),
                variant,
                quantity: 1,
                extraOption,
                price: basePrice,
                totalPrice: basePrice + extraPrice,
              },
            ],
          };
        });
      },

      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
          selectedItems: new Set(
            Array.from(state.selectedItems).filter((itemId) => itemId !== id)
          ),
        }));
      },

      removeSelectedItems: () => {
        set((state) => ({
          items: state.items.filter(
            (item) => !state.selectedItems.has(item.id)
          ),
          selectedItems: new Set(),
        }));
      },

      updateQuantity: (id, change) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id !== id) return item;

            const newQuantity = change;
            return {
              ...item,
              quantity: newQuantity,
              totalPrice:
                (item.price +
                  (item.extraOption && item.variant?.extraPrice
                    ? item.variant?.extraPrice
                    : 0)) *
                newQuantity,
            };
          }),
        }));
      },

      toggleSelection: (id) => {
        set((state) => {
          const newSelected = new Set(state.selectedItems);
          if (newSelected.has(id)) {
            newSelected.delete(id);
          } else {
            newSelected.add(id);
          }
          return { selectedItems: newSelected };
        });
      },

      selectAll: () => {
        set((state) => ({
          selectedItems: new Set(state.items.map((item) => item.id)),
        }));
      },

      deselectAll: () => {
        set({ selectedItems: new Set() });
      },

      getSelectedCount: () => {
        const state = get();
        return {
          selected: state.selectedItems.size,
          total: state.items.length,
        };
      },

      getTotal: () => {
        const state = get();
        return state.items
          .filter((item) => state.selectedItems.has(item.id))
          .reduce((total, item) => total + item.totalPrice * item.quantity, 0);
      },

      hasItem: (variant, extraOption) => {
        const state = get();
        return state.items.some(
          (item) =>
            item.variant.size === variant.size &&
            item.variant.color === variant.color &&
            item.extraOption === extraOption
        );
      },
    }),
    {
      name: "29cm-cart-storage",
      partialize: (state) => ({
        ...state,
        selectedItems: Array.from(state.selectedItems),
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.selectedItems = new Set(state.selectedItems);
        }
      },
    }
  )
);
