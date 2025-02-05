import { useState, useEffect } from "react";
import { Stack, Input, Button } from "@chakra-ui/react";
import styles from './CreateHeros.module.scss'

interface Hero {
  _id: string;
  name: string;
  imgURL: string;
  rating: number;
}

const CreateHeros = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchHeroes = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/heroes/get-hero");
      if (!response.ok) {
        throw new Error("Failed to fetch heroes");
      }
      const data = await response.json();
      if (data.heroes) {
        setHeroes(data.heroes);
      } else {
        console.error("No Heroes data received");
      }
    } catch (error) {
      console.error("Error fetching heroes:", error);
    }
  };

  const handleCreateHero = async () => {
    if (!name || !imgURL) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/heroes/create-hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ name, imgURL, rating: 0, }),
      });
      console.log(name)
      console.log(imgURL)
      if (!response.ok) throw new Error("Failed to create hero");

      const newHero = await response.json();
      setHeroes((prevHeroes) => [...prevHeroes, newHero]);
      setName("");
      setImgURL("");
    } catch (error) {
      console.error("Error creating hero:", error);
    }
  };

  const handleDeleteHero = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/heroes/delete/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete hero");
  
      setHeroes((prevHeroes) => prevHeroes.filter((hero) => hero._id !== id));
    } catch (error) {
      console.error("Error deleting hero:", error);
    }
  };
  

  const handleRateHero = async (id: string, rating: number) => {
    try {
      await fetch(`http://localhost:3000/api/heroes/${id}/rate`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating }),
      });
      setHeroes((prevHeroes) =>
        prevHeroes.map((hero) =>
          hero._id === id ? { ...hero, rating: hero.rating + 1 } : hero
        )
      ); 
    } catch (error) {
      console.error("Error rating hero:", error);
    }
  };

  const handleSearchHeroes = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/heroes/search?name=${searchQuery}`);
      if (!response.ok) throw new Error("Failed to search heroes");
  
      const data = await response.json();
      setHeroes(data.heroes || []);
    } catch (error) {
      console.error("Error searching heroes:", error);
    }
  };
  

  useEffect(() => {
    fetchHeroes();
  }, []); 

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create New Hero</h2>
        <p className={styles.description}>Fill in the form below to create a hero</p>

        <Stack gap="4" w="full">
          <Input
            placeholder="Hero Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inputField}
          />
          <Input
            placeholder="Image URL"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            className={styles.inputField}
          />
        </Stack>
        <br />
        <Button className={styles.button} size="lg" onClick={handleCreateHero}>
          Create
        </Button>
      </div>

      <div className={styles.list}>
        <h2>Heroes List</h2>
        <Input
          placeholder="Search heroes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={handleSearchHeroes}>Search</Button>

        {heroes.map((hero) => (
          <div key={hero._id} className={styles.heroCard}>
            <img src={hero.imgURL} alt={hero.name} className={styles.heroImage} />
            <h3>{hero.name}</h3>
            <p>Rating: {hero.rating} ⭐</p>
            <Button onClick={() => handleRateHero(hero._id, hero.rating + 1)}>Rate +</Button>
            <Button onClick={() => handleDeleteHero(hero._id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateHeros;
