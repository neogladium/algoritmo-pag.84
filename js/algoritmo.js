//Declaración variables
var mayor = 0;
var menor = 0;
var aprobados = 0;
//Las notas de los alumnos
var alumno = [6.5, 4, 5.5, 9, 8.4, 7, 3.6, 4, 5, 8, 9.7, 5, 8.7, 4.2, 7, 5.6, 7.5, 2.5, 4, 6.5, 4.8, 9.8, 6.3, 2.5, 6, 7.8, 4.5, 2, 0, 3, 6.8, 8.6, 7.4, 1, 4.5]

//Mostrar las notas de los alumnos
for (i = 0; i < 35; i++) {
    document.write("Alumno " + i + ", Nota: " + alumno[i])
    document.write("<br>")

}

//Mostrar mayor nota
for (i = 0; i < 35; i++) {
    if (mayor < alumno[i]) {
        mayor = alumno[i];
    }
}
document.write("<br>")
document.write("La mayor nota es un: " + mayor);

//Mostrar menor nota
for (i = 0; i < 35; i++) {
    if (menor > alumno[i]) {
        menor = alumno[i];
    }
}
document.write("<br>")
document.write("La menor nota es un: " + menor);

//Alumnos aprobados
document.write("<br>")
for (i = 0; i < 35; i++) {
    if (alumno[i] >= 5) {
        ++aprobados;
    }
}
document.write("<br>")
document.write("Cantidad de alumnos aprobados: " + aprobados + " ");
document.write("<br>")

//Mostrar las notas ordenadas de menor a mayor
document.write("<br>")
document.write("Notas ordenadas de menor a mayor: ")
document.write(alumno.sort((a, b) => a - b))
document.write("<br>")
    //Mostrar las notas ordenadas de mayor a menor
document.write("<br>")
document.write("Notas ordenadas de mayor a menor: ")
document.write(alumno.sort((a, b) => b - a))
document.write("<br>")