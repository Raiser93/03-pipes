import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre = `Brayan`;
    nombre2 = `Kai'sa, La cazadora del vacio`;

    arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    PI = Math.PI;

    porcentaje = 0.235;

    salario = 1234.5;

    campeon = {
        nombre: `Kai'sa`,
        rol: 'Tirador',
        edad: 25,
        ubicacion: {
            lugar: 'El vacio',
            pais: 'Shurima'
        }
    };

    valorPromesa = new Promise<string>((resolve, reject ) => {
        setTimeout(() => {
            resolve('A dormir!!');
        }, 1500);
    });

    fecha = new Date();

    idioma = 'ja';

    videoUrl = 'https://www.youtube.com/embed/RLWcYADoV84';

        activar = true;
}
