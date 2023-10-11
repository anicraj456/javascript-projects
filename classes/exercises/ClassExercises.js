// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedout, discarded){
       this.title = title ;
       this.author = author;
       this.copyrightDate = copyrightDate;
       this.isbn = isbn;
       this.numOfPages = numOfPages;
       this.timesCheckedout = timesCheckedout;
       this.discarded = discarded;
    } 
    checkout(used=1){
        this.timesCheckedout += used;
        //console.log("checkout time changed: "+ this.timesCheckedout);
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedout, discarded){
        super(title, author, copyrightDate, isbn, numOfPages, timesCheckedout, discarded);
      }
      disposal(currentyear){
        if((currentyear - this.copyrightDate) > 5){
            this.discarded = 'yes';
            //console.log("discarded book: " + this.discarded);
        }
      }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedout, discarded){
        super(title, author, copyrightDate, isbn, numOfPages, timesCheckedout, discarded);
        }
        thrown(){
            if(this.timesCheckedout>100){
                this.discarded = 'yes'
            }
        }
}

// Declare the objects for exercises 2 and 3 here:
let goodNovel = new Novel("Pride and Prejudice","Jane Austen",1813, 1111111111111 , 432, 32, "no");
let manualBook = new Manual ("Top Secret Shuttle Building Manual", "Redacted", 2013, 0, 1147, 1, "no");

// Code exercises 4 & 5 here:
console.log(goodNovel);
console.log(manualBook);
//checkout
goodNovel.checkout(5);
console.log(goodNovel);
//discrad
manualBook.disposal(2023);
console.log(manualBook);

