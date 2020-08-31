class Carousel
{
    constructor()
    {
        this.board = document.querySelector('.carousel__items');
        this.slideNext = document.querySelector('.carousel__next');
        this.slidePrev = document.querySelector('.carousel__prev');

        this.slideQtd = this.board.childElementCount;
        this.slideIndex = 1;

        this.slideNext.addEventListener('click', this.slide_next);
        this.slidePrev.addEventListener('click', this.slide_prev);
    }

    slide_next()
    {
        console.log("Próximo Slide");
    }

    slide_prev()
    {
        console.log("Slide Anterior");        
    }

}

const c = new Carousel();
