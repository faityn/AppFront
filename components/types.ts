export type SubMenuType = {
  subId?: string;
  title?: string;
  link?: string;
};

export type ProductsListType = {
  category?: number;
  content?: string;
  content_en?: string;
  id: number;
  sub_category?: number;
  productFile?: [
    {
      id?: number;
      product_id?: number;
      file_ext?: string;
      file_loc?: string;
      file_name?: string;
    }
  ];
  title?: string;
  title_en?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type BoardListType = {
  title?: string;
  phone?: string;
  id: number;
  master_id: number;
  email?: string;
  address?: string;
  link?: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ContactType = {
  name?: string;
  contact?: string;
  email?: string;
  company_name?: string;
  department?: string;
  subject?: string;
  content?: string;
};
