import React from 'react';
import Layout from "../../components/inc/Layout";
import BoardSubHeader from "../../components/inc/board/BoardSubHeader";

const BoardInsert = () => {

    return (
        <Layout>
            <BoardSubHeader/>
            <div className="contents">
                <div>게시글 등록</div>
            </div>
        </Layout>
    )
};

export default BoardInsert;
