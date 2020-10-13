/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Index from '../pages/IndexPage';
import Login from '../pages/LoginPage';
import MemberList from "../pages/member/MemberList";
import Member from "../pages/member/Member";
import Memo from "../pages/memo/Memo";
import MemoList from "../pages/memo/MemoList";
import Contract from "../pages/contract/Contract";
import ContractList from "../pages/contract/ContractList";
import ContractDeleteList from "../pages/contract/ContractDeleteList";
import Approval from "../pages/approval/Approval";
import ApprovalList from "../pages/approval/ApprovalList";
import Calc from "../pages/calc/Calc";
import CalcList from "../pages/calc/CalcList";
import CalcInsert from "../pages/calc/CalcInsert";
import Etc from "../pages/board/Board";
import BoardList from "../pages/board/BoardList";
import BoardInsert from "../pages/board/BoardInsert";
import Board from "../pages/board/Board";
import ContractCommonList from "../pages/etc/ContractCommonList";
import TelegramSendList from "../pages/etc/TelegramSendList";
import SmsSendList from "../pages/etc/SmsSendList";

class IndexRouter extends React.Component{

    render(){
        return (
            <BrowserRouter>
                <Route path="/login" component={Login}/>
                <Route path="/" exact={true} component={Index}/>
                <Route path="/member" exact={true} component={Member}/>
                <Route path="/member/list" exact={true} component={MemberList}/>
                <Route path="/memo" exact={true} component={Memo}/>
                <Route path="/memo/list" exact={true} component={MemoList}/>
                <Route path="/contract" exact={true} component={Contract}/>
                <Route path="/contract/list" exact={true} component={ContractList}/>
                <Route path="/contract/deleteList" exact={true} component={ContractDeleteList}/>
                <Route path="/approval" exact={true} component={Approval}/>
                <Route path="/approval/list" exact={true} component={ApprovalList}/>
                <Route path="/calc" exact={true} component={Calc}/>
                <Route path="/calc/list" exact={true} component={CalcList}/>
                <Route path="/calc/insert" exact={true} component={CalcInsert}/>
                <Route path="/board" exact={true} component={Board}/>
                <Route path="/board/list" exact={true} component={BoardList}/>
                <Route path="/board/insert" exact={true} component={BoardInsert}/>

                <Route path="/etc" exact={true} component={Etc}/>
                <Route path="/etc/smsSendList" exact={true} component={SmsSendList}/>
                <Route path="/etc/telegramSendList" exact={true} component={TelegramSendList}/>
                <Route path="/etc/contractCommonList" exact={true} component={ContractCommonList}/>
 {/*               <Route path="/am/test1" exact={false} component={Test1}/>
                <Route path="/am/board" exact={false} component={Board}/>
                <Route path="/am/test1Sub" exact={false} component={Test1Sub}/>
                <Route path="/am/test1Sub/:id" exact={false} component={Test1Sub}/>
                <Route path="/am/test2" exact={true} component={Test2}/>*/}
            </BrowserRouter>
        );
    }
};

export default IndexRouter;
