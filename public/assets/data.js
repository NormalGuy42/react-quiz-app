const assets = 
{"Guinée":
    [
    'assets/Guinea/g_1.webp', 
    'assets/Guinea/g_10.jpg', 
    'assets/Guinea/g_11.jpg', 
    'assets/Guinea/g_2.png', 
    'assets/Guinea/g_3.png', 
    'assets/Guinea/g_4.png', 
    'assets/Guinea/g_5.jpg', 
    'assets/Guinea/g_6.jpg', 
    'assets/Guinea/g_7.jpg', 
    'assets/Guinea/g_8.jpg', 
    'assets/Guinea/g_9.jpg'
    ]
,      
"Côte d'Ivoire":
    ['assets/Ivory Coast/c_1.jpg', 
    'assets/Ivory Coast/c_10.jpg', 
    'assets/Ivory Coast/c_11.jpg', 
    'assets/Ivory Coast/c_2.png', 
    'assets/Ivory Coast/c_3.png', 
    'assets/Ivory Coast/c_4.png', 
    'assets/Ivory Coast/c_5.jpg', 
    'assets/Ivory Coast/c_6.jpg', 
    'assets/Ivory Coast/c_7.jpg', 
    'assets/Ivory Coast/c_8.jpg', 
    'assets/Ivory Coast/c_9.jpg'
    ]
,
"Mali":
    ['assets/Mali/m_1.jpg', 
    'assets/Mali/m_10.jpg', 
    'assets/Mali/m_2.jpg', 
    'assets/Mali/m_3.jpg', 
    'assets/Mali/m_4.jpg', 
    'assets/Mali/m_5.jpg', 
    'assets/Mali/m_6.jpg', 
    'assets/Mali/m_7.jpg', 
    'assets/Mali/m_8.jpg', 
    'assets/Mali/m_9.jpg'],
"Nigeria":
    ['assets/Nigeria/n_1.jpg', 
    'assets/Nigeria/n_10.jpg', 
    'assets/Nigeria/n_2.jpg', 
    'assets/Nigeria/n_3.png', 
    'assets/Nigeria/n_4.jpg', 
    'assets/Nigeria/n_5.jpg', 
    'assets/Nigeria/n_6.jpg', 
    'assets/Nigeria/n_7.jpg', 
    'assets/Nigeria/n_8.jpg', 
    'assets/Nigeria/n_9.jpg'
    ]
,
"Senegal":
    ['assets/Senegal/sn_1.jpg', 
    'assets/Senegal/sn_10.jpg', 
    'assets/Senegal/sn_2.jpg', 
    'assets/Senegal/sn_3.png', 
    'assets/Senegal/sn_4.png', 
    'assets/Senegal/sn_5.jpg', 
    'assets/Senegal/sn_6.jpg', 
    'assets/Senegal/sn_7.jpg', 
    'assets/Senegal/sn_8.jpg', 
    'assets/Senegal/sn_9.jpg'
    ]
,
"Afrique du sud":
    ['assets/South Africa/s_1.jpeg', 
    'assets/South Africa/s_10.jpg', 
    'assets/South Africa/s_2.jpeg', 
    'assets/South Africa/s_3.png', 
    'assets/South Africa/s_4.jpg', 
    'assets/South Africa/s_5.jpg', 
    'assets/South Africa/s_6.jpg', 
    'assets/South Africa/s_7.jpg', 
    'assets/South Africa/s_8.jpg', 
    'assets/South Africa/s_9.jpg'
    ]
};

const countries = [
    "Guinée",
    "Côte d'Ivoire",
    "Mali",
    "Nigeria",
    "Senegal",
    "Afrique du sud",
]



//Create random quiz questions
const getRandomCountry = ()=>{
    return countries[Math.floor(Math.random()*countries.length)];
}
const getRandomNum = ()=>{
    return Math.floor(Math.random()*10);
}
function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].img === obj.img && list[i].correctAnswer === obj.correctAnswer) {
            return true;
        }
    }

    return false;
}
const createQuizQuestions = ()=>{
    var QuizQuestions = [];
    //To avoid repeated questions (same image and same country)
    //We're going to save all the propositions and compare new ones to the saved ones
    //To avoid repetions
    while(QuizQuestions.length<10){
        var choices = [];
        var randomCountry = getRandomCountry();
        var randomNumber = getRandomNum();

        //make wrong choices
        while(choices.length<3){
            //Get random country
            var country = countries[Math.floor(Math.random()*countries.length)];
            //Check if random country is in list or equal to the correct answer
            if(!choices.includes(country) && country!==randomCountry){
                choices.push(country);
            };
        }
        choices.push(randomCountry);
        //randomize choices
        var finalChoices = [];
        while(finalChoices.length<4){
            var item = choices[Math.floor(Math.random()*choices.length)];
            if(!finalChoices.includes(item)){
                finalChoices.push(item);
            }
        }
        //create object and append to list
        let option = {img:`${assets[randomCountry][randomNumber]}`,choices:finalChoices,correctAnswer:`${randomCountry}`}
        if(!containsObject(option,QuizQuestions)){
            QuizQuestions.push(option);
        }
    }
    return QuizQuestions;
}

export default createQuizQuestions;