
// Multiple Questions For Real Time Rendering
var questions_Array =
[{
    id: "Question no. 1",
    question: "Who Invented Internet first time?",
    answer: "Vinton Cerf and Bob Kahn",
    options: ["Tim Berners-Lee","Roberto Nevelis","Vinton Cerf and Bob Kahn","Charles M. Herzfeld"]
},
{
    id: "Question no. 2",
    question: "Who is the inventor of Apple?",
    answer: "Steve Jobs",
    options: ["Dennis Ritchie","Steve Jobs","James Gosling","Roberto Nevelis"]
},
{
    id: "Question no. 3",
    question: "Who is the founder of Google?",
    answer: "Larry Page",
    options: ["Dennis Ritchie","Brendan Eich","Larry Page","Tim Berners-Lee"]
},
{
    id: "Question no. 4",
    question: "Who is the inventer of Samsung?",
    answer: "Lee Byung-chul",
    options: ["James Gosling","Steve jobs","Larry Page","Lee Byung-chul"]
},
{
    id: "Question no. 5",
    question: "Who is the inventor of JavaScript?",
    answer: "Brendan Eich",
    options: ["Dennis Ritchie","Brendan Eich","James Gosling","Guido van Rossum"]
}]

// This function iter the question statement and its options
function show_qus(x)
{
    // Show Question Number
    var Qus_Number = document.getElementById("qus_number");
    Qus_Number.innerHTML = questions_Array[x].id;

    // Show Question Statement
    var Question = document.getElementById("qus_statement");
    Question.innerHTML = questions_Array[x].question;

    // Set Question Option_1 
    var Option_1 = document.getElementById("op_1");
    Option_1.innerHTML = questions_Array[x].options[0];

    // Set Question Option_2
    var Option_2 = document.getElementById("op_2");
    Option_2.innerHTML = questions_Array[x].options[1];

    // Set Question Option_3 
    var Option_3 = document.getElementById("op_3");
    Option_3.innerHTML = questions_Array[x].options[2];

    // Set Question Option_4 
    var Option_4 = document.getElementById("op_4");
    Option_4.innerHTML = questions_Array[x].options[3];
}

var qus_counter = 0 ;
// This Function trigger the show_qus function by clicking the Next button 
function next_qus()
{
    qus_counter++ ;
    show_qus(qus_counter);
}