import { Injectable } from '@angular/core';

@Injectable()
export class PagerService {

  constructor() { }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 20) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;
    startPage = 1;
    endPage = totalPages;
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages =[];
    for (let i=startPage;i<endPage + 1;i++){
      pages.push(i);
    }
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
