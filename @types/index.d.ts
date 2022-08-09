declare module 'lib-phone-number' {
  export class PhoneNumber {
    public readonly countryCode: string;
    public readonly ddd: string;
    public readonly number: string;
    public readonly ramal: string;
    public readonly formatedNumber: string;
    public readonly complete: string;

    constructor (number: string): void;
    test (): void;
  }

  export const phoneNumber = (number: string) => PhoneNumber;
}