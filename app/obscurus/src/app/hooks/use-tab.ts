import { atom, useAtom } from 'jotai';

type TabState = {
  tab: string | null;
};

const tabAtom = atom<TabState>({
  tab: 'all', // Assuming 'all' is the default value
});

export function useTab() {
  return useAtom(tabAtom);
}
