import { log } from '@repo/logger';
import express from 'express';

const app = express();
const port = process.env.PORT || 5001;

app.get('/status', function(_, res) {
	return(res.json({ message: 'OK' }));
});

app.listen(port, function() {
	log(`api running on ${port}`);
});
