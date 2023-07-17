import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year
  `
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {/* 이 컴포넌트들은 movies array에 있는 각 요소에서 변형됨 */}
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  // key는 고유한 값이어야 하지만 id가 없고 g가 고유한 값이면 key로 써도 상관없음
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

// 보편적으로 사용하는 방법 아님
//  useEffect(() => {
//   fetch(
//     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year
//   `
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setMovies(json.data.movies);
//       // 로딩이 끝났기 때문에 꼭 setLoading(false)로 만들어서 loading...이거 없애야됨
//       setLoading(false);
//     });
// }, []);

// 전부 같은 결과값 나오게 하는 코드
// const getMovies = async () => {
//   const response = await fetch(
//     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year
// `
//   );
//   const json = await response.json();
//   setMovies(json.data.movies);
//   setLoading(false);
// };
