import Express from 'express'
import User, { UserDoc } from '../models/userModel'

export default {
  index: async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    try
    {
      const users = await User.find({}).exec()
      res.locals.users = users
      next()
    } catch (err)
    {
      next(err)
    }
  },
  indexView: (req: Express.Request, res: Express.Response) => {
    res.render('users/index')
  },
  new: (req: Express.Request, res: Express.Response) => {
    res.render('users/new')
  },
  create: async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const userParams = req.body as UserDoc
    try
    {
      // console.log(req.body)
      await User.create(userParams)
      res.locals.redirect = '/users'
      next()
    } catch (err)
    {
      next(err)
    }
  },
  redirectView: (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const redirect = res.locals.redirect
    if (redirect)
    {
      res.redirect(redirect)
    } else
    {
      next()
    }
  },
}