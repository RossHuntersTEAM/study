
const personalMOvieDB = {
    count:  0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMOvieDB.count = +prompt("Сколько фильмов вы уже посмотрели ?", "");
    
        while(personalMOvieDB.count=="" || personalMOvieDB.count==null || isNaN(personalMOvieDB.count)){
            personalMOvieDB.count = +prompt("Сколько фильмов вы уже посмотрели ?", "");
        }
    },
    //
    RememberMyFilms: function() {
        for(let i=0; i<2; i++){
            const a = prompt("Один из просмотренных фильмов ?", ""),
                  b = prompt("На сколько оцените его ?", "");          //____iiii____
        
            
            if(a!=null && b!=null && a!='' && b!='' && a.length<50) {
                console.log("done");
                personalMOvieDB.movies[a]=b;
            } else {
                console.log("eror");
                i--;
            };
        };
    },
    // 
    RememberMyFilms: function() {
        for(let i=0; i<2; i++){
            const a = prompt("Один из просмотренных фильмов ?", ""),
                  b = prompt("На сколько оцените его ?", "");          //____iiii____
        
            
            if(a!=null && b!=null && a!='' && b!='' && a.length<50) {
                console.log("done");
                personalMOvieDB.movies[a]=b;
            } else {
                console.log("eror");
                i--;
            };
        };
    },
    //
    detectPersonalLevel: function() {
        if(personalMOvieDB.count <10){
            console.log("Просмотренно довольно мало фильмов");
        } else if(personalMOvieDB.count >=10 && personalMOvieDB.count<30){
            console.log("Вы классичсекий зритель");
        } else if(personalMOvieDB.count>=50){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    },
    //
    showMyDb: function(hiden) {
        if(!hiden){
            console.log(personalMOvieDB);
        }
    },
    //
    toggleVisibleMyDb: function(){
        if(personalMOvieDB.privat){
            personalMOvieDB.privat=false;
        }else{
            personalMOvieDB.privat=true;
        }
    },
    //
    writeYouGenres: function(){
        for(i=1; i<=3; i++){
            personalMOvieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
            // const genre=prompt(`Ваш любимый жанр под номером ${i}`);
            // personalMOvieDB.genres[i-1]=genre;
        }
    },
};

// const a = prompt("Один из просмотренных фильмов ?", ""),     
//       b = prompt("На сколько оцените его ?", ""),
//       c = prompt("Один из просмотренных фильмов ?", ""),     ___iiii___ 
//       d = prompt("На сколько оцените его ?", "");

// personalMOvieDB.movies[a]=b;
// personalMOvieDB.movies[c]=d;


