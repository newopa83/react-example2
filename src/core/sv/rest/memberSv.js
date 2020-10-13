import amServerSv from "../../sv/amServerSv";

export default {
    //= 회원 수정
    async updateMember (member,option = {message : ''}) {
        const res = await amServerSv.put(`/am/api/member/update`, member);
        option.state = true;
        alert((option.message !=='' ? option.message : res.data.message));
    },
    //= 회원 수정 및 관련 document embed 업데이트
    async updateMemberToEmbed (member,subUrl,option = {message : ''}) {
        const res = await amServerSv.put(`/am/api/member${subUrl}/update`, member);
        option.state = true;
        alert((option.message !=='' ? option : res.data.message));
    },
    //= 회원 비밀번호 수정
    async passwordUpdate (data,option = {message : ''}) {
        const res = await amServerSv.post('/am/api/member/updatePw', data);
        option.state = true;
        alert((option.message !=='' ? option.message : res.data.message));
    },
    //= 회원 리스트
    async memberList(self) {

        const res = await amServerSv.post(`/am/api/member/list/${self.page}`, self.searchData);
        return res.data;
    },

    async deleteMember (id,option = {message : ''}) {
        const res = await amServerSv.delete(`/am/api/member/delete/${id}`);
        option.state = true;
        alert((option.message !=='' ? option.message : res.data.message));
    },

    async memberGet (self,id) {
        return await amServerSv.get(`/am/api/member/get/${id}`);
    }
};
