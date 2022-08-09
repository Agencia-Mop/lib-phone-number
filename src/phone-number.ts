/// <reference path="./../@types/index.d.ts" />

export class PhoneNumber {

  public readonly countryCode: string = '';
  public readonly ddd: string = '';
  public readonly number: string = '';
  public readonly ramal: string = '';
  public readonly formatedNumber: string;
  public readonly complete: string;

  constructor(number: string) {
    this.formatedNumber = number;
    const parts = number.match(/(\d+)/gm);

    if (!parts) {
      throw new Error("PhoneNumber is not valid");
    }

    this.complete = parts.join('');
    if (this.complete.length === 11) {
      // ddd + numero
      this.ddd = parts[0];
      this.number = parts.filter((_, key) => key !== 0).join('');
    } else if (this.complete.length > 11) {
      this.countryCode = parts[0];
      this.ddd = parts[1];
      this.number = parts.filter((_, key) => key > 1).join('');
    }
  }

  test () {
    if (this.ddd && this.number) {
      return true;
    }
    return false;
  }
}

export const phoneNumber = (number: string) => {
  return new PhoneNumber(number);
}