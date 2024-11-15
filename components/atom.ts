import { atom } from "recoil";
export const dropLangAtom = atom<boolean>({
  key: "dropLangAtom",
  default: false,
});

export const mobileMenuAtom = atom<boolean>({
  key: "mobileMenuAtom",
  default: false,
});

export const menuBGAtom = atom<boolean>({
  key: "menuBGAtom",
  default: false,
});