import express from 'express';

export default (req: express.Request, res: express.Response, next: express.NextFunction) => { // eslint-disable-line
  console.log(`connect to : ${req.url}`); // eslint-disable-line
  next();
};

