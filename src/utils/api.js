import faker from 'faker';

function generateFakeData() {
  let fakeData = [];
  const itemSize = 35;

  for (let x = 1; x <= itemSize; x++) {
    const id = faker.random.uuid();
    const title = faker.name.firstName();
    const url = faker.internet.url();
    const lastModified = faker.date.recent();

    fakeData.push({
      id: id,
      title: title,
      url: url,
      points: Math.floor(Math.random() * (12 - 0)) + 1,
      lastModified: lastModified,
    });
  }

  return fakeData;
}

export const apiData = generateFakeData();
