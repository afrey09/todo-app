import { createStyles, Header, Navbar } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    color: theme.colors.gray[0],
    height: '100%',
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
  }
}));

const HeaderComponent = () => {
  const { classes } = useStyles();
  return (
    <Header>
      <Navbar className={classes.navbar}>
          <Link to= '/'>Home</Link>
          <Link to= '/Settings'>Settings</Link>
      </Navbar>
    </Header>
  )
};

export default HeaderComponent;