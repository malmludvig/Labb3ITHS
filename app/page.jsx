import Link from "next/link"
import HomeView from "./viewpets/page"

async function getPets() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const pets = await petsPromise.json()
  return pets
}

export default async function Page() {
  const pets = await getPets()

  return (

      <div>
        
        <HomeView></HomeView>

    </div>
  )
}
