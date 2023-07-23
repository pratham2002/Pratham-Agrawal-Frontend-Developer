import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { UserContext } from "../Context/UserContext";

const initState = {
  loading: false,
  error: false,
  errorMessage: "",
  res: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "request":
      return {
        ...initState,
        loading: true,
      };

    case "success":
      return {
        loading: false,
        error: false,
        errorMessage: "",
        res: action?.data,
      };
    case "error":
      return {
        loading: false,
        error: true,
        errorMessage: action?.message,
        res: null,
      };

    default:
      return initState;
  }
};

export default function useDataFetchHook(url) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [retry, setRetry] = useState(0);
  const { userDetails } = useContext(UserContext);
  const retryData = () => {
    setRetry((p) => ++p);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      if (!url) {
        return;
      }
      try {
        dispatch({ type: "request" });

        // const config = createAxiosConfig({
        //   endPoint: url,
        //   other: {
        //     cancelToken: source.token,
        //   },
        // });
        // console.log({ config });
        const response = await axios.request(url, {
          cancelToken: source.token,
          headers: {
            Authorization: `Bearer ${userDetails?.jwtToken}`,
          },
        });
        const data = response?.data;
        dispatch({ type: "success", data });
      } catch (err) {
        if (axios.isCancel(err)) {
          dispatch({ type: "error", message: err?.message });
        } else {
          console.log(err);
          dispatch({ type: "error", message: err?.response?.data?.message });
        }
      }
    };

    fetchData();

    return () => {
      // console.log("aborting request");
      source.cancel();
    };
  }, [url, retry]);

  return [state, retryData, dispatch];
}
