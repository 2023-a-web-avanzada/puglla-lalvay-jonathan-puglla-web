import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {EventosService} from "./eventos.service";
import {Server, Socket} from 'socket.io';
@WebSocketGateway(
    11202, // Puerto hacia donde estamos escuchando
    {
        cors: {
            origin: "*", // Habilitando la conexión desde cualquier IP
        }
    }
)
export class EventosGateway {
    constructor(private readonly _eventosService: EventosService) {}
    @SubscribeMessage("hola") // Nombre del metodo para recibir eventos
    devolverHola(
        @MessageBody()
            message: { mensaje: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        console.log("message", message);
        socket.broadcast.emit(
            "escucharEventoHola", // Nombre del evento que vamos a enviar a los clientes conectados
            { // Objeto a enviar
                mensaje: this._eventosService.saludar() + message.mensaje,
            }
        );
        return { mensaje: "ok" }
    }
}
