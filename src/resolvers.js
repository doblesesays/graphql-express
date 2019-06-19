
import { tasks } from "./sample";
import User from "./models/User";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello worl!"
        },
        greet: (root, args, ctx) => {
            console.log(ctx)
            return `Hola ${args.name}`;
        },
        tasks: () => {
            return tasks;
        },
        Users: async () => {
            return await User.find({});
        }
    },
    Mutation: {
        createTask: (_, { task }) => {
            task._id = tasks.length;
            tasks.push(task)
            return task;
        },
        createUser: async (_, { user }) => {
            return await new User(user).save();
        },
        deleteUser: async (_, { _id }) => {
            return await User.findByIdAndDelete(_id);
        },
        updateUser: async (_, { _id, user }) => {
            return await User.findByIdAndUpdate(_id, user, { new: true });
        }
    }
}