import React from 'react';
import Layout from "../../components/inc/Layout";
import ApprovalSubHeader from "../../components/inc/approval/ApprovalSubHeader";

const ApprovalList = () => {

    return (
        <Layout>
            <ApprovalSubHeader/>
            <div className="contents">
                <div>결제 리스트</div>
            </div>
        </Layout>
    )
};

export default ApprovalList;
