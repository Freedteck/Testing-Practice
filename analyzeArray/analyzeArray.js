function analyzeArray(arr) {
    // Check if the input is a non-empty array
    if (!Array.isArray(arr) || arr.length === 0) {
        return {
            error: "Invalid input. Please provide a non-empty array of numbers.",
        };
    }
    
    const sorted = [...arr].sort((a, b) => a - b);

    // Calculate average, min, max, and length
    const average = sorted.reduce((current, next) => current + next, 0) / sorted.length;
    const min = sorted[0];
    const max = sorted[sorted.length - 1];
    const length = sorted.length;

    // Construct the result object
    const resultObject = {
        average,
        min,
        max,
        length,
    };

    return resultObject;
}

export default analyzeArray;
