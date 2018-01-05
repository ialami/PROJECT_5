import { Request } from 'express';

module.exports.messageAssign = (req: Request, status: number, body: any) => {
  console.log('status', status);
  console.log('body', body);
  return req.middle.data = { status, body };
};

module.exports.messageAssignXml = (req: Request, status: number, body: any) => {
//   req.middle.data = { status, body, force: { xml: true } };
};
