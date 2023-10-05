import { CorsOptions } from "cors"

const allowedSite = "*"


const corsOptions: CorsOptions = {
  allowedHeaders: ['content-type'],
  origin: allowedSite
}

export default corsOptions 
