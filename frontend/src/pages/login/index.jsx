import { useEffect, useState } from "react";
import styles from './styles.module.scss';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Input, Row } from "antd";
import Logo from '../../assets/icons/logo.jpg'
import { MailFilled, KeyOutlined } from '@ant-design/icons';

const Login = () => {
    const win = localStorage;

    const [email, setEmail] = useState(win.getItem('email') || '');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios.get('http://localhost:3001/register')
            .then((res) => {
                console.log(res.data)
            })
    }


    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/', { email, password });
            const token = response.data.token;
        
            alert('Login successful');
            setEmail('');
            setPassword('');
            fetchUsers();
            navigate('/home');
            win.setItem('token', token);
          } catch (error) {
            alert(error);
          }
    };

    return (
        <Row className={styles.body} justify={"center"}>
            <Col span={10}>
                <span className={styles.image}>
                    <img className={styles.logo} src={Logo} />
                </span>
                <section className={styles.main}>
                    <p className={styles.head}>Login</p>
                    <p className={styles.para}>Enter the credentials to get started.</p>
                    <form onSubmit={handleLogin} className={styles.form}>
                        <div className={styles.input}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <Input className={styles.inputfilled} type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} size="large" prefix={<MailFilled />} />
                        </div>
                        <div className={styles.input}>
                            <label className={styles.label} htmlFor="password">Password</label>
                            <Input className={styles.inputfilled} type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} size="large" prefix={<KeyOutlined />} />
                        </div>
                        <div className={styles.input}>
                            <CustomBtn>Login</CustomBtn>
                        </div>
                    </form>
                    <p>Create account with us,</p>
                    <Link to="/signup">
                        <CustomBtn>Sign up</CustomBtn>
                    </Link>
                </section>
            </Col>
        </Row>
    )
}

export default Login;
