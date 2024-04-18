// import { create } from "zustand";

// type counterStore = {
//   filteredValue: string;
//   setFilteredValue: (value: string) => void;
//   searchValue: string;
//   setSearchValue: (value: string) => void;
//   badgeCounter: number;
//   setBadgeCounter: () => void;
//   cardId: string[];
//   setCardId: (value: string) => void;
//   removeFromCard: (id: string) => void;
// };
// const useStore = create<counterStore>((set) => ({
//   filteredValue: "All",
//   searchValue: "",
//   badgeCounter: 0,
//   cardId: [],
//   setFilteredValue: (value: string) => {
//     set({ filteredValue: value });
//   },
//   setSearchValue: (value: string) => {
//     set({ searchValue: value });
//   },
//   setBadgeCounter: () => {
//     set((state) => ({ badgeCounter: state.badgeCounter + 1 }));
//   },
//   setCardId: (value: string) => {
//     set((state) => ({ cardId: [...state.cardId, value] }));
//   },
//   removeFromCard: (id: string) => {},
// }));
// export default useStore;

import { create } from "zustand";

type CounterStore = {
  filteredValue: string;
  setFilteredValue: (value: string) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  badgeCounter: number;
  setBadgeCounter: (add: boolean) => void;
  cardId: string[];
  setCardId: (value: string) => void;
  removeFromCard: (id: string) => void;
};

const useStore = create<CounterStore>((set) => ({
  filteredValue: "All",
  searchValue: "",
  badgeCounter: 0,
  cardId: [],
  setFilteredValue: (value: string) => {
    set({ filteredValue: value });
  },
  setSearchValue: (value: string) => {
    set({ searchValue: value });
  },
  setBadgeCounter: (add) => {
    if (add) {
      set((state) => ({ badgeCounter: state.badgeCounter + 1 }));
    } else {
      set((state) => ({ badgeCounter: state.badgeCounter - 1 }));
    }
  },
  setCardId: (value: string) => {
    set((state) => ({ cardId: [...state.cardId, value] }));
  },
  removeFromCard: (id: string) => {
    set((state) => ({
      cardId: state.cardId.filter((itemId) => itemId !== id),
    }));
  },
}));

export default useStore;
