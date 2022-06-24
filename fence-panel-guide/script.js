//Assigned Variable to html option elements

const terrain = document.getElementById('terrain');
const topStyle = document.getElementById('topStyle');
const height = document.getElementById('height');      


//This handles which fences show up depending on previous choice

const myFunction = () => {
   if(terrain.value == 'half') {

        document.getElementById('flat').style.display ='block';
        document.getElementById('extend').style.display ='block';
        document.getElementById('press').style.display ='none';
        document.getElementById('sixRail').style.display ='none';
       
   } else if(terrain.value == 'fiveEigth'){

        document.getElementById('flat').style.display ='block';
        document.getElementById('extend').style.display ='block';
        document.getElementById('press').style.display ='block';
        document.getElementById('sixRail').style.display ='none';

   } else if(terrain.value == 'fiveEigthTwo') {
        document.getElementById('flat').style.display ='block';
        document.getElementById('extend').style.display ='block';
        document.getElementById('press').style.display ='block';
        document.getElementById('sixRail').style.display ='block';

   } else {
       console.log('this isnt so metal')
   }
}

//this takes in the information that has been selected and opens the corrisponding page, respectively

const mySearch = () => {

    let x = terrain.value + topStyle.value + height.value;

    switch(x){

        case 'halfflatfour':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5ljWgTwFB4X557sGRVnPgvWS");
            break;

        case 'halfflatfive':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;
     
        case 'halfflatsix':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5li6iJs%2bCa6c8UcVxyoXIbx0");
            break;   
            
        case 'halfextendfour':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'halfextendfive':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'halfextendsix':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;
            
        case 'fiveEigthflatfour':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthflatfive':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthflatsix':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthextendfour':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthextendfive':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthextendsix':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthpressfour':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthpressfive':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthpresssix':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwoflatfour':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwoflatfive':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwoflatsix':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwoflatsixRail':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwoextendfour':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwoextendfive':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwoextendsix':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwoextendsixRail':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwopressfour':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwopressfive':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwopresssix':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

        case 'fiveEigthTwopresssixRail':
            window.open("https://www.krisecloud.com/King_QA/EASYCommerce/ECItemMainPage.aspx?ep_param=G2Hat18ldrnKgwIelv0aHH8E3xCekAJv3uIsnkkb5lgJH4shSWwoQDq84d49yZ7F");
            break;

//This default ensures that the user fills out every dropdwon
        default:
            alert("Please select one option from each dropdown");

    }

}

//this opens a new window with all fence products on click
const seeAll = () => {
    window.open("https://www.krisecloud.com/King_QA/EASYCommerce/shopping?SearchText=&Page=1&PerPage=12&SortColumn=CategoryCode10&Descending=Yes&Filters=CategoryCode1:%22Fencing%20%26%20Gates%22%20AND%20CategoryCode2:%22Fence%20%26%20Gate%20Panels%22");
}