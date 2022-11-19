//import { useAccountStore } from "@/core/account/accountStore";

const SERVERURL = `https://localhost:7288/api/`;
//const SERVERURL = `/api/`;

const getData = async function (apiCall) {
  let payload = {};
  let headers = buildHeaders();
  try {
    let response = await fetch(`${SERVERURL}${apiCall}`, {
      method: "GET",
      headers: headers,
    });
    payload = await response.json();
  } catch (err) {
    payload = err;
  }
  return payload;
};

const postData = async function (apiCall, data) {
  let payload = JSON.stringify(data);
  let headers = {};
  if (apiCall === "register" || apiCall === "login") {
    headers = { "Content-Type": "application/json; charset=utf-8" };
  } else {
    headers = buildHeaders();
  }
  try {
    let response = await fetch(`${SERVERURL}${apiCall}`, {
      method: "POST",
      headers: headers,
      body: payload,
    });
    payload = await response.json();
  } catch (error) {
    payload = error;
  }
  return payload;
};

const buildHeaders = function () {
  //const accountStore = useAccountStore();
  let myHeaders = new Headers();
  //let token = accountStore.getToken;
  //let token = accountStore.getToken;
  let token = "";
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + token);
  return myHeaders;
};

export default {
  getData,
  postData,
};
