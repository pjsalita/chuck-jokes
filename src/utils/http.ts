import axios from "axios";
import { apiUrl } from "../constants";

export const http = axios.create({ baseURL: apiUrl });
