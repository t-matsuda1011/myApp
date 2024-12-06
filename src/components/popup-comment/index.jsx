export default function PopUpComment({ isCorrect, question, correct, answer, explanation, click }) {
    return (
        <div
            style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // 背景を半透明に
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
            className="top-5 md:top-0 left-0 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
            <div
                style={{
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    maxWidth: "500px",
                    width: "90%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                }}
                className="bg-white border border-gray-300 p-1 md:p-5 max-w-md w-11/12 md:w-2/3 rounded-lg shadow-lg"
            >
                <h2 className="mt-5 text-2xl font-bold">{isCorrect ? "正解です！" : "不正解…"}</h2>
                <div className="p-6 md:p-7">
                    <p className="text-lg">問題文：{question}</p>
                    <div>
                        <p className="mt-5">正解：{correct}</p>
                        <p>あなたの回答：{answer}</p>
                    </div>
                    <div className="p-5 mt-7 border rounded-xl border-green-700">
                        <p className="mb-1 font-semibold">解説</p>
                        <p>{explanation}</p>
                    </div>
                </div>
                <button
                    className="rounded-xl p-5 mb-5 bg-green-600 hover:bg-green-800 text-white transition-all"
                    onClick={click}
                >
                    次の問題へ
                </button>
            </div>
        </div>
    );
};