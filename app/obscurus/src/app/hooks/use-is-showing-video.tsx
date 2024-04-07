import { atom, useAtom } from 'jotai';

type ShowingVideoType = {
  active: boolean;
};

const showingVideoAtom = atom<ShowingVideoType>({
  active: false,
});

export function useIsShowingVideo() {
  return useAtom(showingVideoAtom);
}
