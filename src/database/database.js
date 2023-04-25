import { Sequelize } from 'sequelize'

import {config} from 'dotenv'
config()


export const sequelize = new Sequelize('db_projects', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})


