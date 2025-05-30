import type{ RESTCountry } from "../interfaces/rest-countries.interface"
import type{ Country } from '../interfaces/country.interface';

export class CountryMapper {

    static MapRestCountrytoCountry(country:RESTCountry):Country{

        return{
            cca2: country.cca2,
            flag: country.flag,
            flagSvg: country.flags.svg,
            common: country.translations['spa'].common ?? 'No idiona en español',
            capital: country.capital,
            population: country.population,

        }

    }

    static CountryItemCountry(country:RESTCountry[]):Country[]{
        return country.map(country => this.MapRestCountrytoCountry(country))
    }


}





// export class GifMapper{

//     static mapGiphyItemToGif(item:GiphyItem):Gif{
//         return{
//             id: item.id,
//             title:item.title,
//             url: item.images.original.url
//         }
//     }


//     static mapGiphyItemsToGifArray(items:GiphyItem[]):Gif[]{
//         return items.map(this.mapGiphyItemToGif)

//     }
// }