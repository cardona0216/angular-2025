import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  title = input.required()
  subtitle = input()
 }
