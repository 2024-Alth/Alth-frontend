import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

export interface User {
  token: string;
}

const { persistAtom } = recoilPersist({
  key: "USER",
  storage: localStorage,
});

export const UUid = atom<User>({
  key: "user",
  default: {
    token: "",
  },
  effects_UNSTABLE: [persistAtom],
});
