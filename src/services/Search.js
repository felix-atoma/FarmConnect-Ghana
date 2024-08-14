export const fetchSearchResults = async (filters) => {
    const response = await fetch(`/api/search?${new URLSearchParams(filters)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    return response.json();
  };
  