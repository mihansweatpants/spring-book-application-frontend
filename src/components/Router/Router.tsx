import React, { FC } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainView, NotFound } from 'components';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainView} />
        <Route path="/books/create" exact component={() => <>Create book view</>} />
        <Route path="/books/:id" exact component={() => <>Book view</>} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
