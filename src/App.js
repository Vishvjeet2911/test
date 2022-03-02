import React, { useEffect } from "react";
import { SocialIcons } from "./components";
import Routes from "./Routes";
import axios from "axios";
import qs from "query-string";

function App() {
  useEffect(() => {
    getAccessToken({
      grant_type: "client_credentials",
      client_id:
        "33OkryzDZsLtE8xl3cxMwI46YuffdQerCQ952OKBBfE1bQl_06F_AJqyUPuo3Q3acvQpv7WxBUqao2kUva0ZUxbnP03p63Fu",
      client_secret:
        "lrFxI-iSEg8SjqdRthyjTZPMbL8R_EnNkPDwlgNzBdJ9GqxPJrocoU-yj-yd_bEzIjvrqZGS50ickaaoRHgOqsc3W1qhMIApHPhHw7X0wY4="
    });
  }, []);

  const getAccessToken = async (data) => {
    var bodyFormData = new FormData();

    bodyFormData.append("grant_type", "client_credentials");
    bodyFormData.append(
      "client_id",
      "33OkryzDZsLtE8xl3cxMwI46YuffdQerCQ952OKBBfE1bQl_06F_AJqyUPuo3Q3acvQpv7WxBUqao2kUva0ZUxbnP03p63Fu"
    );
    bodyFormData.append(
      "client_secret",
      "lrFxI-iSEg8SjqdRthyjTZPMbL8R_EnNkPDwlgNzBdJ9GqxPJrocoU-yj-yd_bEzIjvrqZGS50ickaaoRHgOqsc3W1qhMIApHPhHw7X0wY4="
    );

    try {
      const result = await axios.post(
        "https://outpost.mapmyindia.com/api/security/oauth/token",
        bodyFormData
      );
      localStorage.setItem("access_token", result.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div>
        <SocialIcons />
      </div>
      <Routes />
    </div>
  );
}

export default App;
