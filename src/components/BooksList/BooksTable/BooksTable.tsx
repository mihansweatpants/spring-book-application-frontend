import React, { FC } from 'react';

import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

import { BookDtoShort } from 'api/types/books/books';

interface Props {
  books: BookDtoShort[];
}

const BooksTable: FC<Props> = ({
  books,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Название</TableCell>
          <TableCell>Автор</TableCell>
          <TableCell>Жанры</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {
          books.map(({ id, title, author, genres }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>{author.name}</TableCell>
              <TableCell>{genres.map(({ name }) => name).join(', ')}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};

export default BooksTable;
