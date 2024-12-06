export default function PopUpComment({ isCorrect, question, correct, answer, explanation, click }) {
    return (
        <div
            style={
                {
                    position: "fixed",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    padding: "20px",
                    zIndex: 1000,
                    width: "90%",
                    height: "25%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                }
            }>
            <h2>{isCorrect ? "正解です！" : "不正解…"}</h2>
            <p>{question}</p>
            <p>正解：{correct}　あなたの回答：{answer}</p>
            <p>{explanation}</p>
            <button onClick={click}>
                次の問題へ
            </button>
        </div>
    );
};