import axios from "axios";

export const useSecure = () => {
  async function fetchSecurity(): Promise<string> {
    const payload = (await axios.get("https://tiro-facil.vercel.app/")).data
      .msg;

    return payload;
  }

  return { fetchSecurity };
};
