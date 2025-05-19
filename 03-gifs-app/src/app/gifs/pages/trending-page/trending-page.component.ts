import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from '../../../shared/services/scroll-state.service';





@Component({
  selector: 'app-trending-pages', 
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit {


  ngAfterViewInit(): void{

     const scrollDiv = this.scrollDivRef()?.nativeElement;
     if (!scrollDiv) return; 

   scrollDiv.scrollTop = this.scrollstateServices.trendingScrollState()
   
  } 
  gifService = inject(GifService)
  scrollstateServices = inject(ScrollStateService)

  //tomamos la referencia local del div

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  onScroll(){

   const scrollDiv = this.scrollDivRef()?.nativeElement;
   if (!scrollDiv) return; 

   const scrollTop = scrollDiv.scrollTop;
   const clientHeight = scrollDiv.clientHeight;
   const scroolHeight = scrollDiv.scrollHeight;
   this.scrollstateServices.trendingScrollState.set(scrollTop)

   const isaTBotton = scrollTop + clientHeight + 100 >= scroolHeight


   if(isaTBotton){
    this.gifService.cargarGifs()
   }



    
  }

}
