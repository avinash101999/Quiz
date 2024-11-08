const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        "question": "Who is known as the Father of the Indian Nation?",
        "answers": {
            "a": "Jawaharlal Nehru",
            "b": "Subhas Chandra Bose",
            "c": "Mahatma Gandhi"
        },
        "correctAnswer": "c",
        "explanation": "Mahatma Gandhi is known as the Father of the Indian Nation for his role in India's independence movement."
    },
    {
        "question": "What is the capital of Uttar Pradesh?",
        "answers": {
            "a": "Kanpur",
            "b": "Lucknow",
            "c": "Varanasi"
        },
        "correctAnswer": "b",
        "explanation": "Lucknow is the capital city of Uttar Pradesh."
    },
    {
        "question": "Which river is known as the 'Sorrow of Bihar'?",
        "answers": {
            "a": "Ganges",
            "b": "Kosi",
            "c": "Yamuna"
        },
        "correctAnswer": "b",
        "explanation": "The Kosi River is known as the 'Sorrow of Bihar' due to frequent flooding."
    },
    {
        "question": "Who was the first woman Prime Minister of India?",
        "answers": {
            "a": "Indira Gandhi",
            "b": "Sarojini Naidu",
            "c": "Sonia Gandhi"
        },
        "correctAnswer": "a",
        "explanation": "Indira Gandhi was the first woman Prime Minister of India, serving from 1966 to 1977 and 1980 to 1984."
    },
    {
        "question": "What is the shortcut key to copy text in most computer applications?",
        "answers": {
            "a": "Ctrl + V",
            "b": "Ctrl + X",
            "c": "Ctrl + C"
        },
        "correctAnswer": "c",
        "explanation": "Ctrl + C is the keyboard shortcut used to copy text in most applications."
    },
    {
        "question": "Which of the following is an output device?",
        "answers": {
            "a": "Mouse",
            "b": "Keyboard",
            "c": "Printer"
        },
        "correctAnswer": "c",
        "explanation": "A printer is an output device as it produces hard copies of documents."
    },
    {
        "question": "Who wrote the Indian National Anthem?",
        "answers": {
            "a": "Rabindranath Tagore",
            "b": "Bankim Chandra Chatterjee",
            "c": "Sarojini Naidu"
        },
        "correctAnswer": "a",
        "explanation": "Rabindranath Tagore wrote the Indian National Anthem, 'Jana Gana Mana.'"
    },
    {
        "question": "Which of these is a volatile memory?",
        "answers": {
            "a": "ROM",
            "b": "Flash Drive",
            "c": "RAM"
        },
        "correctAnswer": "c",
        "explanation": "RAM (Random Access Memory) is volatile and loses data when power is turned off."
    },
    {
        "question": "Which city is known as the 'Silicon Valley of India'?",
        "answers": {
            "a": "Hyderabad",
            "b": "Bengaluru",
            "c": "Mumbai"
        },
        "correctAnswer": "b",
        "explanation": "Bengaluru is known as the 'Silicon Valley of India' for its thriving IT industry."
    },
    {
        "question": "What does HTTP stand for in computer networks?",
        "answers": {
            "a": "HyperText Transfer Protocol",
            "b": "HyperText Transmission Protocol",
            "c": "High Transfer Protocol"
        },
        "correctAnswer": "a",
        "explanation": "HTTP stands for HyperText Transfer Protocol and is the foundation of data communication on the web."
    },
    {
        "question": "Which organ is primarily responsible for filtering blood in the human body?",
        "answers": {
            "a": "Liver",
            "b": "Kidney",
            "c": "Heart"
        },
        "correctAnswer": "b",
        "explanation": "The kidneys filter blood to remove waste and excess fluids from the body."
    },
    {
        "question": "Who is the author of 'Gitanjali'?",
        "answers": {
            "a": "Rabindranath Tagore",
            "b": "R.K. Narayan",
            "c": "Mahatma Gandhi"
        },
        "correctAnswer": "a",
        "explanation": "Rabindranath Tagore authored 'Gitanjali,' for which he received the Nobel Prize in Literature in 1913."
    },
    {
        "question": "What is the main component of a computer's CPU?",
        "answers": {
            "a": "ALU (Arithmetic Logic Unit)",
            "b": "Monitor",
            "c": "Keyboard"
        },
        "correctAnswer": "a",
        "explanation": "The ALU (Arithmetic Logic Unit) is a crucial part of the CPU, handling mathematical and logical operations."
    },
    {
        "question": "Who among the following was known as the Iron Man of India?",
        "answers": {
            "a": "Jawaharlal Nehru",
            "b": "Sardar Vallabhbhai Patel",
            "c": "Lal Bahadur Shastri"
        },
        "correctAnswer": "b",
        "explanation": "Sardar Vallabhbhai Patel is known as the Iron Man of India for his role in uniting the nation."
    },
    {
        "question": "Which is the largest desert in the world?",
        "answers": {
            "a": "Sahara",
            "b": "Gobi",
            "c": "Kalahari"
        },
        "correctAnswer": "a",
        "explanation": "The Sahara Desert is the largest hot desert in the world, covering much of North Africa."
    },
    {
        "question": "What is the shortcut key for 'Paste' in most computer applications?",
        "answers": {
            "a": "Ctrl + C",
            "b": "Ctrl + V",
            "c": "Ctrl + X"
        },
        "correctAnswer": "b",
        "explanation": "Ctrl + V is the shortcut key to paste copied content in most computer applications."
    },
    {
        "question": "Who discovered the law of gravitation?",
        "answers": {
            "a": "Albert Einstein",
            "b": "Isaac Newton",
            "c": "Galileo Galilei"
        },
        "correctAnswer": "b",
        "explanation": "Isaac Newton discovered the law of gravitation in the 17th century."
    },
    {
        "question": "Which part of the plant conducts photosynthesis?",
        "answers": {
            "a": "Root",
            "b": "Leaf",
            "c": "Stem"
        },
        "correctAnswer": "b",
        "explanation": "Photosynthesis primarily occurs in the leaves of the plant, where chlorophyll is present."
    },
    {
        "question": "Which is the national sport of India?",
        "answers": {
            "a": "Cricket",
            "b": "Kabaddi",
            "c": "Hockey"
        },
        "correctAnswer": "c",
        "explanation": "Hockey is considered the national sport of India."
    },
    {
        "question": "What does CPU stand for?",
        "answers": {
            "a": "Central Process Unit",
            "b": "Central Processing Unit",
            "c": "Central Primary Unit"
        },
        "correctAnswer": "b",
        "explanation": "CPU stands for Central Processing Unit, which is the brain of the computer."
    },

    {
        "question": "In which year did India gain independence?",
        "answers": {
            "a": "1945",
            "b": "1947",
            "c": "1950"
        },
        "correctAnswer": "b",
        "explanation": "India gained independence on August 15, 1947."
    },
    {
        "question": "Who was the first President of India?",
        "answers": {
            "a": "Jawaharlal Nehru",
            "b": "Rajendra Prasad",
            "c": "Sardar Patel"
        },
        "correctAnswer": "b",
        "explanation": "Dr. Rajendra Prasad was the first President of India."
    },
    {
        "question": "Which river is known as the lifeline of Madhya Pradesh and Gujarat?",
        "answers": {
            "a": "Narmada",
            "b": "Ganga",
            "c": "Krishna"
        },
        "correctAnswer": "a",
        "explanation": "The Narmada River flows through Madhya Pradesh and Gujarat, supporting agriculture and livelihoods."
    },
    {
        "question": "Who invented the light bulb?",
        "answers": {
            "a": "Thomas Edison",
            "b": "Nikola Tesla",
            "c": "Alexander Graham Bell"
        },
        "correctAnswer": "a",
        "explanation": "Thomas Edison is credited with inventing the practical light bulb in 1879."
    },
    {
        "question": "Which state is the largest producer of tea in India?",
        "answers": {
            "a": "Assam",
            "b": "Kerala",
            "c": "West Bengal"
        },
        "correctAnswer": "a",
        "explanation": "Assam is the largest producer of tea in India."
    },
    {
        "question": "What is the main language spoken in the Indian state of Maharashtra?",
        "answers": {
            "a": "Hindi",
            "b": "Marathi",
            "c": "Telugu"
        },
        "correctAnswer": "b",
        "explanation": "Marathi is the primary language spoken in Maharashtra."
    },
    {
        "question": "Which of these is a search engine?",
        "answers": {
            "a": "Google",
            "b": "Microsoft Word",
            "c": "Excel"
        },
        "correctAnswer": "a",
        "explanation": "Google is a popular search engine on the internet."
    },
    {
        "question": "What does 'CPU' stand for?",
        "answers": {
            "a": "Central Processing Unit",
            "b": "Central Power Unit",
            "c": "Computer Processing Unit"
        },
        "correctAnswer": "a",
        "explanation": "CPU stands for Central Processing Unit, the main part of a computer that processes instructions."
    },
    {
        "question": "Who was the first woman to go to space?",
        "answers": {
            "a": "Valentina Tereshkova",
            "b": "Kalpana Chawla",
            "c": "Sunita Williams"
        },
        "correctAnswer": "a",
        "explanation": "Valentina Tereshkova from the Soviet Union was the first woman to go to space in 1963."
    },
    {
        "question": "Which Indian state is famous for its backwaters?",
        "answers": {
            "a": "Goa",
            "b": "Kerala",
            "c": "Tamil Nadu"
        },
        "correctAnswer": "b",
        "explanation": "Kerala is known for its scenic backwaters, a popular tourist attraction."
    },
    {
        "question": "Which vitamin is essential for blood clotting?",
        "answers": {
            "a": "Vitamin A",
            "b": "Vitamin D",
            "c": "Vitamin K"
        },
        "correctAnswer": "c",
        "explanation": "Vitamin K is essential for blood clotting in the human body."
    },
    {
        "question": "What is the currency of Japan?",
        "answers": {
            "a": "Yen",
            "b": "Won",
            "c": "Peso"
        },
        "correctAnswer": "a",
        "explanation": "The Japanese Yen is the currency of Japan."
    },
    {
        "question": "In computer terminology, what does 'RAM' stand for?",
        "answers": {
            "a": "Random Access Memory",
            "b": "Read Access Memory",
            "c": "Random Active Memory"
        },
        "correctAnswer": "a",
        "explanation": "RAM stands for Random Access Memory, a type of volatile memory in computers."
    },
    {
        "question": "Who is known as the 'Missile Man of India'?",
        "answers": {
            "a": "A. P. J. Abdul Kalam",
            "b": "Vikram Sarabhai",
            "c": "Homi Bhabha"
        },
        "correctAnswer": "a",
        "explanation": "Dr. A. P. J. Abdul Kalam is known as the Missile Man of India for his work in missile technology."
    },
    {
        "question": "What is the smallest planet in our solar system?",
        "answers": {
            "a": "Venus",
            "b": "Mars",
            "c": "Mercury"
        },
        "correctAnswer": "c",
        "explanation": "Mercury is the smallest planet in our solar system."
    },
    {
        "question": "What is the powerhouse of the cell?",
        "answers": {
            "a": "Nucleus",
            "b": "Mitochondria",
            "c": "Ribosome"
        },
        "correctAnswer": "b",
        "explanation": "Mitochondria are known as the powerhouse of the cell because they produce energy."
    },
    {
        "question": "Which element has the chemical symbol 'O'?",
        "answers": {
            "a": "Oxygen",
            "b": "Osmium",
            "c": "Oganesson"
        },
        "correctAnswer": "a",
        "explanation": "Oxygen has the chemical symbol 'O' and is essential for life."
    },
    {
        "question": "Which Mughal emperor built the Taj Mahal?",
        "answers": {
            "a": "Akbar",
            "b": "Shah Jahan",
            "c": "Aurangzeb"
        },
        "correctAnswer": "b",
        "explanation": "Emperor Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal."
    },
    {
        "question": "What is the largest animal on Earth?",
        "answers": {
            "a": "Elephant",
            "b": "Blue Whale",
            "c": "Giraffe"
        },
        "correctAnswer": "b",
        "explanation": "The Blue Whale is the largest animal on Earth."
    },
    {
        "question": "Which Indian festival is known as the Festival of Lights?",
        "answers": {
            "a": "Holi",
            "b": "Diwali",
            "c": "Navratri"
        },
        "correctAnswer": "b",
        "explanation": "Diwali is known as the Festival of Lights and is celebrated across India."
    },
    
    {
        "question": "What is the capital city of Himachal Pradesh?",
        "answers": {
            "a": "Shimla",
            "b": "Manali",
            "c": "Dharamshala"
        },
        "correctAnswer": "a",
        "explanation": "Shimla is the capital of Himachal Pradesh."
    },
    {
        "question": "Which organ in the human body is responsible for pumping blood?",
        "answers": {
            "a": "Lungs",
            "b": "Heart",
            "c": "Kidney"
        },
        "correctAnswer": "b",
        "explanation": "The heart pumps blood throughout the human body."
    },
    {
        "question": "Who was the first Indian woman to win a Nobel Prize?",
        "answers": {
            "a": "Mother Teresa",
            "b": "Indira Gandhi",
            "c": "Sarojini Naidu"
        },
        "correctAnswer": "a",
        "explanation": "Mother Teresa won the Nobel Peace Prize in 1979."
    },
    {
        "question": "Which is the longest river in India?",
        "answers": {
            "a": "Yamuna",
            "b": "Ganga",
            "c": "Godavari"
        },
        "correctAnswer": "b",
        "explanation": "The Ganga is the longest river in India."
    },
    {
        "question": "Which is the largest freshwater lake in India?",
        "answers": {
            "a": "Chilka Lake",
            "b": "Wular Lake",
            "c": "Pulicat Lake"
        },
        "correctAnswer": "b",
        "explanation": "Wular Lake, in Jammu and Kashmir, is the largest freshwater lake in India."
    },
    {
        "question": "Which Indian state shares its border with Bangladesh?",
        "answers": {
            "a": "Punjab",
            "b": "West Bengal",
            "c": "Gujarat"
        },
        "correctAnswer": "b",
        "explanation": "West Bengal shares an international border with Bangladesh."
    },
    {
        "question": "What is the main source of energy for the Earth's climate?",
        "answers": {
            "a": "The Moon",
            "b": "The Sun",
            "c": "The Ocean"
        },
        "correctAnswer": "b",
        "explanation": "The Sun is the main source of energy that drives the Earth's climate."
    },
    {
        "question": "What type of gas do plants absorb during photosynthesis?",
        "answers": {
            "a": "Oxygen",
            "b": "Nitrogen",
            "c": "Carbon Dioxide"
        },
        "correctAnswer": "c",
        "explanation": "Plants absorb carbon dioxide during photosynthesis and release oxygen."
    },
    {
        "question": "Which freedom fighter is known as the 'Lion of Punjab'?",
        "answers": {
            "a": "Bhagat Singh",
            "b": "Lala Lajpat Rai",
            "c": "Sukhdev"
        },
        "correctAnswer": "b",
        "explanation": "Lala Lajpat Rai is known as the 'Lion of Punjab' for his courageous activism."
    },
    {
        "question": "What is the basic unit of life?",
        "answers": {
            "a": "Atom",
            "b": "Cell",
            "c": "Molecule"
        },
        "correctAnswer": "b",
        "explanation": "The cell is the basic unit of life in all living organisms."
    },
    {
        "question": "Who is the author of the book 'India Wins Freedom'?",
        "answers": {
            "a": "Mahatma Gandhi",
            "b": "Jawaharlal Nehru",
            "c": "Maulana Abul Kalam Azad"
        },
        "correctAnswer": "c",
        "explanation": "Maulana Abul Kalam Azad wrote the book 'India Wins Freedom,' detailing India's independence struggle."
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answers": {
            "a": "Venus",
            "b": "Mars",
            "c": "Jupiter"
        },
        "correctAnswer": "b",
        "explanation": "Mars is known as the Red Planet because of its reddish appearance."
    },
    {
        "question": "What is the boiling point of water in Celsius?",
        "answers": {
            "a": "90°C",
            "b": "100°C",
            "c": "120°C"
        },
        "correctAnswer": "b",
        "explanation": "Water boils at 100 degrees Celsius under standard atmospheric pressure."
    },
    {
        "question": "Which animal is known as the Ship of the Desert?",
        "answers": {
            "a": "Horse",
            "b": "Camel",
            "c": "Elephant"
        },
        "correctAnswer": "b",
        "explanation": "The camel is known as the Ship of the Desert because of its ability to survive in desert conditions."
    },
    {
        "question": "Which is the largest continent in the world by area?",
        "answers": {
            "a": "Africa",
            "b": "Asia",
            "c": "Europe"
        },
        "correctAnswer": "b",
        "explanation": "Asia is the largest continent by area on Earth."
    },
    {
        "question": "What does the acronym 'Wi-Fi' stand for?",
        "answers": {
            "a": "Wireless Fidelity",
            "b": "Wired Fidelity",
            "c": "Wide Fidelity"
        },
        "correctAnswer": "a",
        "explanation": "Wi-Fi stands for Wireless Fidelity, used for wireless networking."
    },
    {
        "question": "What is the process by which plants make their own food?",
        "answers": {
            "a": "Respiration",
            "b": "Photosynthesis",
            "c": "Digestion"
        },
        "correctAnswer": "b",
        "explanation": "Plants make their own food through photosynthesis."
    },
    {
        "question": "What does the 'Ctrl + S' shortcut do in most applications?",
        "answers": {
            "a": "Saves the document",
            "b": "Searches the document",
            "c": "Prints the document"
        },
        "correctAnswer": "a",
        "explanation": "In most applications, 'Ctrl + S' is the shortcut to save the current document."
    },
    {
        "question": "What is the chemical formula for water?",
        "answers": {
            "a": "H2O",
            "b": "CO2",
            "c": "O2"
        },
        "correctAnswer": "a",
        "explanation": "The chemical formula for water is H2O."
    },
    {
        "question": "Which nutrient is essential for muscle growth?",
        "answers": {
            "a": "Carbohydrates",
            "b": "Protein",
            "c": "Fat"
        },
        "correctAnswer": "b",
        "explanation": "Protein is essential for muscle growth and repair."
    },
    {
        "question": "Which of these is a primary color?",
        "answers": {
            "a": "Green",
            "b": "Blue",
            "c": "Yellow"
        },
        "correctAnswer": "b",
        "explanation": "Blue is one of the primary colors, along with red and yellow."
    },
    {
        "question": "Who composed the national anthem of India?",
        "answers": {
            "a": "Rabindranath Tagore",
            "b": "Bankim Chandra Chatterjee",
            "c": "Sarojini Naidu"
        },
        "correctAnswer": "a",
        "explanation": "Rabindranath Tagore composed 'Jana Gana Mana,' the national anthem of India."
    },
    {
        "question": "Who is known as the Father of the Indian Constitution?",
        "answers": {
            "a": "Mahatma Gandhi",
            "b": "B. R. Ambedkar",
            "c": "Jawaharlal Nehru"
        },
        "correctAnswer": "b",
        "explanation": "Dr. B. R. Ambedkar is known as the Father of the Indian Constitution for his role in drafting it."
    },
    {
        "question": "Which element is represented by the symbol 'Fe'?",
        "answers": {
            "a": "Fluorine",
            "b": "Iron",
            "c": "Francium"
        },
        "correctAnswer": "b",
        "explanation": "Iron is represented by the symbol 'Fe' in the periodic table."
    },
    {
        "question": "In which year was the Battle of Plassey fought?",
        "answers": {
            "a": "1757",
            "b": "1764",
            "c": "1857"
        },
        "correctAnswer": "a",
        "explanation": "The Battle of Plassey was fought in 1757, marking the beginning of British rule in India."
    },
    {
        "question": "What is the square root of 144?",
        "answers": {
            "a": "10",
            "b": "12",
            "c": "14"
        },
        "correctAnswer": "b",
        "explanation": "The square root of 144 is 12."
    }
]




    
    function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function buildQuiz() {
    const output = [];
    const shuffledQuestions = shuffle(myQuestions);

    shuffledQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
            <div class="explanation" id="explanation${questionNumber}" style="display:none;">${currentQuestion.explanation}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
            document.getElementById(`explanation${questionNumber}`).style.display = 'block';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} correct.`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);