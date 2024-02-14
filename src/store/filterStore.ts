import { create } from 'zustand';

import { FILTER_CATEGORY } from '@/constants';

export const useFilterStore = create((set) => ({
  offset: 0,
  tab: null,
  type: null,
  category: null,
  level: null,
  language: null,
  price: null,
  setTab: (tab: (typeof FILTER_CATEGORY)['tab']) =>
    set((state: typeof FILTER_CATEGORY) => ({ ...state, tab })),
  setType: (type: (typeof FILTER_CATEGORY)['type']) =>
    set((state: typeof FILTER_CATEGORY) => ({ ...state, type })),
  setCategory: (category: (typeof FILTER_CATEGORY)['category']) =>
    set((state: typeof FILTER_CATEGORY) => ({ ...state, category })),
  setLevel: (level: (typeof FILTER_CATEGORY)['level']) =>
    set((state: typeof FILTER_CATEGORY) => ({ ...state, level })),
  setLanguage: (language: (typeof FILTER_CATEGORY)['language']) =>
    set((state: typeof FILTER_CATEGORY) => ({ ...state, language })),
  setPrice: (price: (typeof FILTER_CATEGORY)['price']) =>
    set((state: typeof FILTER_CATEGORY) => ({ ...state, price })),

  initFilter: () =>
    set(() => ({
      offset: 0,
      tab: null,
      type: null,
      category: null,
      level: null,
      language: null,
      price: null,
    })),
}));
