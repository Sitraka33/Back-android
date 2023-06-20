const Materiel = require('../models/materielModel');

const getAllMateriels = async (req, res) => {
    try {
        const materiels = await Materiel.findAll();
        res.json(materiels);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des matériaux.' });
    }
};

const getFooter = async (req, res) => {
    try {
        const somme = await Materiel.sum('qte');
        const mauvais = await Materiel.sum('qte', { where: { etat: 1 } });
        const bon = await Materiel.sum('qte', { where: { etat: 2 } });
        const abime = await Materiel.sum('qte', { where: { etat: 3 } });
        res.json({somme : somme , mauvais : mauvais, bon : bon, abime : abime});
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération footer' });
    }
}
const createMateriel = async (req, res) => {
    const { design, etat, qte } = req.query;

    try {
        await Materiel.create({ design, etat, qte });
        res.send("OK");
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du matériel.' });
    }
};

const updateMateriel = async (req, res) => {
    const { id } = req.params;
    const { design, etat, qte } = req.query;

    try {
        const materiel = await Materiel.findByPk(id);

        if (!materiel) {
            return res.status(404).json({ error: 'Le matériau n\'existe pas.' });
        }

        if (design) {
            materiel.design = design;
        }
        if (etat) {
            materiel.etat = etat;
        }
        if (qte) {
            materiel.qte = qte;
        }

        await materiel.save();

        res.send("OK");
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du matériel.' });
    }
};

const deleteMateriel = async (req, res) => {
    const { id } = req.params;

    try {
        const materiel = await Materiel.findByPk(id);

        if (!materiel) {
            return res.status(404).json({ error: 'Le matériau n\'existe pas.' });
        }

        await materiel.destroy();
        res.send("OK");
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du matériel.' });
    }
};
module.exports = {
    getAllMateriels,
    getFooter,
    updateMateriel,
    createMateriel,
    deleteMateriel
};
