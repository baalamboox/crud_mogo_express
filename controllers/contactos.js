const Contacto = require("../models/Contacto");

const readContacto = async(_, res) => {
  try {
    const contactos = await Contacto.find({});
    
    if(contactos.length === 0) {
      return res.render('index', { ok: false });
    }
    
    return res.render('index', { ok: true, contactos });
  } catch (error) {
    console.error(error);
    return res.json({
      ok: false,
      msg: "Erro en el servidor, contacta con el admin"
    })
  }
};

const createContacto = async (req, res) => {
  console.log(req.body)
  try {
    const contactoNuevo = new Contacto(req.body);
    await contactoNuevo.save();
    return res.redirect("/");
  } catch (error) {
    return res.json({
      ok: false,
      msg: "Erro en el servidor, contacta con el admin"
    })
  }
};

const deleteContacto = async (req, res) => {
  const id = req.params.id
  console.log(id)
  try {
    await Contacto.findByIdAndDelete(id)
    return res.redirect("/")
  } catch(error) {
    console.log(error)
    return res.json({ ok: false, msg: "Error en el servidor, contacta con el admin" })
  }
}

const updateContacto = async (req, res) => {
  const id = req.body.edit_id
  try {
    await Contacto.findByIdAndUpdate(id, req.body)
    return res.redirect("/")
  } catch(error) {
    console.log(error)
    return res.json({ ok: false, msg: "Error en el servidor, contacta con el admin" })
  }
}

module.exports = {
  readContacto,
  createContacto,
  deleteContacto,
  updateContacto
}