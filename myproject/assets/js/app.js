'use strict';

const { createApp } = Vue;

createApp ({
  data (){
    return{
      movie: {
        title: 'The Mandalorian',
        images: [
          'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
          'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg',
          'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg',
          'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg',
          'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg',
        ],
        category: 'Action',
        length: 120,
        },
      };

  },
  methods: {
    prev() {
      console.log('sono prev')
    },
    next() {
      console.log('sono next')
    }
  }
}).mount('#app');