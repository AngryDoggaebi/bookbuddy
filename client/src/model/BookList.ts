import { PageInfo } from './Pagination';

export interface BookInfo {
  id: string;
  author: string;
  date: string;
  imgSrc: string;
  name: string;
  price: number;
  publisher: string;
  bookmark: boolean;
}

export interface BookList extends PageInfo {
  data: BookInfo[];
}

export interface MyBookList {
  id: number;
  book: {
    id: string;
    author: string;
    date: string;
    imgSrc: string;
    name: string;
    price: number;
    publisher: string;
    category: {
      id: string;
      name: string;
      link: string;
    };
  };
}

export interface MyBookList {
  id: number;
  book: {
    id: string;
    author: string;
    date: string;
    imgSrc: string;
    name: string;
    price: number;
    publisher: string;
    category: {
      id: string;
      name: string;
      link: string;
    };
  };
}

// export interface BookList {
//   data: {
//     id: string;
//     author: string;
//     date: string;
//     imgSrc: string;
//     name: string;
//     price: number;
//     publisher: string;
//   }[];
//   pageInfo: {
//     page: number;
//     size: number;
//     totalElements: number;
//     totalPages: number;
//   };
// }
