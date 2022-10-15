import BookLink from "./book-link"

type propsType = {
    books: String[]
    chapters: number[]
}

export default function BookLinkList({books, chapters}: propsType) {
    return (<ul>
    {books.map((book, index) => {return (
      <BookLink key={index} book={book} chapters={chapters[index]}></BookLink>
      )}
    )}
  </ul>)
}