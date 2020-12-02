const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

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
            pairs[i].push(girls[i]);
        }
    }

    return pairs;
}

console.log(`<h3>Розділення студентів на пари - ${pairsOfStudents(students)}</h3><br>`)
