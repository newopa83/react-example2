
export default {
    amCheck() {
        return localStorage.getItem("adminToken") !== 'null' && localStorage.getItem("adminToken") !== null;
    },
    logOut() {
      localStorage.setItem("adminToken",null);
      window.location.href="/";
    }
}
