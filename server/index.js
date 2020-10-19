import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv-flow';

const result = dotenv.config();

const app = express();

const port = process.env.PORT || 4040;
const isProduction = process.env.NODE_ENV === 'production';

console.log(isProduction);

if (!isProduction) {
	app.use(morgan('dev'));
} else {
	app.use(morgan('combined'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send({ message: 'working!!!' }));

app.listen(port, () => console.log(`App listening on port ${port}`));
