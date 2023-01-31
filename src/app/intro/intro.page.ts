import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "LIBRARY",
      subtitle: " Miguel Unamuno",
      img: "https://i.pinimg.com/736x/2a/9a/ca/2a9acad6f2853ecd86c0f007ccfbf14b.jpg",
      description: "'Cuanto menos se lee, más daño hace lo que se lee'"
    },  
    {
      title: "Genero: Fantastica",
      subtitle: "El señor de los Anillos",
      img: "https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg",
      description: "En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media"
    },
    {
      title: " Genero: Paranormal",
      subtitle: "Los sin rostro",
      img: "https://planetadelibrospe9.cdnstatics.com/usuaris/libros/fotos/339/m_libros/338700_portada_los-sin-rostro_david-cuevas_202105271617.jpg",
      description: "Nadie está a salvo de cruzarse con entidades desconocidas que interactuan en nuestra realidad."
    },
    {
      title: " Genero: Policial",
      subtitle: "Estudio en escarlata",
      img: "https://books.google.com.pe/books/publisher/content?id=tu00CgAAQBAJ&hl=es&pg=PP1&img=1&zoom=3&sig=ACfU3U3PNbhsagZYD2q8AlziVdJJwYDnaQ&w=1280",
      description: "La novela comienza cuando Watson se instala en Londres; donde conoce al excentrico investigador Sherlock Holmes"
    }   
  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("menu/home");
  }
  ngOnInit() {
  }

}