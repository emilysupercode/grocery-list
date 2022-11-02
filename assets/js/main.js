const list = [
];


function addItem() {
    const inputField = document.getElementById("newListItem");
    console.log(inputField);
    const newItem = document.getElementById("newListItem").value;
    console.log(newItem);
    const updatedList = list.push(newItem);

    var html = "";
    for (var i = 0; i < list.length; i++) {
        html += "<li>" + list[i] + "</li>";
    }
    document.getElementById("groceryList").innerHTML = html;

    inputField.value = "";

    return;
}


function removeItem() {
    const updatedList = document.getElementById("groceryList").innerText;
    const listItemRemove = document.getElementById("groceryList");

    listItemRemove.removeChild(listItemRemove.lastElementChild);

    const deletedItem = list.pop();

    document.getElementById("deletedItem").innerHTML = "Removed: " + deletedItem;
}
