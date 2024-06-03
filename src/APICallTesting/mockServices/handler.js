import { rest } from 'msw';




// export const jsonapicall=  rest.get('https://jsonplaceholder.typicode.com/users', async(req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json([
//         {
//           name: 'anil',
//         },
//         {
//           name: 'john',
//         },
//         {
//           name: 'tarun',
//         },
//         {
//           name: 'yash',
//         },
//       ])
//     );
//   }),

export const fetchTasks_incompleteTask_response = rest.get('https://jsonplaceholder.typicode.com/users', async (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([
                    {
                      name: 'anil',
                    },
                    {
                      name: 'john',
                    },
                    {
                      name: 'tarun',
                    },
                    {
                      name: 'yash',
                    },
                ])
    )
})

export const fetchTasks_empty_response = rest.get('https://jsonplaceholder.typicode.com/users', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]))
})

export const saveTasks_empty_response = rest.put('https://jsonplaceholder.typicode.com/users', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]))
})


export const handlers = [jsonapicall,fetchTasks_empty_response,saveTasks_empty_response];

