import { Router } from "express";
import userRoute from "../users/user.routes";
import mangoRoute from "../mango/mango.route";


const routes =Router()

routes.use(userRoute)
routes.use(mangoRoute)

export default routes;