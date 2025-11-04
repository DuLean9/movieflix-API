import express from "express";
import { PrismaClient } from "@prisma/client";

const port = 3000;
const app = express();
const prisma = new PrismaClient();

app.get("/movies", async (_, res) => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      title: "asc",
    },
    include: {
      genres: true,
      languages: true,
    },
  });
  res.json(movies);
});

app.post("/movies", async (_, res) => {
  await prisma.movie.create({
    data: {
      title: "Teste 2",
      genre_id: 7,
      language_id: 1,
      oscar_count: 0,
      release_date: new Date("2023-10-10"),
    },
  });

  res.status(201).send();

});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
