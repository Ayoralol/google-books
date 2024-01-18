export const bookSearch = async (
  title,
  author,
  startIndex = 0,
  maxResults = 20
) => {
  let query = "https://www.googleapis.com/books/v1/volumes?q=";

  if (title && author) {
    query += `intitle:${title}+inauthor:${author}`;
  } else if (title) {
    query += `intitle:${title}`;
  } else if (author) {
    query += `inauthor:${author}`;
  }

  query += `&startIndex=${startIndex}&maxResults=${maxResults}`;

  const response = await fetch(query);
  const data = await response.json();
  return data;
};
