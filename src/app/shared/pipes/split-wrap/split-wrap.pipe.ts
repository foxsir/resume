import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitWrap'
})
export class SplitWrapPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const split = value.split("");
    split.forEach((v, k) => {
      split[k] = `<span>${v}</span>`;
    });
    return split.join("");
  }

}
