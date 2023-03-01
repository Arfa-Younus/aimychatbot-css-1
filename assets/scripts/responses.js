function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "name") {
        return "Aimy";
    }
    if (input == "asslam o alikum") {
        return "walikum salam!";
    } else if (input == "hy") {
        return "hy pretty";
    } else if (input == "what is your name") {
        return "my naame is Aimy";
    }
    else {
        return "Try asking something else!";
    }
}