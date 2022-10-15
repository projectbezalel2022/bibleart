import BookLinkList from "../components/book-link-list";

function BookList() {
    const torahBooks: String[] = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'];
    const torahChapterNumbers = [50, 40, 27, 36, 34];

  return (
  <section>
    <h1>Select a chapter</h1>
    <BookLinkList books={torahBooks} chapters={torahChapterNumbers}/>
  </section>)
}

export default BookList
