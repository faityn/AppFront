import { atom } from "recoil";
import { BoardListType, ProductsListType } from "./types";
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
export const productsListAtom = atom<ProductsListType[]>({
  key: "productsListAtom",
  default: [],
});

export const productsDetailAtom = atom<ProductsListType[]>({
  key: "productsDetailAtom",
  default: [],
});

export const faqListAtom = atom<BoardListType[]>({
  key: "faqListAtom",
  default: [],
});

export const paperDataListAtom = atom<BoardListType[]>({
  key: "paperDataListAtom",
  default: [],
});
