import { atom, useAtom } from 'jotai';

type UploadState = {
  upload: boolean;
};

const uploadAtom = atom<UploadState>({
  upload: false,
});

export function useUpload() {
  return useAtom(uploadAtom);
}
