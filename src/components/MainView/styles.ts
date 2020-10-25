import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 0),
  },

  paper: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3),
  },
}));
