// Libraries.
import axios from "axios";

/**
 * Endpoint
 */
/**
 * Endpoint to update the properties values for a nid.
 * @param  {object} hermesUpdateData model to update the properties.
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
