
import strLib from '../lib/strLib'

/**
 * 날짜 라이브러리
 */
export default {
  /**
   * 날짜 양식 변환
   * @param {Date} d 날짜
   * @param {string} f 양식
   * @return {string} 날짜 양식
   */
  format(d, f) {
    var d = new Date(d);
    var _addZero = n => {
      return n < 10 && n >= 0 ? '0' + n : '' + n;
    };

    if (!d.valueOf()) return " ";

    var weekName = ['일', '월', '화', '수', '목', '금', '토'];
    var h;

    return f.replace(/(yyyy|yy|MM|dd|D|E|hh|mm|ss|a\/p)/gi, function ($1) {
      switch ($1) {
        case 'yyyy':
          return d.getFullYear();
        case 'yy':
          return _addZero((d.getFullYear() % 1000));
        case 'MM':
          return _addZero(d.getMonth() + 1);
        case 'dd':
          return _addZero(d.getDate());
        case 'D':
          return d.getDate();
        case 'E':
          return weekName[d.getDay()];
        case 'HH':
          return _addZero(d.getHours());
        case 'hh':
          return _addZero(((h = d.getHours() % 12) ? h : 12));
        case 'mm':
          return _addZero(d.getMinutes());
        case 'ss':
          return _addZero(d.getSeconds());
        case 'a/p':
          return d.getHours() < 12 ? '오전' : '오후';
        default:
          return $1;
      }
    });
  },

  /**
   * 시작/종료날짜 셋팅
   * @param date
   * @returns {string}
   */
  setStartEndDate(date) {
    let setMonth = date.getMonth() + 1;
    setMonth = setMonth < 10 ? "0" + setMonth : setMonth;
    return date.getFullYear() + "-" + setMonth + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
  },

  /**
   * 0 붙이기
   * @param n
   * @returns {string}
   */
  addZero(n) {
    return n < 10 && n >= 0 ? '0' + n : '' + n;
  },

  /**
   * 오늘날짜가 사이날짜인지 여부 , 날짜없으면 true 반환
   * @param dates
   * @returns {boolean}
   */
  isBetweenDate(dates) {
    if (dates === undefined || (strLib.isNull(dates.startDate) && strLib.isNull(dates.endDate))) return true;

    let currDate = new Date().getTime();

    const startDate = this.toCompatibilityByDate(dates.startDate);
    const endDate = this.toCompatibilityByDate(dates.endDate);
    let sDate = new Date(startDate).getTime();
    let eDate = new Date(endDate).getTime();

    if (currDate > sDate && currDate < eDate) return true;
    else return false
  },

  /**
   * 날짜 포맷 형식 바꾸기 ?
   * @param date
   * @returns {string}
   */
  toCompatibilityByDate(date) {
    let dateString = JSON.stringify(date);
    dateString = dateString.replace(/ /g, "T");
    dateString = dateString.replace(/\"/g, "");

    return dateString.split(".")[0];

  },

  /**
   * 특정날짜가 포함된 2주/4주 날짜 startEndDate
   * @param date 계산할 특정 기준날짜
   * @param lange 주단위 범위 (7,14,21,24)
   * @returns {array} startEndDate
   */
  dateLangeOfSpecificWeek(date, lange) {
    var date = new Date(date);
    var dateLange = [];
    var dayLabel = date.getDay();

    dateLange.push(date.setDate(date.getDate() - dayLabel));
    dateLange.push(date.setDate(date.getDate() + lange - 1));
    return dateLange;
  },

  /**
   * 날짜 더하기
   * @param date
   * @param days
   * @returns {Date}
   */
  addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },

  /**
   * 날짜 더하기
   * @param date
   * @param days
   * @returns {Date}
   */
  addMonth(date) {
    let result = new Date(date);
    result.setMonth(result.getMonth() + 1);
    return result;
  }


}
