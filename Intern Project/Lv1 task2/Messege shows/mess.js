function tim(){
    let t = new Date().getHours();
    if (t < 12){
        alert('Good morning!');
    }
    else if(t < 15){
        alert('Good afternoon!');
    }
    else if(t < 18){
        alert('Good evening!');
    }
    else{
        alert('Good night!');
    }   
}

