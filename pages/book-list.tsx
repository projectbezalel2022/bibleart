import BookLinkList from "../Components/book-link-list";

function BookList() {
    const torahBooks: String[] = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'];
  return (
  <section>
    <h1>Select a chapter</h1>
    <BookLinkList books={torahBooks}/>
  </section>)
}

export default BookList