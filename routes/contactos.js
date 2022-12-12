const { Router } = require("express");
const { readContacto, createContacto, deleteContacto, updateContacto } = require("../controllers/contactos");

const router = Router();

router.get("/", readContacto);

router.post("/crear", createContacto);

router.get("/delete/:id", deleteContacto)

router.post("/update", updateContacto)

module.exports  = router;