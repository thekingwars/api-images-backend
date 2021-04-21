'use strict'

import mongoose from 'mongoose';
import { Mongodb } from './URI';

mongoose.connect(Mongodb.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Base de datos Conectada con éxito'))
    .catch(err => console.log(err))