export function getCurrentItem() {
    const fav = localStorage.getItem("favourites");

    if(fav === null){
        return [];
    }else{
        return JSON.parse(fav);
    }
}