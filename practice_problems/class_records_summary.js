"use strict";

/*

Problem: take all the student data and return a summary object

Data:
  input: studentScores object
    contains key/value pairs of student / student info object
      student info object has id/number and scores/ scores object
        scores object has exams/array (of nums) and exercises/array (of nums)
  -all numbers are 0..100, except id (positive integer, 9 digits)

  output: class record summary object
    contains two key/array value pairs
      studentGrades/array (of strings, format '00 (F)' (grade score & letter)
        grade score is rounded to nearest whole percentage point
      exams/array (of objects)
        each object has three key/number value pairs
          exam grade average, rounded to nearest 10th
          minimum and maximum grade scores

Abstractions/Algorithm:

-First, find general exams info:
1. map each student object from studentScores onto array of score objects
2. map array of score objects onto array of exam scores sub-arrays
3. map nested array of student exam scores (1 array per student)
  onto new nested array of exam scores across students, i.e. 1 array per exam
4. map and reduce onto min and max exam score arrays
  i.e. store each array of min or max scores in a variable
5. map and reduce exam arrays to average exam scores
6. build exam summaries object from averages, minimums, maximums

-Second, find studentGrades info
1. map studentScores object to array of student grade summary objects
2. map student grade summary objects onto array of final grade percentages
3. map final grades onto array of grade strings with the grade letter
  -use a switch statement for concise conversion

*/

// student data:
let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

// helper functions
function getAllStudentScores(studentScores) {
  let allScores = Object.values(studentScores).map(studentObject => {
    return studentObject.scores;
  });

  return allScores;
}

function getStudentExamScores(allScores) {
  let examScoresPerStudent = allScores.map(scoresObject => {
    return scoresObject.exams;
  });

  return examScoresPerStudent;
}

function getScoresPerExam(examScoresPerStudent) {
  let scoresPerExam = [];

  examScoresPerStudent[0].forEach((_, examIndex) => {
    let examScores = examScoresPerStudent.map(studentScores => {
      return studentScores[examIndex];
    });

    scoresPerExam.push(examScores);
  });

  return scoresPerExam;
}
// // LS version of this is more abstracted and more concise:
// function transpose(array) {
//   return array[0].map((col, columnIdx) => {
//     return array.map(row => row[columnIdx]);
//   });
// }

function getAverage(array) {
  let sum = array.reduce((sum, currentNumber) => {
    return sum + currentNumber;
  }, 0);

  return sum / array.length;
}

function getStudentSummaries(allScores) {
  return allScores.map(student => {
    return {
      'exam average': getAverage(student.exams),
      'exercise total points': student.exercises.reduce((sum, score) => sum + score),
    };
  });
}

function getFinalStudentGrades(studentSummaries) {
  return studentSummaries.map(studentGrades => {
    let weightedExamGrade = studentGrades['exam average'] * 0.65;
    let weightedExerciseGrade = studentGrades['exercise total points'] * 0.35;
    return Math.round(weightedExamGrade + weightedExerciseGrade);
  });
}

function convertToGradeLetter(grade) {
  switch (true) {
    case (grade >= 93): return 'A';
    case (grade >= 85): return 'B';
    case (grade >= 77): return 'C';
    case (grade >= 69): return 'D';
    case (grade >= 60): return 'E';
    default: return 'F';
  }
}

function formatStudentGradesSummary(finalStudentGrades) {
  return finalStudentGrades.map(grade => {
    let gradeLetter = convertToGradeLetter(grade);
    return `${grade} (${gradeLetter})`;
  });
}

// main secondary functions
function generateStudentGradesSummary(allScores) {
  let studentSummaries = getStudentSummaries(allScores);
  let finalStudentGrades = getFinalStudentGrades(studentSummaries);
  return formatStudentGradesSummary(finalStudentGrades);
}

function generateExamsSummary(allScores) {
  let examScoresPerStudent = getStudentExamScores(allScores);
  let scoresPerExam = getScoresPerExam(examScoresPerStudent);

  return scoresPerExam.map((scores) => {
    return {
      average: getAverage(scores),
      minimum: Math.min(...scores),
      maxium: Math.max(...scores),
    };
  });
}

// main function
function generateClassRecordSummary(scores) {
  let classRecordSummary = {};

  let allScores = getAllStudentScores(scores);
  classRecordSummary.studentGrades = generateStudentGradesSummary(allScores);
  classRecordSummary.exams = generateExamsSummary(allScores);

  return classRecordSummary;
}

// test:
console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
