"use client";
import axios from "axios";
import { useState } from "react";

export const useAxios = async (endpoint: string) => {
  const [IsLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_TMDB_URL! + endpoint,
      {
        headers: {
          Authorization: `bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        },
      }
    );

    return data;
  } catch (error: any) {
    console.log(error);
    setError(error);
  }
  return {
    IsLoading,
    data,
    error,
  };
};
