const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// function pairsOfStudents(students) {
//     let pairs = [];
//     let girls = [];
//     for (let i = 0; i < students.length; i++) {
//         let nameOfStudent = students[i];
//         if (nameOfStudent[nameOfStudent.length - 1] !== ‘а’) {
//             pairs.push([nameOfStudent]);
//         } else {
//             girls.push(nameOfStudent);
//         }
//     }
//     for (let i = 0; i < pairs.length; i++) {
//         if (i < girls.length) {
//             pairs[i].push(girls[i]);
//         }
//     }
//     const results = pairs.reduce((result, pair) => {
//         return result + pair.join(” - “) + “;”;
//     }, “”);
//     return results.split(“;”);
// }
// console.log(`<h3>Розділення студентів на пари - ${pairsOfStudents(students).join(“; “)}</h3><br>`)
//Пари студентів
function pairsOfStudents(students) {

    let pairs = [];
    let girls = [];
    for (let i = 0; i < students.length; i++) {
        let nameOfStudent = students[i];
        if (nameOfStudent[nameOfStudent.length - 1] !== 'а') {
            pairs.push([nameOfStudent]);
        } else {
            girls.push(nameOfStudent);
        }
    }
    for (let i = 0; i < pairs.length; i++) {
        if (i < girls.length) {
            pairs[i].push(girls[i] + ' ');
        }
    }

    return pairs;
}

document.writeln(`<h3>Розділення студентів на пари:  ${pairsOfStudents(students).join('; ')}</h3><br>`)

//Теми пар студентів
function themeOfPairStudents(pairsOfStudents, themes) {
    themesOfStudent = [];
    for (let i = 0; i < pairsOfStudents.length; i++) {
        if (i < themes.length) {
            studentsPair = pairsOfStudents[i][0] + ' i ' + pairsOfStudents[i][1];
            themesOfStudent.push([studentsPair + " - " + themes[i] + '<br>']);
        }
    }
    return themesOfStudent;
}
document.writeln(`<h3>Теми пар студентів: <br> ${themeOfPairStudents(pairsOfStudents(students), themes)}</h3><br>`);
//!!!Комент для себе - довго мучився бо при виклику ф-ї pairOfStudents не вказав аргумент (students) 

// Оцінки студентів:
function marksOfStudents(students, marks) {
    let studentsMark = [];
    for (let i = 0; i < students.length; i++) {
        if (i < marks.length) {
            studentsMark.push([students[i]] + ' - ' + [marks[i]] + '<br>');
        }
    }
    return studentsMark;
}
document.writeln(`<h3>Оцінки студентів: <br> ${marksOfStudents(students, marks)}</h3><br>`)

//Оцінки за теми пар студентів

function marksOfStudentsThemes(themeOfPairStudents) {
    let studentsThemesMarks = [];
    let mark = [1, 2, 3, 4, 5];
    let randomIndex = Math.floor(Math.random() * 5);
    for (let i = 0; i < themeOfPairStudents; i++) {
        studentsThemesMarks.push([themeOfPairStudents[i], mark[randomIndex]]);
    }
    return studentsThemesMarks;
}
document.writeln(`<h3>Випадкова оцінка тем студентів: 
${marksOfStudentsThemes(themeOfPairStudents(pairsOfStudents(students), themes))}</h3>`);