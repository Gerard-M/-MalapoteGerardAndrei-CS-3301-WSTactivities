const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const sentenceCount = document.getElementById('sentence-count');

function countWords(text) {
    const trimmedText = text.trim();
    return trimmedText ? trimmedText.split(/\s+/).length : 0;
}

function countSentences(text) {
    const trimmedText = text.trim();
    return trimmedText ? trimmedText.split(/[.!?]+/).filter(Boolean).length : 0;
}

function updateCounts() {
    const text = textInput.value;
    const words = countWords(text);
    const sentences = countSentences(text);
    
    wordCount.textContent = `WORDS: ${String(words).padStart(2, '0')}`;
    sentenceCount.textContent = `SENTENCES: ${String(sentences).padStart(2, '0')}`;
}

textInput.addEventListener('input', updateCounts);