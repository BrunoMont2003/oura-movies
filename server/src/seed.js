import seeders from './seeders'

export default async function seed () {
  await seeders.seedMovieCatalog()
}
