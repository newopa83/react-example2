import amServerSv from "./amServerSv";

export default {

    //= 로그인
    async loginAct  (loginData) {

        try{
            const res = await amServerSv.login('/auth', loginData);
            if(res.data.state)
                return res.data.token;
        }catch(e){
            alert(e.data.errorMessage);
        }
    }
}
