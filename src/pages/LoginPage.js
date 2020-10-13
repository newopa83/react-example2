import React, {useEffect, useRef} from 'react';
import '../css/login.css';
import '../css/Index.css';
import amLoginSv from "../core/sv/amLoginSv";

const Login = (props) => {

    //const store = useSelector(state=>state);
    //const dispatch = useDispatch();
    const username = useRef('');
    const password = useRef('');

    //= 로그인
    const _login = async () =>{
        const res = await amLoginSv.loginAct({username : username.current.value, password : password.current.value});
        if(res)
        {
          /*  dispatch({
                type: "SET_TOKEN",
                token: res
            });*/
            localStorage.setItem('adminToken',res);
            props.history.push("/");
        }
    };

    const _handleKeyDown = async (e) =>{
        if (e.key === 'Enter') {
            await _login();
        }
    };


    return (
        <div id="login">
            <h3 className="text-center text-white">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="" method="post">
                                <h3 className="text-center text-dark"><i className="fas fa-tint"/>&nbsp; 단비 관리자 로그인</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-dark">아이디:</label><br/>
                                    <input type="text" name="username" id="username" ref={username} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-dark">비밀번호:</label><br/>
                                    <input type="password" name="password" id="password" ref={password}
                                           onKeyDown={_handleKeyDown} className="form-control" />
                                </div>
                                <div className="form-group txt-center">
                                    <input type="button" name="submit" onClick={_login}
                                           className="btn btn-dark btn-lg" value="로그인" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
