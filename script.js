// Quiz data
// Each object holds one question, its options, the correct answer index, and feedback text.
const questions = [
    {
        cat: "<img src=\"clapper.svg\" alt=\"🎬\" class=\"icon\"> Movies",
        q: "Which film became the first Bollywood movie to cross ₹2000 crore worldwide?",
        opts: ["Baahubali 2", "Dangal", "KGF Chapter 2", "Pathaan"],
        a: 1,
        factOk: "Correct! Dangal didn't hit ₹2000 crore because of India - it blew up in China, where it earned most of its box office and became one of the most successful foreign films ever released there.",
        factNo: "Oops! Dangal didn't hit ₹2000 crore because of India - it blew up in China, where it earned most of its box office and became one of the most successful foreign films ever released there."
    },
    {
        cat: "<img src=\"star.svg\" alt=\"⭐\" class=\"icon\"> Pop Culture",
        q: "Before becoming a superstar, Akshay Kumar worked as a waiter and chef in which city?",
        opts: ["Dubai", "London", "Bangkok", "Singapore"],
        a: 2,
        factOk: "Correct! Akshay Kumar trained in martial arts and worked as a chef and waiter in Bangkok before returning to India and entering Bollywood.",
        factNo: "Oops! Akshay Kumar trained in martial arts and worked as a chef and waiter in Bangkok before returning to India and entering Bollywood."
    },
    {
        cat: "<img src=\"clapper.svg\" alt=\"🎬\" class=\"icon\"> Movies",
        q: "Which Bollywood film was first shot in Switzerland and made it a Bollywood hotspot?",
        opts: ["Dilwale Dulhania Le Jayenge", "Sangam", "Chandni", "Kaho Naa Pyaar Hai"],
        a: 1,
        factOk: "Correct! Raj Kapoor's Sangam (1964) was the first major Bollywood production to shoot in Switzerland, starting a decades-long love affair between Bollywood and the Alps.",
        factNo: "Oops! Raj Kapoor's Sangam (1964) was the first major Bollywood production to shoot in Switzerland, starting a decades-long love affair between Bollywood and the Alps."
    },
    {
        cat: "<img src=\"clapper.svg\" alt=\"🎬\" class=\"icon\"> Movies",
        q: "The RRR song 'Naatu Naatu' won which prestigious international award in 2023?",
        opts: ["Golden Globe", "BAFTA", "Academy Award", "Grammy"],
        a: 2,
        factOk: "Correct! Though technically a Telugu film, RRR's 'Naatu Naatu' made history as the first Indian song to win the Academy Award for Best Original Song.",
        factNo: "Oops! Though technically a Telugu film, RRR's 'Naatu Naatu' made history as the first Indian song to win the Academy Award for Best Original Song."
    },
    {
        cat: "<img src=\"star.svg\" alt=\"⭐\" class=\"icon\"> Pop Culture",
        q: "Priyanka Chopra won Miss World in which year before pivoting to Bollywood?",
        opts: ["1998", "1999", "2000", "2001"],
        a: 2,
        factOk: "Correct! Priyanka Chopra was crowned Miss World 2000 at age 18, and made her Bollywood debut just two years later.",
        factNo: "Oops! Priyanka Chopra was crowned Miss World 2000 at age 18, and made her Bollywood debut just two years later."
    },
    {
        cat: "<img src=\"clapper.svg\" alt=\"🎬\" class=\"icon\"> Movies",
        q: "\"Mogambo khush hua!\" is the legendary villain catchphrase from which film?",
        opts: ["Sholay", "Agneepath", "Mr. India", "Don"],
        a: 2,
        factOk: "Correct! Amrish Puri's Mogambo from Mr. India (1987) became one of Bollywood's greatest villains and this line is still iconic.",
        factNo: "Oops! Amrish Puri's Mogambo from Mr. India (1987) became one of Bollywood's greatest villains and this line is still iconic."
    },
    {
        cat: "<img src=\"star.svg\" alt=\"⭐\" class=\"icon\"> Pop Culture",
        q: "Deepika Padukone was a national-level player in which sport before becoming an actress?",
        opts: ["Tennis", "Squash", "Badminton", "Table Tennis"],
        a: 2,
        factOk: "Correct! Deepika was a state-level badminton player and was even considered for the national team before moving into modelling and acting.",
        factNo: "Oops! Deepika was a state-level badminton player and was even considered for the national team before moving into modelling and acting."
    },
    {
        cat: "<img src=\"clapper.svg\" alt=\"🎬\" class=\"icon\"> Movies",
        q: "Which film had the longest theatrical run in Bollywood record?",
        opts: ["Sholay", "Mother India", "DDLJ", "Mughal-E-Azam"],
        a: 2,
        factOk: "Correct! DDLJ screened at Mumbai's Maratha Mandir for over 1,000 consecutive weeks and ended its run in 2022 after more than 26 years.",
        factNo: "Oops! DDLJ screened at Mumbai's Maratha Mandir for over 1,000 consecutive weeks and ended its run in 2022 after more than 26 years."
    },
    {
        cat: "<img src=\"clapper.svg\" alt=\"🎬\" class=\"icon\"> Movies",
        q: "\"Picture abhi baaki hai mere dost\" is the closing line of which film?",
        opts: ["Andaz Apna Apna", "Om Shanti Om", "Dil Dhadakne Do", "Student Of The Year"],
        a: 1,
        factOk: "Correct! Shah Rukh Khan says this at the end of Om Shanti Om (2007), and it perfectly matches the film's playful, self-aware style.",
        factNo: "Oops! Shah Rukh Khan says this at the end of Om Shanti Om (2007), and it perfectly matches the film's playful, self-aware style."
    },
    {
        cat: "<img src=\"clapper.svg\" alt=\"🎬\" class=\"icon\"> Movies",
        q: "Which Western clothing item did Kuch Kuch Hota Hai popularize?",
        opts: ["Denim jacket", "Basketball jersey", "Varsity jacket", "Crop top"],
        a: 1,
        factOk: "Correct! Shah Rukh Khan's sporty college look made basketball jerseys and sportswear feel stylish and aspirational for a whole generation.",
        factNo: "Oops! Shah Rukh Khan's sporty college look made basketball jerseys and sportswear feel stylish and aspirational for a whole generation."
    }
];

