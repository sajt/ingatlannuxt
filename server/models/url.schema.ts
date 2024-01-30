import { defineMongooseModel } from '#nuxt/mongoose'
export const UrlSchema = defineMongooseModel({
  name: 'Url',
  schema: {
    town: String,
    status: Number, // 0 = ready, 1 = active, 2 = inactive
    url: String,
    download: String,
    slug: {
      type: 'string',
      required: true,
      unique: true,
    }
  }
})
