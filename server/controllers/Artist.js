const { Artist, Category, Song } = require('../models');
const Joi = require('@hapi/joi');

exports.getArtist = async (req, res) => {
  try {
    const artist = await Artist.findAll({
      include: {
        model: Category,
        as: 'category',
        attributes: {
          exclude: ['CategoryId', 'createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['categoryId', 'createdAt', 'updatedAt', 'CategoryId'],
      },
    });
    if (artist) {
      return res.status(200).send({
        status: 'success',
        data: artist,
      });
    } else {
      return res.status(400).send({ message: 'Artist is not found' });
    }
  } catch (error) {
    res.status(500).json({
      error: 'internal server error',
    });
  }
};

exports.addArtist = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      old: Joi.number().required(),
      categoryId: Joi.number().required(),
      carrerStart: Joi.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });
    }

    const { name } = req.body;

    const artist = await Artist.create(req.body);
    if (artist) {
      const grabResult = await Artist.findOne({
        where: {
          name,
        },
        include: {
          model: Category,
          as: 'category',
          attributes: ['id', 'category'],
        },
        attributes: {
          exclude: ['categoryId', 'CategoryId', 'createdAt', 'updatedAt'],
        },
      });

      return res.status(200).send({
        message: 'Artist has been successfully added',
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

exports.deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      status: 'success',
      message: 'Artist has been deleted',
    });
  } catch (error) {
    res.status(500).json({
      error: 'internal server error',
    });
  }
};

exports.detailArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findOne({
      where: { id },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: {
            include: ['category'],
          },
          model: Song,
          as: 'song',
          attributes: {
            include: ['title', 'year'],
          },
        },
      ],
      attributes: {
        exclude: ['categoryId', 'CategoryId', 'createdAt', 'updatedAt'],
      },
    });
    if (!artist) {
      return res.status(400).json({
        message: 'Artist is not Found',
      });
    }
    res.status(200).send({ data: artist });
  } catch (error) {
    res.status(500).json({
      error: 'internal server error',
    });
  }
};
