const { ApolloServer, gql } = require('apollo-server');


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Nutrition" type defines the queryable fields for every nutrition in our data source.
  type Nutrition {
    id: Int
    Dessert: String
    nutritionInfo: NutritionInfo
  }

  type NutritionInfo {
    calories: Int
    fat: Int
    carb: Int
    protein: Int
  }

  input NutritionInfoInput {
    id: Int
    Dessert: String
    calories: Int
    fat: Int
    carb: Int
    protein: Int
  }

  input NutritionIdInput {
    id: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "nutritions" query returns an array of zero or more Nutritions (defined above).
  type Query {
    nutritions: [Nutrition]
  }

  type Mutation {
    addNutritionItem(input: NutritionInfoInput!) : Nutrition!
    deleteNutritionItem(id: Int!) : [Nutrition]!
    reset(id: Int!) : [Nutrition]!
  }
`;

let nutritions = [
  {
    id: 1,
    Dessert: "Oreo",
    nutritionInfo: {
      calories: 437,
      fat: 18,
      carb: 63,
      protein: 4,
    },
  },
  {
    id: 2,
    Dessert: "Nougat",
    nutritionInfo: {
      calories: 360,
      fat: 19,
      carb: 9,
      protein: 37,
    },
  }
]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves nutritions from the "nutritions" array above.
const resolvers = {
  Query: {
    nutritions: () => nutritions,
  },
  Mutation: {
    addNutritionItem: (parent, args) => {
      const nutrition = {
        id: nutritions.length + 1,
        Dessert: args.input.Dessert,
        nutritionInfo: { ...args.input },
      }
      nutritions.push(nutrition)
      return nutrition;
    },
    deleteNutritionItem: (parent, args) => {
      nutritions = nutritions.filter(x=>x.id !== args.id);
      return nutritions.lenght > 0 ? nutritions : [];
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});