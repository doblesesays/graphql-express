import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
        Users: [User]
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    }

    input TaskInput {
        title: String!
        description: String!
        number: Int
    }

    type User {
        _id: ID
        name: String!
        lastname: String
        age: Int
    }

    input UserInput {
        name: String!
        lastname: String
        age: Int
    }

    type Mutation {
        createTask(task: TaskInput!): Task
        createUser(user: UserInput!): User
        deleteUser(_id: ID!): User
        updateUser(_id: ID!, user: UserInput): User
    }
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});
