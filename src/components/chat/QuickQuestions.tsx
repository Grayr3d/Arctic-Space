import React from 'react';

interface QuestionSuggestion {
  id: string;
  text: string;
}

interface QuickQuestionsProps {
  questions: QuestionSuggestion[];
  onSelect: (text: string) => void;
}

export function QuickQuestions({ questions, onSelect }: QuickQuestionsProps) {
  return (
    <div className="p-6 border-b bg-gray-50">
      <div className="text-sm text-gray-500 mb-3">Suggested questions:</div>
      <div className="grid grid-cols-2 gap-3">
        {questions.map((question) => (
          <button
            key={question.id}
            onClick={() => onSelect(question.text)}
            className="text-left px-4 py-3 rounded-xl bg-white hover:bg-gray-50 border text-sm transition-colors"
          >
            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
}