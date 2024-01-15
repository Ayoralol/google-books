const fetchData = async (link) => {
  const response = await fetch(link);
  const data = await response.json();
  return data;
};

const searchVolume = async (search, author) => {
  let searchTerm = search.trim().replace(" ", "+");
  let searchAuthor = author
    ? "+inauthor:" + author.trim().replace(" ", "+")
    : "";
  const data = await fetchData(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}${searchAuthor}`
  );
  console.log(data);
};

searchVolume("red queen", "Victoria Aveyard");

// if (title) {searchTitle = title.replace(" ", "+")}
