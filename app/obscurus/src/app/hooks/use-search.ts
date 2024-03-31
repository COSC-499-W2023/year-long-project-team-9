import { atom, useAtom } from 'jotai';

type SearchState = {
  search: string | null;
};

const searchAtom = atom<SearchState>({
  search: null,
});

export function useSearch() {
  return useAtom(searchAtom);
}
