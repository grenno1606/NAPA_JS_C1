const data = {
  quizzes: [
    {
      title: "HTML",
      icon: "./assets/images/icon-html.svg",
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler",
          ],
          answer: "Hyper Text Markup Language",
        },
        {
          question:
            "Which of the following is the correct structure for an HTML document?",
          options: [
            "<html><head></head><body></body></html>",
            "<head><html></html><body></body></head>",
            "<body><head></head><html></html></body>",
            "<html><body></body><head></head></html>",
          ],
          answer: "<html><head></head><body></body></html>",
        },
        {
          question:
            "Which HTML element is used to define the title of a document?",
          options: ["<head>", "<title>", "<header>", "<top>"],
          answer: "<title>",
        },
        {
          question: "What is the purpose of the <body> tag in HTML?",
          options: [
            "It defines the document's head section.",
            "It contains all the content such as text, images, and links.",
            "It is used to define the main content of an HTML document.",
            "It specifies the body of the email content in HTML.",
          ],
          answer:
            "It contains all the content such as text, images, and links.",
        },
        {
          question: "Which HTML tag is used to create a hyperlink?",
          options: ["<hyperlink>", "<link>", "<a>", "<href>"],
          answer: "<a>",
        },
        {
          question: "Which tag is used to display images in HTML?",
          options: ["<img>", "<image>", "<src>", "<pic>"],
          answer: "<img>",
        },
        {
          question:
            "What attribute is used to provide the path of an image in the <img> tag?",
          options: ["link", "src", "href", "url"],
          answer: "src",
        },
        {
          question: "Which HTML tag is used to create an unordered list?",
          options: ["<ul>", "<ol>", "<list>", "<li>"],
          answer: "<ul>",
        },
        {
          question: "What does the <br> tag do?",
          options: [
            "It breaks the text into two sections.",
            "It creates a bold text.",
            "It inserts a line break.",
            "It adds a new row in a table.",
          ],
          answer: "It inserts a line break.",
        },
        {
          question: "In HTML, what does the `fieldset` tag do?",
          options: [
            "It is used to group related data in a form.",
            "It sets the field to a fixed size.",
            "It automatically validates the fields within a form.",
            "It hides the fields in a form.",
          ],
          answer: "It is used to group related data in a form.",
        },
      ],
    },
    {
      title: "CSS",
      icon: "./assets/images/icon-css.svg",
      questions: [
        {
          question: "What does CSS stand for?",
          options: [
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
          ],
          answer: "Cascading Style Sheets",
        },
        {
          question: "Which HTML attribute is used to define inline styles?",
          options: ["styles", "style", "class", "font-style"],
          answer: "style",
        },
        {
          question: "How do you insert a comment in a CSS file?",
          options: [
            "// this is a comment //",
            "/* this is a comment */",
            "-- this is a comment --",
            "<!-- this is a comment -->",
          ],
          answer: "/* this is a comment */",
        },
        {
          question:
            "Which property is used to change the background color of an element?",
          options: ["color", "bgcolor", "background-color", "background"],
          answer: "background-color",
        },
        {
          question: "How do you apply a style to all <p> elements?",
          options: ["p { }", ".p { }", "#p { }", "all.p { }"],
          answer: "p { }",
        },
        {
          question: "Which property is used to change the font of an element?",
          options: ["font-style", "text-style", "font-family", "typeface"],
          answer: "font-family",
        },
        {
          question:
            "How do you make each word in a text start with a capital letter?",
          options: [
            "text-transform: capitalize",
            "text-transform: uppercase",
            "text-style: capital",
            "font-transform: capitalize",
          ],
          answer: "text-transform: capitalize",
        },
        {
          question:
            "How do you select an element with the class name 'header'?",
          options: [".header", "#header", "header", "*header"],
          answer: ".header",
        },
        {
          question: "What is the default value of the 'position' property?",
          options: ["relative", "fixed", "absolute", "static"],
          answer: "static",
        },
        {
          question: "What is the purpose of the z-index property in CSS?",
          options: [
            "To count the number of elements",
            "To set the magnification level of an element",
            "To specify the stack order of an element",
            "To create a zoom effect",
          ],
          answer: "To specify the stack order of an element",
        },
      ],
    },
    {
      title: "JavaScript",
      icon: "./assets/images/icon-js.svg",
      questions: [
        {
          question:
            "Which syntax is correct to output 'Hello World' in an alert box?",
          options: [
            "alertBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');",
          ],
          answer: "alert('Hello World');",
        },
        {
          question: "How do you call a function named 'myFunction'?",
          options: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "execute myFunction()",
          ],
          answer: "myFunction()",
        },
        {
          question: "How to write an IF statement in JavaScript?",
          options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
          answer: "if (i == 5)",
        },
        {
          question:
            "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
          options: [
            "if (i <> 5)",
            "if i =! 5 then",
            "if (i != 5)",
            "if i not = 5",
          ],
          answer: "if (i != 5)",
        },
        {
          question: "How does a FOR loop start?",
          options: [
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            "for (i <= 5; i++)",
            "for (i = 0; i <= 5; i++)",
          ],
          answer: "for (i = 0; i <= 5; i++)",
        },
        {
          question: "How can you add a comment in a JavaScript?",
          options: [
            "'This is a comment",
            "//This is a comment",
            "<!--This is a comment-->",
            "/* This is a comment */",
          ],
          answer: "//This is a comment",
        },
        {
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
          ],
          answer: "var colors = ['red', 'green', 'blue']",
        },
        {
          question:
            "How do you find the number with the highest value of x and y?",
          options: [
            "Math.ceil(x, y)",
            "top(x, y)",
            "Math.max(x, y)",
            "Math.highest(x, y)",
          ],
          answer: "Math.max(x, y)",
        },
        {
          question: "Which operator is used to assign a value to a variable?",
          options: ["-", "*", "=", "x"],
          answer: "=",
        },
        {
          question: "What is the correct way to write a JavaScript object?",
          options: [
            "var person = {firstName: 'John', lastName: 'Doe'};",
            "var person = {firstName = 'John', lastName = 'Doe'};",
            "var person = (firstName: 'John', lastName: 'Doe');",
            "var person = (firstName = 'John', lastName = 'Doe');",
          ],
          answer: "var person = {firstName: 'John', lastName: 'Doe'};",
        },
      ],
    },
    {
      title: "Accessibility",
      icon: "./assets/images/icon-accessibility.svg",
      questions: [
        {
          question: "What does 'WCAG' stand for?",
          options: [
            "Web Content Accessibility Guidelines",
            "Web Compliance Accessibility Guide",
            "Web Content Accessibility Goals",
            "Website Compliance and Accessibility Guidelines",
          ],
          answer: "Web Content Accessibility Guidelines",
        },
        {
          question:
            "Which element is used to provide alternative text for images for screen reader users?",
          options: [
            "<alt>",
            "<figcaption>",
            "<description>",
            "<img alt='description'>",
          ],
          answer: "<img alt='description'>",
        },
        {
          question: "What does ARIA stand for in web development?",
          options: [
            "Accessible Rich Internet Applications",
            "Advanced Responsive Internet Assistance",
            "Accessible Responsive Internet Applications",
            "Automated Responsive Internet Actions",
          ],
          answer: "Accessible Rich Internet Applications",
        },
        {
          question: "Which of the following is not a principle of the WCAG?",
          options: ["Perceivable", "Dependable", "Operable", "Understandable"],
          answer: "Dependable",
        },
        {
          question:
            "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
          options: ["3:1", "4.5:1", "7:1", "2:1"],
          answer: "4.5:1",
        },
        {
          question:
            "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
          options: ["<div>", "<span>", "<a href='...'>", "<p>"],
          answer: "<a href='...'>",
        },
        {
          question:
            "What is the purpose of the 'lang' attribute in an HTML page?",
          options: [
            "To specify the scripting language",
            "To define the character set",
            "To indicate the language of the page content",
            "To declare a language pack",
          ],
          answer: "To indicate the language of the page content",
        },
        {
          question:
            "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
          options: [
            "Keyboard Accessible",
            "Mouse Independence",
            "Device Independence",
            "Operable Controls",
          ],
          answer: "Keyboard Accessible",
        },
        {
          question:
            "What is the role of 'skip navigation' links in web accessibility?",
          options: [
            "To skip over primary navigation to the main content",
            "To provide shortcuts to different sections of the website",
            "To help users skip unwanted sections like advertisements",
            "To bypass broken links in the navigation",
          ],
          answer: "To skip over primary navigation to the main content",
        },
        {
          question:
            "Which of these tools can help in checking the accessibility of a website?",
          options: [
            "W3C Validator",
            "Google Lighthouse",
            "CSS Validator",
            "JavaScript Console",
          ],
          answer: "Google Lighthouse",
        },
      ],
    },
  ],
};

