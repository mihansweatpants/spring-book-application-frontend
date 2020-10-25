import HttpApi from './HttpApi';
import { PaginationRequestParams } from 'api/types/base/request';
import { PaginationResponse } from './types/base/response';
import { BookDto } from './types/books/books';

class BooksApi extends HttpApi {

  getAll = (params?: PaginationRequestParams) => {
    return this.get<PaginationResponse<BookDto>>('/', { params })
  }

  getById = (bookId: number) => {
    return this.get<BookDto>(`/${bookId}`);
  }

}

export default new BooksApi('/api/books');
