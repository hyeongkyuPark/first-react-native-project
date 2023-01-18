import {create} from 'zustand';

export const useUsers = create(set => ({
  data: [],
  setData: (users: any[]) =>
    set((state: {data: any[]}) => {
      state.data = users;
    }),
}));
