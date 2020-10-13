import React, {useEffect} from 'react';
import '../css/Index.css';
import {Redirect} from 'react-router-dom';
import SubHeader from "../components/inc/SubHeader";
import Layout from "../components/inc/Layout";
import {useSelector, useDispatch} from "react-redux";
import amAuthSv from "../core/sv/amAuthSv";

const IndexPage = () => {
    if(!amAuthSv.amCheck())
        return <Redirect to="/login"/>;
    else {
        return (
            <Layout>
                <SubHeader/>
                <div className="contents">
                    <div>메인 페이지</div>
                </div>
            </Layout>
        );
    }
};

export default IndexPage;
