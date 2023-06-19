import axios from "axios";

//Creo istanza di Axios generale, evitando ripetizioni
export default axios.create({
  baseURL: "https://ddragon.leagueoflegends.com/cdn",
});
