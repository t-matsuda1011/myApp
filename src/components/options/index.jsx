"use client";

import React from "react";

export default function Options({ answers }) {
    return (
        <div className="mt-5">
            {answers.map((answer) => (
                <button
                    className="rounded-xl p-5 mb-2 mr-2 bg-green-600 hover:bg-green-800 text-white transition-all"
                    key={answer}
                    onClick={() => alert(answer)}
                >
                    {answer}
                </button>
            ))}
        </div>
    );
}