// Result messages based on score
const grades = [
    { min: 10, emoji: "<img src=\"trophy.svg\" alt=\"🏆\" class=\"icon\">", title: "Absolute Cinema!", sub: "Perfect score - you ARE the main character." },
    { min: 8, emoji: "<img src=\"sparkles.svg\" alt=\"🌟\" class=\"icon\">", title: "Award-Worthy!", sub: "Standing ovation. Nearly flawless!" },
    { min: 6, emoji: "<img src=\"clapper.svg\" alt=\"🎬\" class=\"icon\">", title: "Solid Screentime!", sub: "Strong showing - a few missed cues though." },
    { min: 4, emoji: "<img src=\"popcorn.svg\" alt=\"🍿\" class=\"icon\">", title: "Good Audience!", sub: "You loved the show but missed some plot twists." },
    { min: 0, emoji: "<img src=\"grinning-face-with-sweat.svg\" alt=\"😅\" class=\"icon\">", title: "Director's Cut Needed", sub: "The sequel will be better. We believe in you!" }
];

// Quiz state
let currentQuestion = 0;
let score = 0;
let wrong = 0;
let hasAnswered = false;
let timerId = null;
let timeLeft = 20;

// Small helper to get elements quickly
function getElement(id) {
    return document.getElementById(id);
}

// Show only one screen at a time
function showScreen(id) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    getElement(id).classList.add("active");
}

// Reset values and begin the quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    hasAnswered = false;

    getElement("spn").textContent = "0";
    showScreen("s-quiz");
    loadQuestion();
}

// Put the current question on the page
function loadQuestion() {
    const question = questions[currentQuestion];
    const optionsBox = getElement("opts");
    const feedbackBox = getElement("fb");
    const nextButton = getElement("btn-next");
    const optionLabels = ["A", "B", "C", "D"];

    hasAnswered = false;
    getElement("qnum").textContent = currentQuestion + 1;
    getElement("qcat").innerHTML = question.cat;
    getElement("qtext").textContent = question.q;
    getElement("prog").style.width = (currentQuestion / questions.length) * 100 + "%";

    feedbackBox.style.display = "none";
    feedbackBox.className = "fb";
    nextButton.style.display = "none";
    optionsBox.innerHTML = "";

    // Create one button for each option
    question.opts.forEach(function (optionText, index) {
        const optionButton = document.createElement("button");
        optionButton.className = "opt";
        optionButton.innerHTML =
            '<span class="opt-l">' + optionLabels[index] + "</span><span>" + optionText + "</span>";

        optionButton.addEventListener("click", function () {
            selectAnswer(index, optionButton);
        });

        optionsBox.appendChild(optionButton);
    });

    startTimer();
}

// Start the 20 second timer for each question
function startTimer() {
    clearInterval(timerId);
    timeLeft = 20;
    updateTimer();

    timerId = setInterval(function () {
        timeLeft -= 1;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerId);
            handleTimeUp();
        }
    }, 1000);
}

// Update timer text and warning color
function updateTimer() {
    const timerText = getElement("tval");
    timerText.textContent = timeLeft;
    timerText.className = timeLeft <= 5 ? "tval hot" : "tval";
}

// When user runs out of time, reveal correct answer
function handleTimeUp() {
    if (hasAnswered) {
        return;
    }

    const question = questions[currentQuestion];
    const optionButtons = document.querySelectorAll(".opt");

    hasAnswered = true;
    wrong += 1;

    optionButtons[question.a].classList.add("correct");
    disableAllOptions();
    showFeedback(false, "<img src=\"timer.svg\" alt=\"⏰\" class=\"icon\"> Time's up! " + question.factNo);
    getElement("btn-next").style.display = "inline-flex";
}

