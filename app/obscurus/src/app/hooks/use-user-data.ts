// Inside useRequests.js
import { Requests, Submissions } from "@obscurus/database/src/sql.generated";
import { atom, useAtom } from "jotai";



const userDataAtom = atom<any>(null);

export const useUserData = () => useAtom(userDataAtom);
