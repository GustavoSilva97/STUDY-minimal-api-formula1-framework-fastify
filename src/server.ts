import fastify from "fastify";
//@fastify/cors => fastify package to deal with cors
import cors from "@fastify/cors";

const server = fastify({ logger: true });

//controll access to api
server.register(cors, { origin: "*" });

const teams = [
    {id: 1, name: "McLaren", base: "Woking, United Kingdom"},
    {id: 2, name: "Mercedes", base: "Brackley, United Kingdom"},
    {id: 3, name: "RedBull Racing", base: "Milton Keynes, United Kingom"}
]

const drivers = [
    {id:1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id:2, name: "Lewis Hamilton", team: "Ferrari"},
    {id:3, name: "Lando Norris", team: "McLaren"}
]

//http get implementation with route + controller (async callback function inside .get)
server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200);

    return { teams };
});

server.get("/drivers", async (request, response)=>{
    response.type("application/json").code(200);

    return { drivers };
});

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response)=>{
    const id = parseInt(request.params.id);
    const driver = drivers.find((d)  => d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return { message: "Driver Not Found"};
    }else{
        response.type("application/json").code(200);
        return { driver };
    }
});

//listener -> configurating a door
server.listen({port: 3636}, ()=>{
    console.log("Server init");
});

