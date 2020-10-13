import React from 'react';
import Layout from "../../components/inc/Layout";
import EtcSubHeader from "../../components/inc/etc/EtcSubHeader";

const SmsSendList = () => {

    return (
        <Layout>
            <EtcSubHeader/>
            <div className="contents">
                <div>문자발송 리스트</div>
            </div>
        </Layout>
    )
};

export default SmsSendList;
