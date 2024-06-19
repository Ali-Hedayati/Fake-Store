import axios from "axios";

export default axios.create({
  baseURL: "https://fakestoreapi.com",
});

export interface FetchResponse<T> {
  data: T[];
}
