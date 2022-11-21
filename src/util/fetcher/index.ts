//import { useAccountStore } from "@/core/account/accountStore";

const SERVERURL = `https://localhost:7288/api/`;
//const SERVERURL = `/api/`;

interface ApiResponse {
  success: boolean;
  message: string;
  data: object;
}

const getData = async function (apiCall: string) {
  let payload = <ApiResponse>{};
  const headers = buildHeaders();
  try {
    const response = await fetch(`${SERVERURL}${apiCall}`, {
      method: "GET",
      headers: headers,
    });
    payload = await response.json();
  } catch (err: *) {
    if (typeof err === "string") {
      payload.message = err;
    }
  }
  return payload;
};

const postData = async function (apiCall: string, data: object) {
  let payload = JSON.stringify(data);
  let headers = {};
  if (apiCall === "register" || apiCall === "login") {
    headers = { "Content-Type": "application/json; charset=utf-8" };
  } else {
    headers = buildHeaders();
  }
  try {
    const response = await fetch(`${SERVERURL}${apiCall}`, {
      method: "POST",
      headers: headers,
      body: payload,
    });
    payload = await response.json();
  } catch (error: *) {
    if (typeof error === "string") {
      payload = error;
    }
  }
  return payload;
};

const buildHeaders = function () {
  //const accountStore = useAccountStore();
  const myHeaders = new Headers();
  //let token = accountStore.getToken;
  //let token = accountStore.getToken;
  const token = "";
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + token);
  return myHeaders;
};

export default {
  getData,
  postData,
};
