import { useState } from "react";

export default function QuizScreen() {
    const questions = [
        {
            question: 'HTML Stand For _____________',
            options: ['Hypertext Markup Language', 'Hypertool Markup Language', 'Hypertool Module Language', 'Hypertest Markup Language'],
            correctAnswer: 'Hypertext Markup Language'
        },
        {
            question: 'CSS Stand For _____________',
            options: ['Colorful Style Sheets', 'Cascading StyleSheer', 'Computer StyleSheer', 'Creative StyleSheer'],
            correctAnswer: 'Cascading StyleSheer'
        },
        {
            question: 'JS Stand For _____________',
            options: ['Json Script', 'just sayin', 'Just Suffering', 'JavaScript'],
            correctAnswer: 'JavaScript'
        },
        {
            question: 'DOM Stand For _____________',
            options: ['Document Object Model', 'Dispersed Object Model', 'Date Of Manufacture', 'Disk On Module'],
            correctAnswer: 'Document Object Model'
        },
        {
            question: 'RAM Stand For _____________',
            options: ['Random Assigned Memory', 'Read Access Memory', 'Random Access Memory', 'All Of Them'],
            correctAnswer: 'Random Access Memory'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [marks, setMarks] = useState(0);

    const checkAnswer = (a, b) => {
        if (a === b) {
            setMarks(marks + 1);
        }
        if (currentIndex + 1 === questions.length ) {
            alert(`Quiz is Completed and Your Marks Are ${marks}`);
            setCurrentIndex(0);
            setMarks(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="p-4 font-sans">
            <div className="container ">
                <h1 className="text-center font-bold text-4xl ">Quiz App</h1>
                <div className="p-3 mb-3 rounded shadow-md">
                    <p className="text-center ">Question {currentIndex + 1}/{questions.length}</p>
                    <h3>Q: {questions[currentIndex].question}</h3>
                </div>
                <div className="row">
                    {questions[currentIndex].options.map((x, i) => (
                        <div key={i} className="m-2 p-3 rounded-lg border-2">
                            <button
                                onClick={() => checkAnswer(x, questions[currentIndex].correctAnswer)}
                                className=""
                            >
                                {x}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="p-3">
                    <button
                        onClick={() => setCurrentIndex(currentIndex + 1)}
                        className="border-2 rounded-lg p-2 "
                    >
                        Skip
                    </button>
                    <p className="border-2 p-3 mt-2 rounded-lg">Total Marks are {marks}</p>
                </div>
            </div>
        </div>
    );
}
