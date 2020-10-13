import React from 'react';
import Layout from "../../components/inc/Layout";
import CalcSubHeader from "../../components/inc/calc/CalcSubHeader";

const CalcInsert = () => {
    return(
        <Layout>
            <CalcSubHeader/>
            <div className="contents">
                <div>정산입금 리스트 페이지</div>
            </div>
        </Layout>
    );
};

export default CalcInsert;
