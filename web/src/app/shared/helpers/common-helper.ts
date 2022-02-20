export class CommonHelper {
  static splitCasedString(text: string, splitCharacter = ' '): string {
    if (text) {
      const splitOnCapital = text.match(/[A-Z]*[^A-Z]+/g);
      return splitOnCapital ? splitOnCapital.join(splitCharacter) : '';
    } else {
      return '';
    }
  }
}
