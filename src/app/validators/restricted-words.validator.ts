import { FormControl } from '@angular/forms';

export function restrictedWordsValidator(...words) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) {
      return null;
    }

    const badWords = words
      .map(w => control.value.includes(w) ? w : null)
      .filter(w => w != null);

    return badWords && badWords.length > 0
      ? { 'restrictedWords': badWords.join(', ') }
      : null;
  };
}
