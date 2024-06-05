// import { useEffect, useState } from "react";
// import styles from './styles.module.scss';
// import CustomBtn from "../buttons/orangeButton";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Col, Input, Row } from "antd";
// import Logo from '../../assets/icons/logo.jpg'
// import { MailFilled, UserOutlined, KeyOutlined } from '@ant-design/icons';
// const Signup = () => {
//     const win = localStorage;

//     const [name, setName] = useState(win.getItem('name') || '');
//     const [email, setEmail] = useState(win.getItem('email') || '');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchUsers();
//     }, [])

//     const fetchUsers = () => {
//         axios
//         .get('http://localhost:3001/register')
//         .then((res) => {
//             console.log(res.data)
//         })
//     }


//     const handleSubmit = (event:any) => {
//         event.preventDefault();
//         axios.post('http://localhost:3001/register', { email, name, password })
//         .then(() => {
//             alert('Registration Successful')
//             setName('')
//             setEmail('')
//             setPassword('')
//             fetchUsers();
//             navigate('/')
//         })
//         .catch((error) => {
//             console.log('Unable to register user')
//         })

//     }

//     return (
//         <Row className={styles.body} justify={"center"}>
//             <Col span={10}>
//                 <span className={styles.image}>
//                     <img className={styles.logo} src={Logo} />
//                 </span>
//                 <section className={styles.main}>
//                     <p className={styles.head}>Signup</p>
//                     <p className={styles.para}>Enter the credentials to get started.</p>
//                     <form onSubmit={handleSubmit} className={styles.form}>
//                         <div className={styles.input}>
//                             <label className={styles.label} htmlFor="name">Name</label>
//                             <Input className={styles.inputfilled} type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} size="large" prefix={ <UserOutlined/> }/>
//                         </div>
//                         <div className={styles.input}>
//                             <label className={styles.label} htmlFor="email">Email</label>
//                             <Input className={styles.inputfilled} type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} size="large" prefix={<MailFilled/>} />
//                         </div>
//                         <div className={styles.input}>
//                             <label className={styles.label} htmlFor="password">Password</label>
//                             <Input className={styles.inputfilled} type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} size="large" prefix={<KeyOutlined />}/>
//                         </div>
//                         <div className={styles.input}>
//                             <CustomBtn>Sign up</CustomBtn>
//                         </div>
//                     </form>
//                     <p>Already have account?</p>
//                     <Link to="/">
//                         <CustomBtn>Login Securely</CustomBtn>
//                     </Link>
//                 </section>
//             </Col>
//         </Row>
//     )
// }

// export default Signup;
