import { AuthorDto } from './authors';
import { BookReviewDto } from './bookReviews';
import { GenreDto } from './genres';

export interface BookDtoShort {
  id: number;
  title: string;
  author: AuthorDto;
  genres: GenreDto[];
}

export interface BookDto {
  id: number;
  title: string;
  author: AuthorDto;
  genres: GenreDto[];
  reviews: BookReviewDto[];
}
