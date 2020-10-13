export default {

    move (props,url,data){
        props.history.push({
            pathname: url,
            state: data
          });
    }
}