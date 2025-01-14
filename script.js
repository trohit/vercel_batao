body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #e6f2ff, #ffffff);
    color: #333;
}

main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

section {
    margin-bottom: 40px;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
    color: #1a73e8;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

h2 {
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
}

.cta-button {
    background-color: #1a73e8;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #1557b0;
}

#hero {
    text-align: center;
    background-color: #f8f9fa;
}

#hero p {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.feature-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.feature {
    flex-basis: 30%;
    text-align: center;
    margin-bottom: 20px;
}

.feature-icon {
    font-size: 2em;
    margin-bottom: 10px;
}

#quiz-demo {
    background-color: #f0f7ff;
}

.quiz-container {
    max-width: 600px;
    margin: 0 auto;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

#submit-answer {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
}

#submit-answer:hover {
    background-color: #45a049;
}

#result {
    font-weight: bold;
    margin-top: 10px;
}

#cta {
    text-align: center;
    background-color: #1a73e8;
    color: white;
}

#cta h2, #cta p {
    color: white;
}

#cta .cta-button {
    background-color: white;
    color: #1a73e8;
}

#cta .cta-button:hover {
    background-color: #f0f0f0;
}

@media (max-width: 768px) {
    .feature-container {
        flex-direction: column;
    }

    .feature {
        flex-basis: 100%;
    }
}

