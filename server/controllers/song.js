const { Artist, Category, Song } = require('../models');
const Joi = require('@hapi/joi');

exports.getAllSong = async (req, res) => {
  try {
    const song = await Song.findAll({
      include: {
        model: Artist,
        // as: 'artist',
        attributes: {
          exclude: ['CategoryId', 'createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['categoryId', 'createdAt', 'updatedAt', 'CategoryId'],
      },
    });
    if (song) {
      return res.status(200).send({
        data: song,
      });
    } else {
      return res.status(400).send({ message: 'song is not found' });
    }
  } catch (error) {
    res.status(500).json({
      error: 'internal server error',
    });
  }
};

exports.getSong = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findOne({
      where: {
        id,
      },
      include: {
        model: Artist,
        // as: 'artist',
        attributes: {
          exclude: ['CategoryId', 'createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['categoryId', 'createdAt', 'updatedAt', 'CategoryId'],
      },
    });
    if (song) {
      return res.status(200).send({
        data: song,
      });
    } else {
      return res.status(400).send({ message: 'song is not found' });
    }
  } catch (error) {
    res.status(500).json({
      error: 'internal server error',
    });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      status: 'success',
      message: 'Song has been deleted',
    });
  } catch (error) {
    res.status(500).json({
      error: 'internal server error',
    });
  }
};

exports.addSong = async (req, res) => {
  try {
    const schema = Joi.object({
      title: Joi.string().required(),
      year: Joi.number().required(),
      artistId: Joi.number().required(),
      musicThumbnail: Joi.string(),
      linkMusic: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });
    }

    const { title } = req.body;

    const song = await Song.create({
      ...req.body,
      musicThumbnail: req.file.filename,
    });
    if (song) {
      const grabResult = await Song.findOne({
        where: {
          title,
        },
        include: {
          model: Artist,
          // as: 'artist',
          attributes: ['id', 'name'],
        },
        attributes: {
          exclude: ['artistId', 'ArtistId', 'createdAt', 'updatedAt'],
        },
      });

      return res.status(200).send({
        status: 'Succes, song has been added',
        data: grabResult,
      });
    } else {
      return res.status(400).send({ message: 'Please Try Again' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'internal server error',
    });
  }
};
