import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import {
  encodeQueryParam,
  renderParam,
  renderQueryString,
} from '../utils/encodeQueryParam';
import * as GlobalVariables from '../config/GlobalVariableContext';

const cleanHeaders = headers =>
  Object.fromEntries(Object.entries(headers).filter(kv => kv[1] != null));

export const searchPOST = async (Constants, _args, handlers = {}) => {
  const url = `https://connect.squareup.com/v2/orders/search`;
  const options = {
    body: JSON.stringify({
      location_ids: ['LSDQ4HVX14NK9', 'LQADAKKDZFZJC'],
      query: {
        filter: {
          date_time_filter: {
            closed_at: {
              start_at: '2024-12-13T08:00:00Z',
              end_at: '2024-12-17T08:00:00Z',
            },
          },
        },
      },
      limit: 25,
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      Authorization:
        'Bearer EAAAljYE6GZcJFjGzs5xGc4bj3c62iBp3FgWjBKXHAN0HJGLz-CHdh1FrE3EoCd3',
      'Content-Type': 'application/json',
      'Square-Version': '2024-11-20',
    }),
    method: 'POST',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useSearchPOST = (
  args = {},
  {
    refetchInterval,
    refetchOnWindowFocus,
    refetchOnMount,
    refetchOnReconnect,
    retry,
    staleTime,
    handlers = {},
  } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Orders', args],
    () => searchPOST(Constants, args, handlers),
    {
      refetchInterval,
      refetchOnWindowFocus,
      refetchOnMount,
      refetchOnReconnect,
      retry,
      staleTime,
    }
  );
};

export const FetchSearchPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  refetchOnWindowFocus,
  refetchOnMount,
  refetchOnReconnect,
  retry,
  staleTime,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useSearchPOST(
    {},
    {
      refetchInterval,
      refetchOnWindowFocus,
      refetchOnMount,
      refetchOnReconnect,
      retry,
      staleTime,
      handlers: { onData, ...handlers },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchSearch: refetch });
};
