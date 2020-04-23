import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'paragraph'
})
export class ParagraphPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value.replace(new RegExp('\\\\n', 'g'), '\n\n');
    }
  }

}
