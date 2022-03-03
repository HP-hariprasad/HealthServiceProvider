import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Providers from '../components/ProviderContainer';
import ServiceContainer from '../components/ServiceContainer';

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  container: {
    display: 'flex',
    height: "40rem",
    backgroundColor: "#d3d3d3"
  },
  navbar: {
    backgroundColor: 'black'
  },
  service: {
    backgroundColor: 'white',
    height: '39rem',
    width: '25rem',
    marginRight: '10px',
    padding: '1rem',
    textAlign: 'center'
  },
  Provider: {
    height: '39rem',
    width: '100rem',
    backgroundColor: 'white',
    padding: '1rem',
    textAlign: 'center'
  },
}));

const PageLayout = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.service}>
          <>
            <h1>Services</h1>
            <hr />
          </>
          <>
            <ServiceContainer />
          </>
        </div>
        <div className={classes.Provider}>
          <>
            <h1>Providers</h1>
            <hr />
          </>
          <>
            <Providers />
          </>
        </div>
      </div>
    </>
  );
}

export default PageLayout;