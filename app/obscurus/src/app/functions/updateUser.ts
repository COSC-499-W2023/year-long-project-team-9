"use server";
import { Api } from "sst/node/api";
const updateUser = async (email: string,
  givenName: string,
  familyName: string,
  profileImage: string,) => {
  try {
    // console.log("=====");
    const response = await fetch(Api.Api.url + "/updateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        givenName: givenName,
        familyName: familyName,
        profileImage: profileImage,
      }),
    });
    // console.log("=====");
    console.log(response);

  } catch (error) {
    console.error("Error updating status:", error);
    return "Error updating status";
  }
};

export default updateUser;