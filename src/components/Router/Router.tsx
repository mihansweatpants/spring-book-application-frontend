import React, { FC } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainView, NotFound, BookView, Layout } from 'components';

const withLayout = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => (props) => (
  <Layout>
    <Component {...props} />
  </Layout>
);

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={withLayout(MainView)} />
        <Route path="/books/create" exact component={() => <>Create book view</>} />
        <Route path="/books/:bookId" exact component={withLayout(BookView)} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
