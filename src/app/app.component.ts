import { Component } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';

  // Funcion AplicarSonido
  aplicarSonido(numero: number): void{

    const audio = new Audio();
    // se concatena el numero para hacer referencia a alguno de los sonidos guardados en esa ruta 
    // Ejemplo: note1.wav donde 1 esta vinculado a la variable numero recivida por la funcion
    audio.src = '../assets/Sonidos/note'+numero+'.wav';
    // Cargar audio
    audio.load();
    // Play audio
    audio.play();

  }
}
