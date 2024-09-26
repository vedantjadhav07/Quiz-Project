function openque() {
    window.open('questions.html');
}
const questions = [
    {
        question: "AWT means",
        answers: [
            { text: "Abstract Window Toolkit ", correct: true },
            { text: "Advaced Window toolkit", correct: false },
            { text: "Abtract web toolkit", correct: false },
            { text: "Advaced Web Technology ", correct: false },
        ]
    },
    {
        question: "The setSize() method is defined by this class..",
        answers: [
            { text: "Container ", correct: false },
            { text: "Component", correct: false },
            { text: "Frame", correct: true },
            { text: "Panel", correct: false },
        ]
    },
    {
        question: "if we want to hide the window,we can use method ..",
        answers: [
            { text: "setVisible()", correct: false },
            { text: "show()", correct: false },
            { text: "setHidden()", correct: true },
            { text: "view()", correct: false },
        ]
    },
    {
        question: "which of the following are passive AWT control ?",
        answers: [
            { text: "Label", correct: true },
            { text: "Button", correct: false },
            { text: "Checkbox", correct: false },
            { text: "TextField", correct: false },
        ]
    },
    {
        question: "What is default layout of Applet",
        answers: [
            { text: "Gridlayout", correct: false },
            { text: "GridBagLayout", correct: false },
            { text: "BorderLayout", correct: false },
            { text: "FlowLayout", correct: true },
        ]
    },
    // 2 unit 
    {
        question: "Swing components are not implemented by ____ code",
        answers: [
            { text: "Platform-Specific", correct: true },
            { text: "Platform-independent", correct: false },
            { text: "Both", correct: false },
            { text: "none", correct: false },
        ]
    },
    {
        question: "Swing components are  ____ Weight",
        answers: [
            { text: "Light", correct: true },
            { text: "Moderate", correct: false },
            { text: "HEavey", correct: false },
            { text: "All of the above", correct: false },
        ]
    },
    {
        question: "Which class an encapsulate an icon",
        answers: [
            { text: "Image", correct: false },
            { text: "Icon", correct: false },
            { text: "ImageIcon", correct: true },
            { text: "IconImage", correct: false },
        ]
    },
    {
        question: "Which is the Swing check box class",
        answers: [
            { text: "Jcheck", correct: false },
            { text: "JCheckbox", correct: false },
            { text: "JSCheckbox", correct: false },
            { text: "JCheckBOx", correct: true },
        ]
    },
    {
        question: "Super Class for Swing Buttons",
        answers: [
            { text: "AbstractButton", correct: true },
            { text: "Button", correct: false },
            { text: "Jbutton", correct: false },
            { text: "none", correct: false },
        ]
    },

    //3 unit
    {
        question: "Which Pacakge provides many event classes and Listener interface for event handling",
        answers: [
            { text: "java.awt", correct: false },
            { text: "java.awt.Graphics", correct: false },
            { text: "java.awt.event", correct: true },
            { text: "none", correct: false },
        ]
    },
    {
        question: "void keyTyped(KeyEvent ke) called when a key on the keyboard is__",
        answers: [
            { text: "ActionEvent,ItemEvent", correct: false },
            { text: "ActionEvent, TextEvent", correct: true },
            { text: " ScrollEvent,TextEvent", correct: false },
            { text: "ActionEvent, ScrollEven", correct: false },
        ]
    },
    {
        question: " Which event is generated when the position of scrollbar is changed?",
        answers: [
            { text: "KeyEvent ", correct: false },
            { text: "MouseEvent ", correct: false },
            { text: " ItemEvent", correct: false },
            { text: "AdjustmentEvent", correct: true },
        ]
    },
    {
        question: "_____method is used to register a keyboard event listener. ",
        answers: [
            { text: "KeyListener() ", correct: false },
            { text: "addKeyListener() ", correct: true },
            { text: " addKeyListenerEvent()", correct: false },
            { text: "eventKeyboardListener()", correct: false },
        ]
    },
    {
        question: "How to obtain the command name for invoking ActionEvent?",
        answers: [
            { text: "getCommandName() ", correct: false },
            { text: "getActionEventCommand() ", correct: false },
            { text: " getActionCmd()", correct: false },
            { text: "getActionCommand()", correct: true },
        ]
    },
    //4 unit
    {
        question: "UDP stands for____",
        answers: [
            { text: "User Data Port  ", correct: false },
            { text: "User Datagram Protocol", correct: true },
            { text: "Used Data  Provider", correct: false },
            { text: "User Data  Protocol ", correct: false },
        ]
    },
    {
        question: "Select full form of DNS",
        answers: [
            { text: "Data Network System ", correct: false },
            { text: " Domain Name System", correct: false },
            { text: "Domain Name Server", correct: false },
            { text: "Domain Naming Service", correct: true },
        ]
    },
    {
        question: "Port number for FTP is    ",
        answers: [
            { text: "21 ", correct: true },
            { text: " 23", correct: false },
            { text: "25", correct: false },
            { text: "80", correct: false },
        ]
    },
    {
        question: "Select the method used to create URL connection",
        answers: [
            { text: "URL Connection  ", correct: true },
            { text: " open Connection", correct: false },
            { text: "URL", correct: false },
            { text: "URL Decoder ", correct: false },
        ]
    },
    {
        question: "The___class is used to create TCP serve",
        answers: [
            { text: "Server ", correct: false },
            { text: "SocketServer", correct: false },
            { text: "ServerSocket ", correct: true },
            { text: "Socket ", correct: false },
        ]
    },
    // 5 unit
    {
        question: " In JDBC  imports all Java classes that are concern with Database connectivity. ",
        answers: [
            { text: "javax.sql ", correct: false },
            { text: " java.mysql ", correct: false },
            { text: " java.sql ", correct: true },
            { text: "com.sql ", correct: false },
        ]
    },
    {
        question: "Database programming using Java throws which of the following exception? ",
        answers: [
            { text: "SQLException ", correct: false },
            { text: " ClassNotFoundException", correct: false },
            { text: "ClassNotFoundException", correct: false },
            { text: "all of these", correct: true },
        ]
    },
    {
        question: "What is purpose of next( ) method?",
        answers: [
            { text: "to retain the next element in a series. ", correct: false },
            { text: " to retain next table", correct: false },
            { text: "to retain next record in a series.", correct: true },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "Public class DriverManager extends__ ",
        answers: [
            { text: "Object ", correct: true },
            { text: " String", correct: false },
            { text: "Connection", correct: false },
            { text: "Statement", correct: false },
        ]
    },
    {
        question: "Which method executes an SQL statement that may return multiple results?",
        answers: [
            { text: "executeUpdate( )", correct: false },
            { text: "executeQuery( )", correct: false },
            { text: "execute( )", correct: true },
            { text: "noExecute( )", correct: false },
        ]
    },
    // 6 unit
    {
        question: "Which of the following is the default HttpRequest method",
        answers: [
            { text: "doGet() ", correct: true },
            { text: " doPost()", correct: false },
            { text: "doTrace()", correct: false },
            { text: "doPut()", correct: false },
        ]
    },
    {
        question: "Name the http method used to send resources to the server.",
        answers: [
            { text: "FTP method  ", correct: false },
            { text: " PUT  method", correct: true },
            { text: "WRITE method ", correct: false },
            { text: "COPY method", correct: false },
        ]
    },
    {
        question: "Which life cycle method is used to process a client’s request? ",
        answers: [
            { text: "start()", correct: false },
            { text: "init()", correct: false },
            { text: "service()", correct: true },
            { text: "destroy()", correct: false },
        ]
    },
    {
        question: "Apache Tomcat is__",
        answers: [
            { text: "Servlet  ", correct: false },
            { text: "Java Program", correct: false },
            { text: "API", correct: false },
            { text: "Web server capable of running Java programs", correct: true },
        ]
    },
    {
        question: "Life cycle of a servlet is managed by  ",
        answers: [
            { text: "Servlet Context", correct: false },
            { text: " Servlet Container", correct: true },
            { text: "Supporting protocol", correct: false },
            { text: "All of the above0", correct: false },
        ]
    },






];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuetionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuetionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuetionIndex];
    let questionNo = currentQuetionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    })
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";

    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuetionIndex++;
    if (currentQuetionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuetionIndex < questions.length) {
        handleNextButton();

    }
    else {
        startQuiz();
    }
})
startQuiz();