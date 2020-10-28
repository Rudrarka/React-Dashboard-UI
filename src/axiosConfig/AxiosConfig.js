import Axios from "axios";

const instance = Axios.create({
    baseURL: 'http://ec2-54-175-24-39.compute-1.amazonaws.com:5000'
  })

  export default instance;
