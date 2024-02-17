import axios from "axios";

const URL = import.meta.env.VITE_API_URL;
export const getLobbies = async () => axios.get(`${URL}get-lobbies`);
