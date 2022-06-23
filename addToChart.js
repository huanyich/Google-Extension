var url = window.location.href;
var i;

var category = "sweatshirts";
var item_name = "Hooded Sweatshirt";
var replace = "";
var flag = 0;
function pickCategory(){
    chrome.storage.sync.get('category', function(data){
        var redirect = "https://www.supremenewyork.com/shop/all/jackets";
        replace = redirect.replace("jackets",category);
        chrome.runtime.sendMessage({redirect: replace});
    });
}

function pickItem(){
    chrome.storage.sync.get('item_name', function(data){
        var items = document.getElementsByClassName('name-link');
        for(i = 0; i < items.length; i++){
            if((items[i].innerHTML).includes(item_name)){
                chrome.runtime.sendMessage({redirect: items[i].href});
                break;
            }
            
        }
    });
}


if(url=="https://www.supremenewyork.com/shop/all"){
    pickCategory();
}

else if(url !="https://www.supremenewyork.com/shop/all" && flag==0){
    pickItem(); 
    flag=1;
    setTimeout(() => console.log(1), 1000)
    setTimeout(() => console.log(2), 2000)
    setTimeout(() => console.log(3), 3000)
    document.getElementsByName("commit")[0].click(); 
    setTimeout(() => console.log(1), 1000)
    setTimeout(() => console.log(2), 2000)
    setTimeout(() => console.log(3), 3000)
    document.getElementsByClassName('button edit')[0].click();
    //setTimeout(() => console.log(1), 1000)
}



