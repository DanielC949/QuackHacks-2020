function addNewEntry() {
	var bookList = document.getElementById("bookList");

	var newBook = document.createTextNode("newBook");
	var newAuthor = document.createTextNode("newAuthor");
	var newDate = document.createTextNode("newDate");
	var newRating = document.createTextNode("newRating");
	var newReview = document.createTextNode("newReview");

	var row = bookList.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

	cell1.append(newBook);
	cell2.append(newAuthor);
	cell3.append(newDate);
	cell4.append(newRating);
	cell5.append(newReview);

}