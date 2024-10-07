function kitchen(){
    let roast = 0;
    return function(){
        roast ++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());


function greeting(greetinghandler,name){
    greetinghandler(name);
}
function greetingEveing(name){
    console.log('Good Evening',name);
}

function greetinghandler(name){
    console.log('Good Morning',name);
}


greeting(greetinghandler,'saurav');
greeting(greetingEveing,'saurav');