import React, { FC, useState } from 'react';

import { Paper } from '@material-ui/core';

import { MainViewTabs, BooksList, AuthorsList, GenresList } from 'components';
import { MainViewTab } from 'components/types';

import { useStyles } from './styles';

const MainView: FC = () => {
  const styles = useStyles();

  const [activeTab, setActiveTab] = useState(MainViewTab.Books);

  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <MainViewTabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </Paper>

      <Paper className={styles.paper}>
        {activeTab === MainViewTab.Books && <BooksList />}
        {activeTab === MainViewTab.Authors && <AuthorsList />}
        {activeTab === MainViewTab.Genres && <GenresList />}
      </Paper>
    </div>
  );
};

export default MainView;
