import { Router } from "express";

const router = Router();

const pets = [];

router.get("/", (req, res) => {
  res.json({ info: 'Pet List', pets });
});

router.post("/", (req, res) => {
  const { name, type } = req.body;
  pets.push({ name, type });
  res.json({ info: 'Pet created', pet: { name, type } });
});

router.get('/:name([a-zA-Z20%]+)', (req, res) => {
  console.log(req.params)
  const { name } = req.params;
  const petFound = pets.find(petDB => petDB.name === name);
  res.json({ info: 'Pet found', pet: petFound });
})

router.put('/:pet', (req, res) => {
  if(req.pet) {
    const newPet = { ...req.pet, adopted: true }
    const index = pets.findIndex(petDB => petDB.name === req.pet.name);
    pets[index] = newPet;
    res.json({ info: 'Pet updated', pet: newPet });
  } else {
    res.json({ info: 'Pet not found' });
  }
})

router.param('pet', (req, res, next, pet) => {
  const petFound = pets.find(petDB => petDB.name === pet);
  if(petFound) {
    req.pet = petFound;
  } else {
    req.pet = null
  }

  next();
})

export default router;