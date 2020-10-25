import HttpApi from './HttpApi';
import { PaginationRequestParams } from 'api/types/base/request';
import { PaginationResponse } from './types/base/response';
import { GenreDto } from './types/books/genres';

class GenresApi extends HttpApi {

  getAll = (params?: PaginationRequestParams) => {
    return this.get<PaginationResponse<GenreDto>>('/', { params })
  }

}

export default new GenresApi('/api/genres');
