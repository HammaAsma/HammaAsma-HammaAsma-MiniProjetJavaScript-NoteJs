export function pagination(){

}
export function parseQuery(page,limit){
     //page c'est depuis quelle page on va récupere ==> valeur par defaut depuis la 1ere page
    const page = Number(page) || 1;
    //limit nb des éléments à récupere ==> valeur par defaut est 10 éléments 
    const limit = Number(limit) || 10;
    //si on va recupere depuis plusieurs pages
    const start = (page - 1) * limit;//==>le début le récuperation
    const end = start + limit;//==>la fin
    return [start,end];
}