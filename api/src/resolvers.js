/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, {type}, ctx) {
      return ctx.models.Pet.findMany(type)
    },
    pet(_, {input}, ctx) {
      console.log("query => pet")
      return ctx.models.Pet.findOne(input)
    }
   /*  demo(_, __, {models} ) {
      models.Pet.findMany({})
    } */
    
  },
  Mutation: {
    newPet(_, {input}, ctx) {
      const pet = ctx.models.Pet.create(input)
      return pet
    }
  },

  Pet: {
    owner(pet, _, ctx) {
      console.log("pet => owner")
      return ctx.models.User.findOne()
    }
    /* img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    } */
  },
  User: {
    pets(user, _, ctx) {
      return ctx.models.Pet.findMany()
    }
  }
}
