import React, { useContext } from 'react';

import Card from '../../UI/Card';
import styles from './Home.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';

const Home = () => {

  const {onLogout} = useContext(AuthContext);
  // console.log('authCtx:', authCtx);

  return (
          <Card className={styles.home}>
            <h>Welcome back!</h>
            <Button onClick={onLogout}>Logout</Button>
          </Card>
        );
};

export default Home;
