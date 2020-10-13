import amServerSv from "../amServerSv";

export default {
    
    async smsSend (data,option = {message : ''}) {
        const res = await amServerSv.post(`/am/api/sms/smsSend`, data);
        option.state = true;
        alert((option.message !=='' ? option : res.data.message));
      },
      async smsList (self) {
        const res = await amServerSv.post(`/am/api/sms/list/${self.page}`, self.searchData);
        return res.data;
      },
  
      async telegramList (self) {
        const res = await amServerSv.post(`/am/api/sms/telegramSendList/${self.page}`, self.searchData);
        return res.data;
      }
};
