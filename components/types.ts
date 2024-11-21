export type SubMenuType = {
  subId?: string;
  title?: string;
  link?: string;
};

export type ProductsListType = {
  category?: number;
  content?: string;
  content_en?: string;

  sub_category?: number;
  productFile?: [
    {
      id?: number;
      product_id?: number;
      file_ext?: string;
      file_loc?: string;
    }
  ];
  title?: string;
  title_en?: string;
  createdAt?: string;
  updatedAt?: string;
};
