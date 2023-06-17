import axios from 'axios';
import { useMutation, useQuery } from 'react-query';

const fetchEntries = (url) => {

  return axios(url);
};

//get APi call
export const FetchData = (name, url, action, page) => {
  return useQuery(name, () => fetchEntries(url), {
    ...action,
    refetchOnWindowFocus: false,
    // refetchInterval: 20000
  });
};

// post Api call
export const PostData = (slug, method, action) => {
  // const { data: session } = useSession();

  // const token = session?.accessToken;
  return useMutation((hero) => {
    return axios({
      method: method,
      url: slug,
      data: hero,
    });
  }, action);
};
