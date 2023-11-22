export const useMultiFetch = async (endpoint: string[]) => {
  try {
    const response = await Promise.all(
      endpoint?.map(async (url: string) =>
        fetch(process.env.NEXT_PUBLIC_TMDB_URL! + url, {
          headers: {
            Authorization: `bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
          cache: "force-cache",
        })
          .then((res) => res.json())
          .catch((error) => [])
      )
    );

    return {
      data: response,
    };
  } catch (error) {
    console.log(error, "error from [USE_MULTI_FETCH]");
    return { error };
  }
};
