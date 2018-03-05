//Declaración variables
var mayor = 0;
var posicion;
var aprobados = 0;
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
document.write("<br>")

//Alumnos aprobados
for (i = 0; i < 35; i++) {
    if (alumno[i] >= 5) {
        ++aprobados;
    }
}
document.write("Cantidad de alumnos aprobados: " + aprobados + " ");