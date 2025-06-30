import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useEffect, useContext } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.services';
import { AuthContext } from './components/context/auth.context';
import { Spin } from 'antd';



const App = () => {
  const { setUser, isAppLoading, setisAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, [])

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      //success
      setUser(res.data.user)
    }
    setisAppLoading(false)
  }
  return (
    <>
      {isAppLoading === true
        ? <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)"
        }}
        > <Spin /></div>
        :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    </>

  )
}

export default App
