import axios from "axios";

const API = axios.create({
	baseURL: process.env.API_URI + "/api",
});

export default API;
