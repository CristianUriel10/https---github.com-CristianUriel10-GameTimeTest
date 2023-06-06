// Libraries.
import axios from "axios";

/**
 * Endpoint
 */
export const search = async (value) => {
  const url = `https://mobile-staging.gametime.co/v1/search?q=${value}`;
  const answer = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return answer;
};
