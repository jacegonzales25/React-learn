// http://localhost:3000/api/users


export async function GET(request: Request) {
    
    const users = [
        {
            id: 1, name: "John Doe"
        },
        {
            id: 2, name: "Jane Doe"
        },
    ];

    return new Response(JSON.stringify(users));
}