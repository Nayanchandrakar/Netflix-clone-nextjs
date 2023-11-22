export const useFetch = async (endpoint: string) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_TMDB_URL! + endpoint, {
      headers: {
        Authorization: `bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
      cache: "force-cache",
    });

    const result = await response.json();

    return {
      data: result,
    };
  } catch (error: any) {
    return {
      error,
    };
  }
};
