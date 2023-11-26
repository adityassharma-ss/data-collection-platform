const ValidationService = {
    validateResponse: (response) => {
      console.log('Validating response:', response);
  
      if (response && response.answers && response.answers.length > 0) {
        const invalidAnswers = response.answers.filter(answer => {
          // Example: Check if the answer value is empty for text questions
          return answer.questionType === 'text' && !answer.value.trim();
        });
  
        return invalidAnswers.length === 0;
      }
  
      return false;
    },
  };
  
  module.exports = ValidationService;
  