if (!localStorage.getItem("data")) {
  localStorage.setItem("data", JSON.stringify(data));
}

const quizzes = JSON.parse(localStorage.getItem("data")).quizzes;

const listSubject = document.querySelector(".home__list");
const listOption = document.querySelector(".quiz__list");
const home = document.querySelector(".home");
const quiz = document.querySelector(".quiz");
const result = document.querySelector(".quiz-result");
const question = document.querySelector(".quiz__question");
const btnAgain = document.querySelector(".quiz-result__button");
const title = document.querySelector(".header__title");
const quizTitle = document.querySelector(".quiz__title");
const progressCurrent = document.querySelector(".progress__current");
let score = 0;
const btnSubmit = document.querySelector(".quiz__submit");
const btnNext = document.querySelector(".quiz__next");
const body = document.body;
const message = document.querySelector(".message");

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderSubject(quizzes) {
  let str = "";
  quizzes.forEach((quiz) => {
    str =
      str +
      `<li class="home__subject answer" tabindex="0"><span class="answer__icon ${escapeHTML(
        quiz.title
      )}"><img src=".${quiz.icon}" alt=""></span>${escapeHTML(
        quiz.title
      )}</li>`;
  });
  listSubject.innerHTML = str;
}

function renderOptions(options) {
  let str = "";
  let char = "A";
  options.forEach((option) => {
    str =
      str +
      `<li class="quiz__option answer" tabindex="0"><span class="answer__char">${char}</span>${escapeHTML(
        option
      )}<img class="answer__correct" src="../assets/images/icon-correct.svg" alt=""><img class="answer__wrong" src="../assets/images/icon-error.svg" alt=""></li>`;
    char = String.fromCharCode(char.charCodeAt() + 1);
  });
  listOption.innerHTML = str;
}

