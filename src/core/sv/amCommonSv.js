
import amServerSv from "./amServerSv";

/**
 * 공통 Sv
 */
export default {
    /**
     * 얼럿
     * @param {object} obj this
     * @param {string} title 제목
     * @param {string} msg 내용
     * @param type
     * @param usehtml
     * @param callback
     */
    alert(obj, title, msg, type = 'primary', usehtml = false, callback) {
        obj.$alert(msg, title, {
            dangerouslyUseHTMLString: usehtml,
            confirmButtonText: '확인',
            type: type,
            callback: callback
        });
    },

    /**
     * toast 보여줌
     * @param {object} obj this
     * @param {string} title 제목
     * @param {string} msg 내용
     * @param {string} type 타입 (success, warning, info, error)
     * @param {number} duration 사라짐속도
     */
    notify(obj, title, msg, type = 'success', duration = 3000) {
        obj.$notify({
            title: title,
            message: msg,
            type: type,
            duration: duration
        });
    },

    /**
     * 타겟 보임 유무
     * @param {boolean} target 타겟
     */
    showAndHide(target) {
        return !target
    },

    /**
     * 내림차순 정렬
     * @param list
     * @param field
     */
    sorting(list, field) {
        list.sort(function (a, b) {
            return b[field] - a[field];
        });
    },

    arrayContains (list,key) {

        let returnItem = {};
        let returnBool = true;

        for(let item of list) {
            if (returnBool) {
                if (item.key === key) {
                    returnItem = item;
                    break;
                }
            }
        }

        return returnItem;
    },

    /**
     * 한글을 2바이트 씩 계산하여 입력받은 문자열이 DB에 저장될 때 총 몇바이트를 차지하는지 계산한다.
     * 엔터(\r\n)는 2바이트를 차지한다.
     * @param val : 입력받은 문자열
     */
    getByteLength(val)
    {
        // 입력받은 문자열을 escape() 를 이용하여 변환한다.
        // 변환한 문자열 중 유니코드(한글 등)는 공통적으로 %uxxxx로 변환된다.
        let temp_estr = escape(val);
        let s_index = 0;
        let e_index = 0;
        let temp_str = '';
        let cnt = 0;

        // 문자열 중에서 유니코드를 찾아 제거하면서 갯수를 센다.
        while ((e_index = temp_estr.indexOf('%u', s_index)) >= 0)  // 제거할 문자열이 존재한다면
        {
            temp_str += temp_estr.substring(s_index, e_index);
            s_index = e_index + 6;
            cnt++;
        }

        temp_str += temp_estr.substring(s_index);

        temp_str = unescape(temp_str);  // 원래 문자열로 바꾼다.

        // 유니코드는 2바이트 씩 계산하고 나머지는 1바이트씩 계산한다.
        return ((cnt * 2) + temp_str.length) + '';
    },

    /**
     * 중복 객체 삭제 배열 리턴
     * @param arr 비교 배열
     * @param key 비교 key
     */
    trim(arr, key) {
        let values = {};
        return arr.filter(function(item){
            let val = item[key];
            let exists = values[val];
            values[val] = true;
            return !exists;
        });
    },
    payappLogin (self,id,sellerType){
        amServerSv.post(`/api/am/outside/payappLogin/`,{id:id,sellerType:sellerType}).then(d=>{
            if(d.data.success)
            {
                self.$refs.payappForm.payappFormSubmit(d.data.mapData);
            }
        });

    },
    pagingInfo(thisObj,res) {
        thisObj.totalPages = res.data.data.totalPages;
        thisObj.currPage = res.data.data.number + 1;
        thisObj.listData = res.data.data;
    },
    pageInfo(listData,i) {
        return listData.totalElements - (listData.size * listData.number) - i;
    },
    move (props,url,data){
        props.history.push({
            pathname: url,
            state: data
          });
    }
}