// Check the selected answer
function selectAnswer(selectedIndex, selectedButton) {
    if (hasAnswered) {
        return;
    }

    const question = questions[currentQuestion];
    const optionButtons = document.querySelectorAll(".opt");

    hasAnswered = true;
    clearInterval(timerId);

    if (selectedIndex === question.a) {
        score += 1;
        selectedButton.classList.add("correct");
        getElement("spn").textContent = score;
        showFeedback(true, question.factOk);
    } else {
        wrong += 1;
        selectedButton.classList.add("wrong");
        optionButtons[question.a].classList.add("correct");
        showFeedback(false, question.factNo);
    }

    disableAllOptions();
    getElement("btn-next").style.display = "inline-flex";
}

// Stop extra clicks after the answer is decided
function disableAllOptions() {
    const optionButtons = document.querySelectorAll(".opt");

    optionButtons.forEach(function (button) {
        button.disabled = true;
    });
}

// Show green or red feedback box
function showFeedback(isCorrect, message) {
    const feedbackBox = getElement("fb");

    feedbackBox.className = isCorrect ? "fb ok" : "fb no";
    feedbackBox.innerHTML = message;
    feedbackBox.style.display = "block";
}

// Move to next question or finish the quiz
function goToNextQuestion() {
    currentQuestion += 1;

    if (currentQuestion >= questions.length) {
        showResults();
    } else {
        loadQuestion();
    }
}

// Show the final result screen
function showResults() {
    const result = grades.find(function (grade) {
        return score >= grade.min;
    });

    clearInterval(timerId);
    showScreen("s-results");

    getElement("remoji").innerHTML = result.emoji;
    getElement("rtitle").textContent = result.title;
    getElement("rsub").textContent = result.sub;
    getElement("rscore").textContent = score + "/" + questions.length;
    getElement("bdc").textContent = score;
    getElement("bdw").textContent = wrong;

    // Animate the result ring after the screen appears
    setTimeout(function () {
        const radius = 56;
        const circumference = 2 * Math.PI * radius;
        const ring = getElement("ring-fg");

        ring.style.strokeDasharray = circumference;
        ring.style.strokeDashoffset = circumference - (score / questions.length) * circumference;

        if (score >= 7) {
            launchConfetti();
        }
    }, 250);
}

// Restart from the welcome screen
function restartQuiz() {
    clearInterval(timerId);
    showScreen("s-welcome");
}

// Share score using native share if available, otherwise copy text
function shareScore() {
    const shareText = "🎬 I scored " + score + "/10 on CineMania - the Bollywood quiz! Can you beat me?";

    if (navigator.share) {
        navigator.share({
            title: "CineMania",
            text: shareText
        });
    } else {
        navigator.clipboard.writeText(shareText).then(function () {
            alert("Copied! 📋");
        });
    }
}

// Simple confetti animation for higher scores
function launchConfetti() {
    const canvas = getElement("confetti");
    const context = canvas.getContext("2d");
    const colors = ["#FFE135", "#FF6B2B", "#FF3D8A", "#2BAAFF", "#00D68F", "#FFFFFF"];
    const shapes = ["rect", "circle", "triangle"];
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = Array.from({ length: 130 }, function () {
        return {
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * canvas.height * 0.4,
            size: 6 + Math.random() * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            rotate: Math.random() * Math.PI * 2,
            speedX: (Math.random() - 0.5) * 4,
            speedY: 2 + Math.random() * 5,
            rotateSpeed: (Math.random() - 0.5) * 0.25
        };
    });

    function drawPiece(piece) {
        context.save();
        context.translate(piece.x, piece.y);
        context.rotate(piece.rotate);
        context.fillStyle = piece.color;

        if (piece.shape === "rect") {
            context.fillRect(-piece.size / 2, -piece.size / 4, piece.size, piece.size / 2);
        } else if (piece.shape === "circle") {
            context.beginPath();
            context.arc(0, 0, piece.size / 2, 0, Math.PI * 2);
            context.fill();
        } else {
            context.beginPath();
            context.moveTo(0, -piece.size / 2);
            context.lineTo(piece.size / 2, piece.size / 2);
            context.lineTo(-piece.size / 2, piece.size / 2);
            context.closePath();
            context.fill();
        }

        context.restore();
    }

    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(function (piece) {
            drawPiece(piece);
            piece.x += piece.speedX;
            piece.y += piece.speedY;
            piece.rotate += piece.rotateSpeed;
        });

        const stillVisible = pieces.some(function (piece) {
            return piece.y < canvas.height + 30;
        });

        if (stillVisible) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();

    setTimeout(function () {
        cancelAnimationFrame(animationFrameId);
        context.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
}

// Add click events after the page is ready
document.addEventListener("DOMContentLoaded", function () {
    getElement("start-btn").addEventListener("click", startQuiz);
    getElement("btn-next").addEventListener("click", goToNextQuestion);
    getElement("restart-btn").addEventListener("click", restartQuiz);
    getElement("share-btn").addEventListener("click", shareScore);
});