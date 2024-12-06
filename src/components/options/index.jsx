export default function Options({ answers, click }) {
    return (
        <div className="mt-5 flex flex-col md:flex-row justify-center">
            {answers.map((answer) => (
                <button
                    className="rounded-xl p-5 mb-2 mr-2 bg-green-600 hover:bg-green-800 text-white transition-all"
                    key={answer}
                    onClick={click(answer)}
                >
                    {answer}
                </button>
            ))}
        </div>
    );
}