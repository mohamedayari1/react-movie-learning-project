const API_KEY="3c2430d94ee6129c34fe071744c0fafb";
const API_URL="https://api.themoviedb.org/3";

export const getPopularMovies=async (page=1)=>{ 
    const res=await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    const data=await res.json();
    return data.results;
}
export const searchMovies=async (query, page=1)=>{ 
    const response=await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data=await response.json();
    return data.results;
}

