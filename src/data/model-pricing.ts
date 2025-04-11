import { ModelConfig } from '../types/pricing';

export const MODEL_PRICING: Record<string, Record<string, ModelConfig>> = {
  Bugatti: {
    Veyron: {
      baseModel: 'Veyron',
      aliases: ['Veyron', 'Veyron 16.4'],
      defaultMultiplier: 116.67,
      generations: [
        {
          generation: 'Original',
          startYear: 2005,
          endYear: 2011,
          basePrice: 1400000,
          multiplier: 116.67,
        },
        {
          generation: 'Super Sport',
          startYear: 2010,
          endYear: 2015,
          basePrice: 2400000,
          multiplier: 200.0,
        },
      ],
    },
    'Type 35': {
      baseModel: 'Type 35',
      aliases: ['Type 35'],
      defaultMultiplier: 1.0,
      generations: [
        {
          generation: 'Original',
          startYear: 1924,
          endYear: 1930,
          basePrice: 7000,
          multiplier: 1.0,
        },
      ],
    },
    'Type 41 Royale': {
      baseModel: 'Type 41 Royale',
      aliases: ['Type 41 Royale', 'Royale'],
      defaultMultiplier: 6.0,
      generations: [
        {
          generation: 'Original',
          startYear: 1926,
          endYear: 1933,
          basePrice: 42000,
          multiplier: 6.0,
        },
      ],
    },
    'Type 57': {
      baseModel: 'Type 57',
      aliases: ['Type 57', 'Type 57SC'],
      defaultMultiplier: 1.71,
      generations: [
        {
          generation: 'Type 57',
          startYear: 1934,
          endYear: 1940,
          basePrice: 12000,
          multiplier: 1.71,
        },
        {
          generation: 'Type 57SC Atlantic',
          startYear: 1936,
          endYear: 1938,
          basePrice: 15000,
          multiplier: 2.14,
        },
      ],
    },
    EB110: {
      baseModel: 'EB110',
      aliases: ['EB110', 'EB110 GT', 'EB110 Super Sport'],
      defaultMultiplier: 54.29,
      generations: [
        {
          generation: 'GT',
          startYear: 1991,
          endYear: 1995,
          basePrice: 380000,
          multiplier: 54.29,
        },
        {
          generation: 'Super Sport',
          startYear: 1992,
          endYear: 1995,
          basePrice: 460000,
          multiplier: 65.71,
        },
      ],
    },
    Chiron: {
      baseModel: 'Chiron',
      aliases: ['Chiron', 'Chiron Super Sport', 'Chiron Pur Sport'],
      defaultMultiplier: 428.29,
      generations: [
        {
          generation: 'Base',
          startYear: 2016,
          endYear: 2022,
          basePrice: 2998000,
          multiplier: 428.29,
        },
        {
          generation: 'Super Sport 300+',
          startYear: 2020,
          endYear: 2022,
          basePrice: 3900000,
          multiplier: 557.14,
        },
        {
          generation: 'Pur Sport',
          startYear: 2021,
          endYear: 2023,
          basePrice: 3600000,
          multiplier: 514.29,
        },
      ],
    },
    Centodieci: {
      baseModel: 'Centodieci',
      aliases: ['Centodieci'],
      defaultMultiplier: 1285.71,
      generations: [
        {
          generation: 'Original',
          startYear: 2022,
          endYear: 2024,
          basePrice: 9000000,
          multiplier: 1285.71,
        },
      ],
    },
  },
  Ferrari: {
    '250 GT': {
      baseModel: '250 GT',
      aliases: ['250 GT'],
      defaultMultiplier: 1.0,
      generations: [
        {
          generation: 'Original',
          startYear: 1955,
          endYear: 1959,
          basePrice: 12000,
          multiplier: 1.0,
        },
      ],
    },
    '250 GT California Spider': {
      baseModel: '250 GT California Spider',
      aliases: ['250 GT California Spider', 'California Spider'],
      defaultMultiplier: 1.25,
      generations: [
        {
          generation: 'Original',
          startYear: 1957,
          endYear: 1962,
          basePrice: 14950,
          multiplier: 1.25,
        },
      ],
    },
    '250 GTO': {
      baseModel: '250 GTO',
      aliases: ['250 GTO'],
      defaultMultiplier: 1.54,
      generations: [
        {
          generation: 'Original',
          startYear: 1962,
          endYear: 1964,
          basePrice: 18500,
          multiplier: 1.54,
        },
      ],
    },
    '365 GTB/4': {
      baseModel: '365 GTB/4',
      aliases: ['365 GTB/4', 'Daytona'],
      defaultMultiplier: 1.63,
      generations: [
        {
          generation: 'Original',
          startYear: 1968,
          endYear: 1973,
          basePrice: 19500,
          multiplier: 1.63,
        },
      ],
    },
    Testarossa: {
      baseModel: 'Testarossa',
      aliases: ['Testarossa'],
      defaultMultiplier: 7.83,
      generations: [
        {
          generation: 'Original',
          startYear: 1984,
          endYear: 1991,
          basePrice: 94000,
          multiplier: 7.83,
        },
      ],
    },
    F40: {
      baseModel: 'F40',
      aliases: ['F40'],
      defaultMultiplier: 33.26,
      generations: [
        {
          generation: 'Original',
          startYear: 1987,
          endYear: 1992,
          basePrice: 399150,
          multiplier: 33.26,
        },
      ],
    },
    F355: {
      baseModel: 'F355',
      aliases: ['F355'],
      defaultMultiplier: 10.83,
      generations: [
        {
          generation: 'Original',
          startYear: 1994,
          endYear: 1999,
          basePrice: 130000,
          multiplier: 10.83,
        },
      ],
    },
    LaFerrari: {
      baseModel: 'LaFerrari',
      aliases: ['LaFerrari'],
      defaultMultiplier: 118.33,
      generations: [
        {
          generation: 'Original',
          startYear: 2013,
          endYear: 2018,
          basePrice: 1420000,
          multiplier: 118.33,
        },
      ],
    },
  },
  Lamborghini: {
    '350 GT': {
      baseModel: '350 GT',
      aliases: ['350 GT'],
      defaultMultiplier: 1.16,
      generations: [
        {
          generation: 'Original',
          startYear: 1964,
          endYear: 1966,
          basePrice: 13900,
          multiplier: 1.16,
        },
      ],
    },
    Miura: {
      baseModel: 'Miura',
      aliases: ['Miura', 'Miura P400'],
      defaultMultiplier: 1.67,
      generations: [
        {
          generation: 'P400',
          startYear: 1966,
          endYear: 1969,
          basePrice: 20000,
          multiplier: 1.67,
        },
      ],
    },
    Countach: {
      baseModel: 'Countach',
      aliases: [
        'Countach',
        'Countach LP400',
        'Countach LP500S',
        'Countach LP5000 QV',
      ],
      defaultMultiplier: 4.33,
      generations: [
        {
          generation: 'LP400',
          startYear: 1974,
          endYear: 1977,
          basePrice: 52000,
          multiplier: 4.33,
        },
        {
          generation: 'LP500S',
          startYear: 1982,
          endYear: 1985,
          basePrice: 99500,
          multiplier: 8.29,
        },
        {
          generation: 'LP5000 QV',
          startYear: 1985,
          endYear: 1988,
          basePrice: 99500,
          multiplier: 8.29,
        },
        {
          generation: 'LPI 800-4',
          startYear: 2022,
          endYear: 2024,
          basePrice: 2640000,
          multiplier: 220.0,
        },
      ],
    },
    Diablo: {
      baseModel: 'Diablo',
      aliases: ['Diablo', 'Diablo VT', 'Diablo GT'],
      defaultMultiplier: 17.58,
      generations: [
        {
          generation: 'Original',
          startYear: 1990,
          endYear: 1994,
          basePrice: 211000,
          multiplier: 17.58,
        },
        {
          generation: 'VT',
          startYear: 1995,
          endYear: 1998,
          basePrice: 239000,
          multiplier: 19.92,
        },
        {
          generation: 'GT',
          startYear: 1999,
          endYear: 2001,
          basePrice: 309000,
          multiplier: 25.75,
        },
      ],
    },
  },
  McLaren: {
    F1: {
      baseModel: 'F1',
      aliases: ['F1'],
      defaultMultiplier: 80.0,
      generations: [
        {
          generation: 'Original',
          startYear: 1992,
          endYear: 1998,
          basePrice: 960000,
          multiplier: 80.0,
        },
      ],
    },
    P1: {
      baseModel: 'P1',
      aliases: ['P1'],
      defaultMultiplier: 95.83,
      generations: [
        {
          generation: 'Original',
          startYear: 2013,
          endYear: 2015,
          basePrice: 1150000,
          multiplier: 95.83,
        },
      ],
    },
  },
  Porsche: {
    '911': {
      baseModel: '911',
      aliases: ['911', '911 Carrera', 'Carrera'],
      defaultMultiplier: 0.54,
      generations: [
        {
          generation: 'Original',
          startYear: 1963,
          endYear: 1973,
          basePrice: 6500,
          multiplier: 0.54,
        },
        {
          generation: '993',
          startYear: 1994,
          endYear: 1998,
          basePrice: 63500,
          multiplier: 5.29,
        },
        {
          generation: '996',
          startYear: 1999,
          endYear: 2004,
          basePrice: 65795,
          multiplier: 5.48,
        },
      ],
    },
    '959': {
      baseModel: '959',
      aliases: ['959'],
      defaultMultiplier: 18.75,
      generations: [
        {
          generation: 'Original',
          startYear: 1986,
          endYear: 1993,
          basePrice: 225000,
          multiplier: 18.75,
        },
      ],
    },
    'Carrera GT': {
      baseModel: 'Carrera GT',
      aliases: ['Carrera GT'],
      defaultMultiplier: 37.33,
      generations: [
        {
          generation: 'Original',
          startYear: 2004,
          endYear: 2007,
          basePrice: 448000,
          multiplier: 37.33,
        },
      ],
    },
  },
  'Mercedes-Benz': {
    'SLS AMG': {
      baseModel: 'SLS AMG',
      aliases: ['SLS AMG', 'SLS', 'SLS Gullwing'],
      defaultMultiplier: 23.33,
      generations: [
        {
          generation: 'Original',
          startYear: 2010,
          endYear: 2015,
          basePrice: 280000,
          multiplier: 23.33,
        },
      ],
    },
    'G-Class': {
      baseModel: 'G-Class',
      aliases: ['G-Class', 'G-Wagen', 'G Wagon', 'Geländewagen'],
      defaultMultiplier: 10.83,
      generations: [
        {
          generation: 'W463',
          startYear: 1990,
          endYear: 2018,
          basePrice: 130000,
          multiplier: 10.83,
        },
        {
          generation: 'W463 Second Gen',
          startYear: 2019,
          endYear: 2024,
          basePrice: 133650,
          multiplier: 11.14,
        },
      ],
    },
    'AMG GT': {
      baseModel: 'AMG GT',
      aliases: ['AMG GT', 'GT'],
      defaultMultiplier: 12.42,
      generations: [
        {
          generation: 'Original',
          startYear: 2015,
          endYear: 2024,
          basePrice: 149000,
          multiplier: 12.42,
        },
      ],
    },
  },
  BMW: {
    M3: {
      baseModel: 'M3',
      aliases: ['M3', 'M3 Competition'],
      defaultMultiplier: 5.83,
      generations: [
        {
          generation: 'E30',
          startYear: 1986,
          endYear: 1991,
          basePrice: 70000,
          multiplier: 5.83,
        },
        {
          generation: 'E36',
          startYear: 1992,
          endYear: 1999,
          basePrice: 45950,
          multiplier: 3.83,
        },
        {
          generation: 'E46',
          startYear: 2000,
          endYear: 2006,
          basePrice: 56950,
          multiplier: 4.75,
        },
        {
          generation: 'E90/E92',
          startYear: 2007,
          endYear: 2013,
          basePrice: 64950,
          multiplier: 5.41,
        },
        {
          generation: 'F80',
          startYear: 2014,
          endYear: 2018,
          basePrice: 62950,
          multiplier: 5.25,
        },
        {
          generation: 'G80',
          startYear: 2021,
          endYear: 2024,
          basePrice: 69900,
          multiplier: 5.83,
        },
      ],
    },
    M5: {
      baseModel: 'M5',
      aliases: ['M5', 'M5 Competition'],
      defaultMultiplier: 7.92,
      generations: [
        {
          generation: 'E28',
          startYear: 1984,
          endYear: 1988,
          basePrice: 95000,
          multiplier: 7.92,
        },
        {
          generation: 'F90',
          startYear: 2018,
          endYear: 2024,
          basePrice: 103700,
          multiplier: 8.64,
        },
      ],
    },
    i8: {
      baseModel: 'i8',
      aliases: ['i8', 'i8 Roadster'],
      defaultMultiplier: 12.08,
      generations: [
        {
          generation: 'Original',
          startYear: 2014,
          endYear: 2020,
          basePrice: 145000,
          multiplier: 12.08,
        },
      ],
    },
  },
  'Rolls-Royce': {
    Phantom: {
      baseModel: 'Phantom',
      aliases: ['Phantom', 'Phantom Extended'],
      defaultMultiplier: 29.17,
      generations: [
        {
          generation: 'VII',
          startYear: 2003,
          endYear: 2016,
          basePrice: 350000,
          multiplier: 29.17,
        },
        {
          generation: 'VIII',
          startYear: 2017,
          endYear: 2024,
          basePrice: 460000,
          multiplier: 38.33,
        },
      ],
    },
    Ghost: {
      baseModel: 'Ghost',
      aliases: ['Ghost', 'Ghost Extended'],
      defaultMultiplier: 27.92,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2010,
          endYear: 2020,
          basePrice: 335000,
          multiplier: 27.92,
        },
        {
          generation: 'Second Gen',
          startYear: 2021,
          endYear: 2024,
          basePrice: 375000,
          multiplier: 31.25,
        },
      ],
    },
    Cullinan: {
      baseModel: 'Cullinan',
      aliases: ['Cullinan', 'Cullinan Black Badge'],
      defaultMultiplier: 27.5,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2018,
          endYear: 2024,
          basePrice: 330000,
          multiplier: 27.5,
        },
      ],
    },
  },
  Bentley: {
    'Continental GT': {
      baseModel: 'Continental GT',
      aliases: ['Continental GT', 'Continental', 'Continental GT Speed'],
      defaultMultiplier: 16.67,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2003,
          endYear: 2011,
          basePrice: 200000,
          multiplier: 16.67,
        },
        {
          generation: 'Second Gen',
          startYear: 2011,
          endYear: 2018,
          basePrice: 220000,
          multiplier: 18.33,
        },
        {
          generation: 'Third Gen',
          startYear: 2018,
          endYear: 2024,
          basePrice: 235000,
          multiplier: 19.58,
        },
      ],
    },
    'Flying Spur': {
      baseModel: 'Flying Spur',
      aliases: ['Flying Spur', 'Continental Flying Spur'],
      defaultMultiplier: 17.08,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2005,
          endYear: 2013,
          basePrice: 205000,
          multiplier: 17.08,
        },
        {
          generation: 'Third Gen',
          startYear: 2019,
          endYear: 2024,
          basePrice: 245000,
          multiplier: 20.42,
        },
      ],
    },
    Bentayga: {
      baseModel: 'Bentayga',
      aliases: ['Bentayga', 'Bentayga Speed'],
      defaultMultiplier: 18.33,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2015,
          endYear: 2024,
          basePrice: 220000,
          multiplier: 18.33,
        },
      ],
    },
  },
  'Aston Martin': {
    DB9: {
      baseModel: 'DB9',
      aliases: ['DB9', 'DB9 GT'],
      defaultMultiplier: 15.83,
      generations: [
        {
          generation: 'Original',
          startYear: 2004,
          endYear: 2016,
          basePrice: 190000,
          multiplier: 15.83,
        },
      ],
    },
    DBS: {
      baseModel: 'DBS',
      aliases: ['DBS', 'DBS Superleggera'],
      defaultMultiplier: 25.83,
      generations: [
        {
          generation: 'V12',
          startYear: 2008,
          endYear: 2012,
          basePrice: 310000,
          multiplier: 25.83,
        },
        {
          generation: 'Superleggera',
          startYear: 2018,
          endYear: 2024,
          basePrice: 335000,
          multiplier: 27.92,
        },
      ],
    },
    Vantage: {
      baseModel: 'Vantage',
      aliases: ['Vantage', 'V8 Vantage', 'V12 Vantage'],
      defaultMultiplier: 12.5,
      generations: [
        {
          generation: 'V8',
          startYear: 2005,
          endYear: 2017,
          basePrice: 150000,
          multiplier: 12.5,
        },
        {
          generation: 'New Vantage',
          startYear: 2018,
          endYear: 2024,
          basePrice: 165000,
          multiplier: 13.75,
        },
      ],
    },
  },
  Maybach: {
    '57': {
      baseModel: '57',
      aliases: ['57', '57S'],
      defaultMultiplier: 31.25,
      generations: [
        {
          generation: 'Original',
          startYear: 2002,
          endYear: 2012,
          basePrice: 375000,
          multiplier: 31.25,
        },
      ],
    },
    '62': {
      baseModel: '62',
      aliases: ['62', '62S'],
      defaultMultiplier: 36.67,
      generations: [
        {
          generation: 'Original',
          startYear: 2002,
          endYear: 2012,
          basePrice: 440000,
          multiplier: 36.67,
        },
      ],
    },
  },
  Lexus: {
    LFA: {
      baseModel: 'LFA',
      aliases: ['LFA'],
      defaultMultiplier: 31.25,
      generations: [
        {
          generation: 'Original',
          startYear: 2010,
          endYear: 2012,
          basePrice: 375000,
          multiplier: 31.25,
        },
      ],
    },
    LC: {
      baseModel: 'LC',
      aliases: ['LC 500', 'LC 500h'],
      defaultMultiplier: 7.92,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2017,
          endYear: 2024,
          basePrice: 95000,
          multiplier: 7.92,
        },
      ],
    },
  },
  Jaguar: {
    XJ220: {
      baseModel: 'XJ220',
      aliases: ['XJ220'],
      defaultMultiplier: 41.67,
      generations: [
        {
          generation: 'Original',
          startYear: 1992,
          endYear: 1994,
          basePrice: 500000,
          multiplier: 41.67,
        },
      ],
    },
    'F-Type': {
      baseModel: 'F-Type',
      aliases: ['F-Type', 'F-Type R'],
      defaultMultiplier: 7.5,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2013,
          endYear: 2024,
          basePrice: 90000,
          multiplier: 7.5,
        },
      ],
    },
  },
  Cadillac: {
    Escalade: {
      baseModel: 'Escalade',
      aliases: ['Escalade', 'Escalade ESV'],
      defaultMultiplier: 7.08,
      generations: [
        {
          generation: 'Fourth Gen',
          startYear: 2015,
          endYear: 2020,
          basePrice: 85000,
          multiplier: 7.08,
        },
        {
          generation: 'Fifth Gen',
          startYear: 2021,
          endYear: 2024,
          basePrice: 95000,
          multiplier: 7.92,
        },
      ],
    },
    'CTS-V': {
      baseModel: 'CTS-V',
      aliases: ['CTS-V', 'CTS V'],
      defaultMultiplier: 6.67,
      generations: [
        {
          generation: 'Second Gen',
          startYear: 2009,
          endYear: 2015,
          basePrice: 80000,
          multiplier: 6.67,
        },
        {
          generation: 'Third Gen',
          startYear: 2016,
          endYear: 2019,
          basePrice: 87000,
          multiplier: 7.25,
        },
      ],
    },
  },
  Infiniti: {
    Q60: {
      baseModel: 'Q60',
      aliases: ['Q60', 'Q60 Red Sport'],
      defaultMultiplier: 4.58,
      generations: [
        {
          generation: 'Second Gen',
          startYear: 2017,
          endYear: 2024,
          basePrice: 55000,
          multiplier: 4.58,
        },
      ],
    },
    G35: {
      baseModel: 'G35',
      aliases: ['G35', 'G35 Coupe'],
      defaultMultiplier: 2.92,
      generations: [
        {
          generation: 'V35',
          startYear: 2003,
          endYear: 2007,
          basePrice: 35000,
          multiplier: 2.92,
        },
      ],
    },
  },
  Acura: {
    NSX: {
      baseModel: 'NSX',
      aliases: ['NSX', 'NSX Type S'],
      defaultMultiplier: 12.92,
      generations: [
        {
          generation: 'First Gen',
          startYear: 1990,
          endYear: 2005,
          basePrice: 155000,
          multiplier: 12.92,
        },
        {
          generation: 'Second Gen',
          startYear: 2016,
          endYear: 2022,
          basePrice: 169500,
          multiplier: 14.13,
        },
      ],
    },
    TLX: {
      baseModel: 'TLX',
      aliases: ['TLX', 'TLX Type S'],
      defaultMultiplier: 3.75,
      generations: [
        {
          generation: 'Second Gen',
          startYear: 2021,
          endYear: 2024,
          basePrice: 45000,
          multiplier: 3.75,
        },
      ],
    },
  },
  'Alfa Romeo': {
    '8C Competizione': {
      baseModel: '8C Competizione',
      aliases: ['8C', '8C Competizione'],
      defaultMultiplier: 20.83,
      generations: [
        {
          generation: 'Original',
          startYear: 2007,
          endYear: 2010,
          basePrice: 250000,
          multiplier: 20.83,
        },
      ],
    },
    Giulia: {
      baseModel: 'Giulia',
      aliases: ['Giulia', 'Giulia Quadrifoglio'],
      defaultMultiplier: 6.25,
      generations: [
        {
          generation: 'Type 952',
          startYear: 2015,
          endYear: 2024,
          basePrice: 75000,
          multiplier: 6.25,
        },
      ],
    },
  },
  Lincoln: {
    Navigator: {
      baseModel: 'Navigator',
      aliases: ['Navigator', 'Navigator L'],
      defaultMultiplier: 6.67,
      generations: [
        {
          generation: 'Fourth Gen',
          startYear: 2018,
          endYear: 2024,
          basePrice: 80000,
          multiplier: 6.67,
        },
      ],
    },
  },
  Volvo: {
    XC90: {
      baseModel: 'XC90',
      aliases: ['XC90', 'XC90 T8'],
      defaultMultiplier: 5.0,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2002,
          endYear: 2014,
          basePrice: 45000,
          multiplier: 3.75,
        },
        {
          generation: 'Second Gen',
          startYear: 2015,
          endYear: 2024,
          basePrice: 60000,
          multiplier: 5.0,
        },
      ],
    },
    S60: {
      baseModel: 'S60',
      aliases: ['S60', 'S60 Polestar'],
      defaultMultiplier: 3.75,
      generations: [
        {
          generation: 'Third Gen',
          startYear: 2019,
          endYear: 2024,
          basePrice: 45000,
          multiplier: 3.75,
        },
      ],
    },
  },
  Chrysler: {
    '300': {
      baseModel: '300',
      aliases: ['300', '300C', '300 SRT'],
      defaultMultiplier: 4.17,
      generations: [
        {
          generation: 'Second Gen',
          startYear: 2011,
          endYear: 2024,
          basePrice: 50000,
          multiplier: 4.17,
        },
      ],
    },
  },
  Volkswagen: {
    Phaeton: {
      baseModel: 'Phaeton',
      aliases: ['Phaeton', 'Phaeton W12'],
      defaultMultiplier: 6.25,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2002,
          endYear: 2016,
          basePrice: 75000,
          multiplier: 6.25,
        },
      ],
    },
    Touareg: {
      baseModel: 'Touareg',
      aliases: ['Touareg', 'Touareg V10 TDI'],
      defaultMultiplier: 4.58,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2002,
          endYear: 2010,
          basePrice: 55000,
          multiplier: 4.58,
        },
        {
          generation: 'Third Gen',
          startYear: 2018,
          endYear: 2024,
          basePrice: 65000,
          multiplier: 5.42,
        },
      ],
    },
  },
  Genesis: {
    G90: {
      baseModel: 'G90',
      aliases: ['G90'],
      defaultMultiplier: 6.25,
      generations: [
        {
          generation: 'Second Gen',
          startYear: 2020,
          endYear: 2024,
          basePrice: 75000,
          multiplier: 6.25,
        },
      ],
    },
  },
  Toyota: {
    Supra: {
      baseModel: 'Supra',
      aliases: ['Supra', 'GR Supra'],
      defaultMultiplier: 4.17,
      generations: [
        {
          generation: 'A80',
          startYear: 1993,
          endYear: 2002,
          basePrice: 50000,
          multiplier: 4.17,
        },
        {
          generation: 'A90',
          startYear: 2019,
          endYear: 2024,
          basePrice: 55000,
          multiplier: 4.58,
        },
      ],
    },
    'Land Cruiser': {
      baseModel: 'Land Cruiser',
      aliases: ['Land Cruiser', 'FJ'],
      defaultMultiplier: 7.08,
      generations: [
        {
          generation: '200 Series',
          startYear: 2008,
          endYear: 2021,
          basePrice: 85000,
          multiplier: 7.08,
        },
        {
          generation: '300 Series',
          startYear: 2022,
          endYear: 2024,
          basePrice: 95000,
          multiplier: 7.92,
        },
      ],
    },
  },
  Honda: {
    'Civic Type R': {
      baseModel: 'Civic Type R',
      aliases: ['Civic Type R', 'Type R'],
      defaultMultiplier: 3.33,
      generations: [
        {
          generation: 'FK8',
          startYear: 2017,
          endYear: 2021,
          basePrice: 40000,
          multiplier: 3.33,
        },
        {
          generation: 'FL5',
          startYear: 2022,
          endYear: 2024,
          basePrice: 45000,
          multiplier: 3.75,
        },
      ],
    },
    S2000: {
      baseModel: 'S2000',
      aliases: ['S2000', 'S2K'],
      defaultMultiplier: 2.92,
      generations: [
        {
          generation: 'AP1/AP2',
          startYear: 1999,
          endYear: 2009,
          basePrice: 35000,
          multiplier: 2.92,
        },
      ],
    },
  },
  Ford: {
    Mustang: {
      baseModel: 'Mustang',
      aliases: [
        'Mustang',
        'Mustang GT',
        'Shelby GT350',
        'Shelby GT500',
        'Mach 1',
      ],
      defaultMultiplier: 4.58,
      generations: [
        {
          generation: 'First Gen',
          startYear: 1964,
          endYear: 1973,
          basePrice: 2368,
          multiplier: 0.2,
        },
        {
          generation: 'Second Gen',
          startYear: 1974,
          endYear: 1978,
          basePrice: 3934,
          multiplier: 0.33,
        },
        {
          generation: 'Third Gen (Fox)',
          startYear: 1979,
          endYear: 1993,
          basePrice: 5940,
          multiplier: 0.5,
        },
        {
          generation: 'Fourth Gen',
          startYear: 1994,
          endYear: 2004,
          basePrice: 14995,
          multiplier: 1.25,
        },
        {
          generation: 'Fifth Gen',
          startYear: 2005,
          endYear: 2014,
          basePrice: 19995,
          multiplier: 1.67,
        },
        {
          generation: 'S550',
          startYear: 2015,
          endYear: 2023,
          basePrice: 26395,
          multiplier: 2.2,
        },
        {
          generation: 'GT350',
          startYear: 2015,
          endYear: 2020,
          basePrice: 58995,
          multiplier: 4.92,
        },
        {
          generation: 'GT500',
          startYear: 2020,
          endYear: 2022,
          basePrice: 72900,
          multiplier: 6.08,
        },
        {
          generation: 'S650',
          startYear: 2024,
          endYear: 2024,
          basePrice: 32515,
          multiplier: 2.71,
        },
      ],
    },
    'F-100': {
      baseModel: 'F-100',
      aliases: ['F-100', 'F100', 'Ford F100'],
      defaultMultiplier: 0.33,
      generations: [
        {
          generation: 'First Gen',
          startYear: 1953,
          endYear: 1956,
          basePrice: 1352,
          multiplier: 0.11,
        },
        {
          generation: 'Second Gen',
          startYear: 1957,
          endYear: 1960,
          basePrice: 1800,
          multiplier: 0.15,
        },
        {
          generation: 'Third Gen',
          startYear: 1961,
          endYear: 1966,
          basePrice: 2178,
          multiplier: 0.18,
        },
        {
          generation: 'Fourth Gen',
          startYear: 1967,
          endYear: 1972,
          basePrice: 2500,
          multiplier: 0.21,
        },
        {
          generation: 'Fifth Gen',
          startYear: 1973,
          endYear: 1979,
          basePrice: 3500,
          multiplier: 0.29,
        },
      ],
    },
    'F-250': {
      baseModel: 'F-250',
      aliases: ['F-250', 'F250', 'Super Duty'],
      defaultMultiplier: 4.17,
      generations: [
        {
          generation: 'First Super Duty',
          startYear: 1999,
          endYear: 2007,
          basePrice: 21445,
          multiplier: 1.79,
        },
        {
          generation: 'Second Super Duty',
          startYear: 2008,
          endYear: 2010,
          basePrice: 25340,
          multiplier: 2.11,
        },
        {
          generation: 'Third Super Duty',
          startYear: 2011,
          endYear: 2016,
          basePrice: 29995,
          multiplier: 2.5,
        },
        {
          generation: 'Fourth Super Duty',
          startYear: 2017,
          endYear: 2022,
          basePrice: 34995,
          multiplier: 2.92,
        },
        {
          generation: 'Fifth Super Duty',
          startYear: 2023,
          endYear: 2024,
          basePrice: 43970,
          multiplier: 3.66,
        },
      ],
    },
    'F-350': {
      baseModel: 'F-350',
      aliases: ['F-350', 'F350', 'Super Duty'],
      defaultMultiplier: 4.58,
      generations: [
        {
          generation: 'First Super Duty',
          startYear: 1999,
          endYear: 2007,
          basePrice: 22445,
          multiplier: 1.87,
        },
        {
          generation: 'Second Super Duty',
          startYear: 2008,
          endYear: 2010,
          basePrice: 26850,
          multiplier: 2.24,
        },
        {
          generation: 'Third Super Duty',
          startYear: 2011,
          endYear: 2016,
          basePrice: 32095,
          multiplier: 2.67,
        },
        {
          generation: 'Fourth Super Duty',
          startYear: 2017,
          endYear: 2022,
          basePrice: 36995,
          multiplier: 3.08,
        },
        {
          generation: 'Fifth Super Duty',
          startYear: 2023,
          endYear: 2024,
          basePrice: 45065,
          multiplier: 3.76,
        },
      ],
    },
    GT: {
      baseModel: 'GT',
      aliases: ['GT', 'Ford GT'],
      defaultMultiplier: 41.67,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2005,
          endYear: 2006,
          basePrice: 500000,
          multiplier: 41.67,
        },
        {
          generation: 'Second Gen',
          startYear: 2017,
          endYear: 2022,
          basePrice: 550000,
          multiplier: 45.83,
        },
      ],
    },
    'F-150 Raptor': {
      baseModel: 'F-150 Raptor',
      aliases: ['Raptor', 'F-150 Raptor', 'F150 Raptor'],
      defaultMultiplier: 6.25,
      generations: [
        {
          generation: 'First Gen',
          startYear: 2010,
          endYear: 2014,
          basePrice: 75000,
          multiplier: 6.25,
        },
        {
          generation: 'Third Gen',
          startYear: 2021,
          endYear: 2024,
          basePrice: 85000,
          multiplier: 7.08,
        },
      ],
    },
  },
  Chevrolet: {
    Camaro: {
      baseModel: 'Camaro',
      aliases: ['Camaro', 'Camaro SS', 'Camaro Z/28', 'Camaro ZL1'],
      defaultMultiplier: 4.17,
      generations: [
        {
          generation: 'First Gen',
          startYear: 1967,
          endYear: 1969,
          basePrice: 2466,
          multiplier: 0.21,
        },
        {
          generation: 'Second Gen',
          startYear: 1970,
          endYear: 1981,
          basePrice: 2839,
          multiplier: 0.24,
        },
        {
          generation: 'Third Gen',
          startYear: 1982,
          endYear: 1992,
          basePrice: 8995,
          multiplier: 0.75,
        },
        {
          generation: 'Fourth Gen',
          startYear: 1993,
          endYear: 2002,
          basePrice: 13995,
          multiplier: 1.17,
        },
        {
          generation: 'Fifth Gen',
          startYear: 2010,
          endYear: 2015,
          basePrice: 22995,
          multiplier: 1.92,
        },
        {
          generation: 'Sixth Gen',
          startYear: 2016,
          endYear: 2023,
          basePrice: 25995,
          multiplier: 2.17,
        },
        {
          generation: 'ZL1',
          startYear: 2017,
          endYear: 2023,
          basePrice: 63995,
          multiplier: 5.33,
        },
      ],
    },
    Corvette: {
      baseModel: 'Corvette',
      aliases: ['Corvette', 'Vette', 'Stingray', 'Z06', 'ZR1', 'Grand Sport'],
      defaultMultiplier: 5.0,
      generations: [
        {
          generation: 'C1',
          startYear: 1953,
          endYear: 1962,
          basePrice: 3498,
          multiplier: 0.29,
        },
        {
          generation: 'C2',
          startYear: 1963,
          endYear: 1967,
          basePrice: 4252,
          multiplier: 0.35,
        },
        {
          generation: 'C3',
          startYear: 1968,
          endYear: 1982,
          basePrice: 4663,
          multiplier: 0.39,
        },
        {
          generation: 'C4',
          startYear: 1984,
          endYear: 1996,
          basePrice: 21800,
          multiplier: 1.82,
        },
        {
          generation: 'C5',
          startYear: 1997,
          endYear: 2004,
          basePrice: 37495,
          multiplier: 3.12,
        },
        {
          generation: 'C6',
          startYear: 2005,
          endYear: 2013,
          basePrice: 44245,
          multiplier: 3.69,
        },
        {
          generation: 'C7',
          startYear: 2014,
          endYear: 2019,
          basePrice: 51995,
          multiplier: 4.33,
        },
        {
          generation: 'C7 Z06',
          startYear: 2015,
          endYear: 2019,
          basePrice: 78995,
          multiplier: 6.58,
        },
        {
          generation: 'C7 ZR1',
          startYear: 2019,
          endYear: 2019,
          basePrice: 118900,
          multiplier: 9.91,
        },
        {
          generation: 'C8',
          startYear: 2020,
          endYear: 2023,
          basePrice: 59995,
          multiplier: 5.0,
        },
        {
          generation: 'C8 Z06',
          startYear: 2023,
          endYear: 2024,
          basePrice: 106395,
          multiplier: 8.87,
        },
      ],
    },
  },
  Mazda: {
    'RX-7': {
      baseModel: 'RX-7',
      aliases: ['RX-7', 'RX7', 'FD'],
      defaultMultiplier: 2.92,
      generations: [
        {
          generation: 'FD',
          startYear: 1992,
          endYear: 2002,
          basePrice: 35000,
          multiplier: 2.92,
        },
      ],
    },
    'MX-5': {
      baseModel: 'MX-5',
      aliases: ['MX-5', 'Miata', 'MX5'],
      defaultMultiplier: 2.29,
      generations: [
        {
          generation: 'ND',
          startYear: 2015,
          endYear: 2024,
          basePrice: 27500,
          multiplier: 2.29,
        },
      ],
    },
  },
  Dodge: {
    Challenger: {
      baseModel: 'Challenger',
      aliases: [
        'Challenger',
        'Challenger R/T',
        'Challenger T/A',
        'Challenger SRT',
        'Challenger Hellcat',
        'Challenger Demon',
      ],
      defaultMultiplier: 5.83,
      generations: [
        {
          generation: 'First Gen',
          startYear: 1970,
          endYear: 1974,
          basePrice: 3273,
          multiplier: 0.27,
        },
        {
          generation: 'Second Gen (Mitsubishi)',
          startYear: 1978,
          endYear: 1983,
          basePrice: 6505,
          multiplier: 0.54,
        },
        {
          generation: 'Third Gen (LC)',
          startYear: 2008,
          endYear: 2014,
          basePrice: 40095,
          multiplier: 3.34,
        },
        {
          generation: 'LC Update',
          startYear: 2015,
          endYear: 2018,
          basePrice: 45995,
          multiplier: 3.83,
        },
        {
          generation: 'Hellcat',
          startYear: 2015,
          endYear: 2018,
          basePrice: 64195,
          multiplier: 5.35,
        },
        {
          generation: 'Demon',
          startYear: 2018,
          endYear: 2018,
          basePrice: 84995,
          multiplier: 7.08,
        },
        {
          generation: 'Hellcat Redeye',
          startYear: 2019,
          endYear: 2023,
          basePrice: 72295,
          multiplier: 6.02,
        },
        {
          generation: 'Demon 170',
          startYear: 2023,
          endYear: 2023,
          basePrice: 96666,
          multiplier: 8.06,
        },
      ],
    },
    Charger: {
      baseModel: 'Charger',
      aliases: [
        'Charger',
        'Charger R/T',
        'Charger Daytona',
        'Charger SRT',
        'Charger Hellcat',
      ],
      defaultMultiplier: 5.42,
      generations: [
        {
          generation: 'First Gen',
          startYear: 1966,
          endYear: 1967,
          basePrice: 3122,
          multiplier: 0.26,
        },
        {
          generation: 'Second Gen',
          startYear: 1968,
          endYear: 1970,
          basePrice: 3480,
          multiplier: 0.29,
        },
        {
          generation: 'Third Gen',
          startYear: 1971,
          endYear: 1974,
          basePrice: 3863,
          multiplier: 0.32,
        },
        {
          generation: 'Fourth Gen',
          startYear: 1975,
          endYear: 1978,
          basePrice: 4890,
          multiplier: 0.41,
        },
        {
          generation: 'Fifth Gen (LX)',
          startYear: 2006,
          endYear: 2010,
          basePrice: 30755,
          multiplier: 2.56,
        },
        {
          generation: 'Sixth Gen (LD)',
          startYear: 2011,
          endYear: 2014,
          basePrice: 35995,
          multiplier: 3.0,
        },
        {
          generation: 'Hellcat',
          startYear: 2015,
          endYear: 2019,
          basePrice: 67995,
          multiplier: 5.67,
        },
        {
          generation: 'Hellcat Redeye',
          startYear: 2020,
          endYear: 2023,
          basePrice: 78595,
          multiplier: 6.55,
        },
        {
          generation: 'Daytona SRT EV',
          startYear: 2024,
          endYear: 2024,
          basePrice: 89995,
          multiplier: 7.5,
        },
      ],
    },
  },
  Subaru: {
    'WRX STI': {
      baseModel: 'WRX STI',
      aliases: ['WRX STI', 'STI'],
      defaultMultiplier: 3.33,
      generations: [
        {
          generation: 'VA',
          startYear: 2015,
          endYear: 2021,
          basePrice: 40000,
          multiplier: 3.33,
        },
      ],
    },
  },
  Mitsubishi: {
    'Lancer Evolution': {
      baseModel: 'Lancer Evolution',
      aliases: ['Evolution', 'Evo', 'Lancer Evo'],
      defaultMultiplier: 3.13,
      generations: [
        {
          generation: 'Evo X',
          startYear: 2008,
          endYear: 2016,
          basePrice: 37500,
          multiplier: 3.13,
        },
      ],
    },
  },
  Other: {
    'GT-R': {
      baseModel: 'GT-R',
      aliases: ['GT-R', 'GTR', 'Nissan GT-R'],
      defaultMultiplier: 8.33,
      generations: [
        {
          generation: 'R35',
          startYear: 2009,
          endYear: 2024,
          basePrice: 100000,
          multiplier: 8.33,
        },
      ],
    },
  },
};
