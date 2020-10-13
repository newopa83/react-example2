import React from 'react';
import Layout from "../../components/inc/Layout";
import BoardSubHeader from "../../components/inc/board/BoardSubHeader";

const BoardList = () => {

    return (
        <Layout>
            <BoardSubHeader/>
            <div className="contents">
                <div>게시판 리스트</div>
            </div>
        </Layout>
    )
};

export default BoardList;
