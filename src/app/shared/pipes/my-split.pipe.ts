import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mySplit",
})
export class MySplitPipe implements PipeTransform {
  transform(value: string): string {
    let valueInverse = value.split("").reverse().join("");
    console.log(valueInverse);
    let res = [...valueInverse].reduce(
      (p, c, i) => (p += i && !(i % 3) ? "." + c : c),
      ""
    );
    return res.split("").reverse().join("");
  }
}
