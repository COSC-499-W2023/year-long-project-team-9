import { atom, useAtom } from 'jotai';
import { Notifications } from "stack/database/src/sql.generated";

const notificationsAtom = atom<Notifications[] | null>(null);
const hasUnreadNotificationsAtom = atom(false);

export const useNotifications = () => useAtom(notificationsAtom);

export const useHasUnreadNotifications = () => useAtom(hasUnreadNotificationsAtom);
