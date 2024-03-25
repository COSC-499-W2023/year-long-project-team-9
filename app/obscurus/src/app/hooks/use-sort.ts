import { atom, useAtom } from 'jotai';

type SortState = {
  sort: string | null;
};

const sortAtom = atom<SortState>({
  sort: null,
});

export function useSort() {
  return useAtom(sortAtom);
}
