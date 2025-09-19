/**
 *
 * @param {callback} setPodcasts - The setter function to update the podcasts list
 * @param {callback} setIsLoading - The setter function for the loading state
 * @param {callback} setHasError - The setter function for the error state
 */
export default function fetchData(setPodcasts, setIsLoading, setHasError) {
  fetch("https://podcast-api.netlify.app/")
    .then((response) => {
      if (!response.ok) throw new Error("Network repsonse failed");
      return response.json();
    })
    .then((data) => {
      setPodcasts(data);
      setIsLoading(false);
    })
    .catch(() => {
      setHasError(true);
      setIsLoading(false);
    });
}
