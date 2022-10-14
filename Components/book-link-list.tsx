import Link from "next/link"

type propsType = {
    books: String[]
}

export default function BookLinkList({books}: propsType) {
    return (<ul>
    {books.map((book, index) => {return (
      <li key={index}>
        <Link href={'/books/'+book}>{book}</Link>
      </li> 
      )}
    )}
  </ul>)
}