import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';
import { toggleCasePipe } from '../../pipes/toggle-pipe.pipe';
import { CanFlyPipe } from '../../pipes/canFly-pipe.pipe';
import { ColorStylePipe } from '../../pipes/color-style.pipe';
import { heroes } from '../../data/heroes.data';
import { ColorNamePipe } from '../../pipes/color-name.pipe';
import { CreatorPipe } from '../../pipes/creator-pipe.pipe';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custon-page',
  imports: [
    SectionComponent,
    toggleCasePipe,
    CanFlyPipe,
    ColorStylePipe,
    CreatorPipe,
    TitleCasePipe,
    UpperCasePipe,
    HeroSortByPipe,
    HeroFilterPipe
  ],
  templateUrl: './custon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustonPageComponent {
  title = signal('Pipes personalizados');

  name = signal('walter cardona');

  nameson = signal('samuel cardona');

  uppercase = signal(true);

  uppercaseson = signal(true);

  toggleCase() {
    this.uppercase.update((v) => !v);
  }

  //pipes perosnalizados

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);


  searchQuery = signal('');
}
