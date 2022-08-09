# Phone Number

Biblioteca para buscar partes de numero telefonenico.

## Using: 

```javascript
import { phoneNumber } from 'lib-phone-number';
const phonenumber = phoneNumber("+55 22 988327317");

/* 
  phonenumber.countryCode 55
  phonenumber.ddd 22
  phonenumber.number 988327317
  phonenumber.ramal '' (não implementado)
  phonenumber.formatedNumber '+55 22 988327317'
  phonenumber.complete '5522988327317'
*/
```

## Testes

```bash

  A Lib ainda não consegue reconhecer todos os formatos válidos dos testes

    ✓ phoneNumber(+55 22 988327317).test() => true (2 ms)
    ✓ phoneNumber(+55(22)9.88327317).test() => true (1 ms)
    ✕ phoneNumber(5522988327317).test() => true (2 ms)
    ✕ phoneNumber(55.22988327317).test() => true
    ✓ phoneNumber(+55(22)9.8832-7317).test() => true (1 ms)

  test if is correct ddd, contry code and number
    ✓ phoneNumber(+55 22 988327317).test() => { countryCode: '55', ddd: '22', number: '988327317' } (1 ms)
    ✓ phoneNumber(+55(22)9.88327317).test() => { countryCode: '55', ddd: '22', number: '988327317' }
    ✕ phoneNumber(5522988327317).test() => { countryCode: '55', ddd: '22', number: '988327317' } (4 ms)
    ✕ phoneNumber(55.22988327317).test() => { countryCode: '55', ddd: '22', number: '988327317' } (4 ms)
    ✓ phoneNumber(+55(22)9.8832-7317).test() => { countryCode: '55', ddd: '22', number: '988327317' } (1 ms)
    ✓ phoneNumber((22)98832-7317).test() => { countryCode: '', ddd: '22', number: '988327317' } (1 ms)
```