import { atom, useAtom } from 'jotai';

type ProcessedVideoType = {
  url: string;
};

const processedVideoAtom = atom<ProcessedVideoType>({
  url: '',
});

export function useProcessedVideo() {
  return useAtom(processedVideoAtom);
}
