import HttpApi from './HttpApi';
import { PaginationRequestParams } from 'api/types/base/request';
import { PaginationResponse } from './types/base/response';
import { BookDtoShort } from './types/books/books';

class BooksApi extends HttpApi {

  getAll = (params?: PaginationRequestParams) => {
    return this.get<PaginationResponse<BookDtoShort>>('/', { params })
  }

}

export default new BooksApi('/api/books');
