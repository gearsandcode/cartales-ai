import { describe, it, expect } from 'vitest';
import {
  generateIntroductionPrompt,
  generatePreviousOwnerPrompt,
  generateCurrentOwnerPrompt,
  generateConclusionPrompt,
  resolvePlaceholderName,
} from '../story-generators';
import { CarDetails } from '@/types/car-details';
import { OwnershipPeriod } from '@/types/ownership-chain';

describe('resolvePlaceholderName', () => {
  it('should return the name if it is not a placeholder', () => {
    const name = 'John Doe';
    const result = resolvePlaceholderName(name);
    expect(result).toBe('John Doe');
  });

  it('should return the name if it is not a placeholder', () => {
    const name = '[OWNER_NAME_1950]';
    const result = resolvePlaceholderName(name);
    expect(result).toContain(
      'Generate a historically appropriate name for someone who owned this car in 1950.'
    );
  });
});

describe('generateIntroductionPrompt', () => {
  it('should prepare the correct input for a Tesla Model S', () => {
    const details: CarDetails = {
      year: '2020',
      make: 'Tesla',
      model: 'Model S',
      ownerName: '',
      purchaseYear: '',
      ownershipDuration: '',
      location: '',
      previousOwners: 'random',
      acquisitionStory: '',
      departureStory: '',
      customizations: '',
      maintenance: '',
    };

    const prompt = generateIntroductionPrompt(details);
    expect(prompt).toContain(
      `Write an introduction about a 2020 Tesla Model S.`
    );
  });
});

describe('generatePreviousOwnerPrompt', () => {
  it('should generate a correct previous owner prompt', () => {
    const details: CarDetails = {
      year: '2015',
      make: 'BMW',
      model: '3 Series',
      ownerName: '',
      purchaseYear: '',
      ownershipDuration: '',
      location: '',
      previousOwners: 2,
      acquisitionStory: '',
      departureStory: '',
      customizations: '',
      maintenance: '',
    };

    const ownerPeriod: OwnershipPeriod = {
      startYear: 2015,
      endYear: 2018,
      ownerName: 'John Doe',
      location: 'New York',
      purchasePrice: 30000,
      salePrice: 25000,
    };

    const previousPeriod: OwnershipPeriod = {
      startYear: 2012,
      endYear: 2015,
      ownerName: 'Jane Smith',
      location: 'Los Angeles',
      purchasePrice: 35000,
      salePrice: 30000,
    };

    const nextPeriod: OwnershipPeriod = {
      startYear: 2018,
      endYear: 2021,
      ownerName: 'Alice Johnson',
      location: 'Chicago',
      purchasePrice: 25000,
      salePrice: 20000,
    };

    const prompt = generatePreviousOwnerPrompt(
      details,
      1,
      ownerPeriod,
      previousPeriod,
      nextPeriod
    );
    expect(prompt).toContain('John Doe');
    expect(prompt).toContain('2015 BMW 3 Series');
    expect(prompt).toContain('acquired from Jane Smith in 2015 for $30,000');
    expect(prompt).toContain('sold to Alice Johnson in 2018 for $25,000');
  });
  it('should generate a correct previous owner prompt', () => {
    const details: CarDetails = {
      year: '2015',
      make: 'BMW',
      model: '3 Series',
      ownerName: '',
      purchaseYear: '',
      ownershipDuration: '',
      location: '',
      previousOwners: 2,
      acquisitionStory: '',
      departureStory: '',
      customizations: '',
      maintenance: '',
    };

    const ownerPeriod: OwnershipPeriod = {
      startYear: 2015,
      endYear: 2018,
      ownerName: '[OWNER_NAME_2015]',
      location: 'New York',
      purchasePrice: 30000,
      salePrice: 25000,
    };

    const previousPeriod: OwnershipPeriod = {
      startYear: 2012,
      endYear: 2015,
      ownerName: '[OWNER_NAME_2012]',
      location: 'Los Angeles',
      purchasePrice: 35000,
      salePrice: 30000,
    };

    const nextPeriod: OwnershipPeriod = {
      startYear: 2018,
      endYear: 2021,
      ownerName: '[OWNER_NAME_2018]',
      location: 'Chicago',
      purchasePrice: 25000,
      salePrice: 20000,
    };

    const prompt = generatePreviousOwnerPrompt(
      details,
      1,
      ownerPeriod,
      previousPeriod,
      nextPeriod
    );
    expect(prompt).toContain(
      `You are a storyteller specializing in writing engaging narratives about cars and their histories. Write a story about [Generate a historically appropriate name for someone who owned this car in 2015. Use common naming conventions from that era.]'s ownership of a 2015 BMW 3 Series.`
    );
  });
  it('should generate a correct previous owner prompt - purchased as', () => {
    const details: CarDetails = {
      year: '2015',
      make: 'BMW',
      model: '3 Series',
      ownerName: '',
      purchaseYear: '',
      ownershipDuration: '',
      location: '',
      previousOwners: 2,
      acquisitionStory: '',
      departureStory: '',
      customizations: '',
      maintenance: '',
    };

    const ownerPeriod: OwnershipPeriod = {
      startYear: 2015,
      endYear: 2018,
      ownerName: '[OWNER_NAME_2015]',
      location: 'New York',
      purchasePrice: 30000,
      salePrice: 25000,
    };

    const previousPeriod = null;

    const nextPeriod: OwnershipPeriod = {
      startYear: 2018,
      endYear: 2021,
      ownerName: '[OWNER_NAME_2018]',
      location: 'Chicago',
      purchasePrice: 25000,
      salePrice: 20000,
    };

    const prompt = generatePreviousOwnerPrompt(
      details,
      1,
      ownerPeriod,
      previousPeriod,
      nextPeriod
    );
    expect(prompt).toContain(
      `You are a storyteller specializing in writing engaging narratives about cars and their histories. Write a story about [Generate a historically appropriate name for someone who owned this car in 2015. Use common naming conventions from that era.]'s ownership of a 2015 BMW 3 Series.`
    );
  });
});

