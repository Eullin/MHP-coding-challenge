import axios from "axios";

export default axios.create({
  baseURL: "https://www.anapioficeandfire.com/api/houses",
  params: {
    name: "",
    region: "",
    pageSize: 40,
    page: 5,
    words: ""
  },
  limit: 5,

});