function validateAnswer(listOption, answer) {
  listOption.forEach((option) => {
    if (option.childNodes[1].textContent == answer)
      option.classList.add("border--correct");
    else {
      option.classList.add("border-none");
      if (option.classList.contains("select"))
        option.classList.add("border--wrong");
    }
  });
}

function checkAnswer(listOption, answer) {
  for (let index = 0; index < listOption.length; index++) {
    const option = listOption[index];
    if (option.classList.contains("select")) {
      return option.childNodes[1].textContent == answer;
    }
  }
  return false;
}

function initSelectOptions(options) {
  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((option) => {
        option.classList.remove("select");
      });
      option.classList.add("select");
    });
    enableKeyboardClick(option);
  });
}

function renderQuestion(questions, i) {
  title.setAttribute("questionIndex", i);
  quizTitle.innerHTML = `Question ${i + 1} of ${questions.length}`;
  progressCurrent.setAttribute(
    "style",
    `width:${((i + 1) * 100) / questions.length}%`
  );
  question.innerHTML = escapeHTML(questions[i].question);
  question.setAttribute("answer", questions[i].answer);
  renderOptions(questions[i].options);
  const options = document.querySelectorAll(".quiz__option");
  initSelectOptions(options);
}

function checkSelectOption(options) {
  for (let index = 0; index < options.length; index++) {
    const option = options[index];
    if (option.classList.contains("select")) {
      return true;
    }
  }
  return false;
}

function enableKeyboardClick(item) {
  if (!item.hasAttribute("tabindex")) {
    item.setAttribute("tabindex", "0");
  }
  if (!item.hasAttribute("role")) {
    item.setAttribute("role", "button");
  }
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      item.click();
    }
  });
}

renderSubject(quizzes);

const subjects = listSubject.querySelectorAll(".home__subject");
for (let index = 0; index < subjects.length; index++) {
  const subject = subjects[index];
  subject.addEventListener("click", () => {
    home.classList.add("display-none");
    quiz.classList.remove("display-none");
    title.innerHTML = `<img class="header__icon ${quizzes[index].title}" src=".${quizzes[index].icon}" alt="">${quizzes[index].title}`;
    title.setAttribute("titleIndex", index);
    title.setAttribute("questionIndex", 0);
    const questions = quizzes[index].questions;
    renderQuestion(questions, 0);
  });
  enableKeyboardClick(subject);
}

btnSubmit.addEventListener("click", () => {
  const options = document.querySelectorAll(".quiz__option");
  if (checkSelectOption(options)) {
    message.classList.add("display-none");
    const answer = document
      .querySelector(".quiz__question")
      .getAttribute("answer");
    if (checkAnswer(options, answer)) score++;
    validateAnswer(options, answer);
    btnSubmit.classList.add("display-none");
    btnNext.classList.remove("display-none");
  } else message.classList.remove("display-none");
});

btnNext.addEventListener("click", () => {
  const questionIndex = title.getAttribute("questionIndex");
  const titleIndex = title.getAttribute("titleIndex");
  const questions = quizzes[titleIndex].questions;
  btnSubmit.classList.remove("display-none");
  btnNext.classList.add("display-none");
  if (Number(questionIndex) == questions.length - 1) {
    quiz.classList.add("display-none");
    result.classList.remove("display-none");
    const scoreElement = document.querySelector(".quiz-result__score");
    scoreElement.innerHTML = score;
    const total = document.querySelector(".quiz-result__total");
    total.innerHTML = `out of ${questions.length}`;
    const titleQuiz = document.querySelector(".quiz-result__group");
    titleQuiz.innerHTML = title.innerHTML;
  } else {
    renderQuestion(questions, Number(questionIndex) + 1);
  }
});

btnAgain.addEventListener("click", () => {
  result.classList.add("display-none");
  home.classList.remove("display-none");
  score = 0;
  title.innerHTML = "";
});

const toggle = document.querySelector(".toggle__group");
const btnToggle = document.querySelector(".toggle__button");
toggle.addEventListener("click", () => {
  if (btnToggle.classList.contains("on")) {
    btnToggle.classList.remove("on");
    body.classList.remove("dark-theme");
  } else {
    btnToggle.classList.add("on");
    body.classList.add("dark-theme");
  }
});

enableKeyboardClick(toggle);
enableKeyboardClick(btnSubmit);
enableKeyboardClick(btnNext);