describe('generateCurrentOwnerPrompt', () => {
  it('should generate a correct current owner prompt', () => {
    const details: CarDetails = {
      year: '2020',
      make: 'Tesla',
      model: 'Model 3',
      ownerName: 'Elon Musk',
      purchaseYear: '2020',
      ownershipDuration: '3 years',
      location: 'California',
      previousOwners: 1,
      acquisitionStory: '',
      departureStory: '',
      customizations: 'Added autopilot feature',
      maintenance: 'Regular maintenance at Tesla service center',
    };

    const currentOwner: OwnershipPeriod = {
      startYear: 2020,
      endYear: 2023,
      ownerName: 'Elon Musk',
      location: 'California',
      purchasePrice: 50000,
      salePrice: 45000,
    };

    const previousOwner: OwnershipPeriod = {
      startYear: 2017,
      endYear: 2020,
      ownerName: 'John Doe',
      location: 'New York',
      purchasePrice: 55000,
      salePrice: 50000,
    };

    const prompt = generateCurrentOwnerPrompt(
      details,
      currentOwner,
      previousOwner
    );
    expect(prompt).toContain('Elon Musk');
    expect(prompt).toContain('2020 Tesla Model 3');
    expect(prompt).toContain('acquired from John Doe in 2020 for $50,000');
    expect(prompt).toContain('Added autopilot feature');
    expect(prompt).toContain('Regular maintenance at Tesla service center');
  });
  it('should generate a correct current owner prompt', () => {
    const details: CarDetails = {
      year: '2020',
      make: 'Tesla',
      model: 'Model 3',
      ownerName: '[OWNER_NAME_2020]',
      purchaseYear: '2020',
      ownershipDuration: '3 years',
      location: 'California',
      previousOwners: 1,
      acquisitionStory: '',
      departureStory: '',
      customizations: 'Added autopilot feature',
      maintenance: 'Regular maintenance at Tesla service center',
    };

    const currentOwner: OwnershipPeriod = {
      startYear: 2020,
      endYear: 2023,
      ownerName: 'Elon Musk',
      location: 'California',
      purchasePrice: 50000,
      salePrice: 45000,
    };

    const previousOwner: OwnershipPeriod = {
      startYear: 2017,
      endYear: 2020,
      ownerName: 'John Doe',
      location: 'New York',
      purchasePrice: 55000,
      salePrice: 50000,
    };

    const prompt = generateCurrentOwnerPrompt(
      details,
      currentOwner,
      previousOwner
    );
    expect(prompt).toContain('[OWNER_NAME_2020]');
    expect(prompt).toContain('2020 Tesla Model 3');
    expect(prompt).toContain('acquired from John Doe in 2020 for $50,000');
    expect(prompt).toContain('Added autopilot feature');
    expect(prompt).toContain('Regular maintenance at Tesla service center');
  });
  it('should generate a correct current owner prompt', () => {
    const details: CarDetails = {
      year: '2020',
      make: 'Tesla',
      model: 'Model 3',
      ownerName: '[OWNER_NAME_2020]',
      purchaseYear: '2020',
      ownershipDuration: '3 years',
      location: 'California',
      previousOwners: 1,
      acquisitionStory: '',
      departureStory: '',
      customizations: '',
      maintenance: '',
    };

    const currentOwner: OwnershipPeriod = {
      startYear: 2020,
      endYear: 2023,
      ownerName: 'Elon Musk',
      location: 'California',
      purchasePrice: 50000,
      salePrice: 45000,
    };

    const previousOwner: OwnershipPeriod = {
      startYear: 2017,
      endYear: 2020,
      ownerName: 'John Doe',
      location: 'New York',
      purchasePrice: 55000,
      salePrice: 50000,
    };

    const prompt = generateCurrentOwnerPrompt(
      details,
      currentOwner,
      previousOwner
    );
    expect(prompt).toContain('[OWNER_NAME_2020]');
    expect(prompt).toContain('2020 Tesla Model 3');
    expect(prompt).toContain('acquired from John Doe in 2020 for $50,000');
  });
});

describe('generateConclusionPrompt', () => {
  it('should generate a correct conclusion prompt', () => {
    const details: CarDetails = {
      year: '2018',
      make: 'Audi',
      model: 'A6',
      ownerName: 'Jane Doe',
      purchaseYear: '',
      ownershipDuration: '',
      location: '',
      previousOwners: 0,
      acquisitionStory: '',
      departureStory: 'Sold the car to upgrade to a newer model.',
      customizations: '',
      maintenance: '',
    };

    const currentOwner: OwnershipPeriod = {
      startYear: 2018,
      endYear: 2021,
      ownerName: 'Jane Doe',
      location: 'San Francisco',
      purchasePrice: 40000,
      salePrice: 35000,
    };

    const prompt = generateConclusionPrompt(details, currentOwner);
    expect(prompt).toContain('Jane Doe');
    expect(prompt).toContain('2018 Audi A6');
    expect(prompt).toContain('## Farewell');
    expect(prompt).toContain('Sold the car to upgrade to a newer model.');
  });
});
