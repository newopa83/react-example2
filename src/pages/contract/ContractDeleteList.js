import React from 'react';
import Layout from "../../components/inc/Layout";
import ContractSubHeader from "../../components/inc/contract/ContractSubHeader";

const ContractDeleteList = () => {
    return(
        <Layout>
            <ContractSubHeader/>
            <div className="contents">
                <div>계약관리 삭제 리스트 페이지</div>
            </div>
        </Layout>
    );
};

export default ContractDeleteList;
