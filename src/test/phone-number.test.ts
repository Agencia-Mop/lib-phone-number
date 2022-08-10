import { readFile } from "fs/promises";
import { join } from "path";
import { phoneNumber } from "./../phone-number";

const global_content_lines: [string, string][] = [];

describe ("test if is valid number", () => {
  test.each([
    ["+55 22 988327317", true],
    ["+55(22)9.88327317", true],
    ["5522988327317", true],
    ["55.22988327317", true],
    ["+55(22)9.8832-7317", true],
  ])("phoneNumber(%s).test() => %s", (number, bool) => {
    expect(phoneNumber(number).test()).toBe(bool);
  });
});

describe ("test if is correct ddd, contry code and number", () => {

  const objectResult = {
    countryCode: '55',
    ddd: '22',
    number: '988327317'
  };

  test.each([
    ["+55 22 988327317", objectResult],
    ["+55(22)9.88327317", objectResult],
    ["5522988327317", objectResult],
    ["55.22988327317", objectResult],
    ["+55(22)9.8832-7317", objectResult],
    ["(22)98832-7317", {...objectResult, countryCode: ''}]
  ])("phoneNumber(%s).test() => %s", (number, objectResult) => {
    const result = phoneNumber(number);
    expect({
      number: result.number,
      countryCode: result.countryCode,
      ddd: result.ddd
    }).toMatchObject(objectResult);
  });
});
