import { Category } from './enums';
import { Book, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';

showHello('greeting', 'TypeScript');


function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task #1.1
function getAllBooks(): Book[] {
    let books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Angular }
    ];

    return books;
}

console.log(getAllBooks());

// Task #1.2
function logFirstAvailable(books: { title: string, author: string, available: boolean }[]):void {

    console.log('Length of books : '+books.length);

    for (let book of books) {        
        if (book.available) {
            console.log(`First Available: ${book.title}`);
            break;
        }
    }  
}

// Task #1.3
logFirstAvailable(getAllBooks());

// Task #2.3
function getBookTitlesByCategory(category: Category): Array<string> {
    console.log('Searching books in category: ' + Category[category]);
    let titles: string[] = [];
    let allBooks = getAllBooks();
    for (let currentBook of allBooks) {
      if (currentBook.category === category) {
        titles.push(currentBook.title);
      }
    }
    return titles;
}

// Task #2.4
function logBookTitles(titles: Array<string>): void {
    titles.forEach(element => console.log(element));      
}

logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// Task #3
let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

  function PrintBook(book: Book): void {
    console.log(`${book.title} by ${book.author}.`);
}
 
PrintBook(myBook);

myBook.markDamaged("missing back cover");



const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Andrey');



// Task #5.2
const ref = new ReferenceItem(`Sme title`, 1234);
//ref.printItem();

// Task #5.3
ref.publisher = 'Actor';
console.log(ref.publisher);

// Task #5.5
ReferenceItem.department = 'IT company';
ref.printItem();

// Task #6
class Encyclopedia extends ReferenceItem {
    //edition: number;
    constructor(title: string, year: number, public edition: number){
        super(title, year);
    }
    printItem(){
        super.printItem();
        console.log(`Edition: edition (${this.year})`);
    }
}

const refBook = new Encyclopedia('second book', 1998, 5);
refBook.printItem();  
