import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {validate} from "class-validator";
import {FindManyOptions, FindOptionsWhere, Like} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";

@Controller('usuario')  // path de la ruta
// http://localhost:300/usuario
export class UsuarioController {
    constructor (
        private readonly usuarioService: UsuarioService
    ) {}

    @Get("/:id") // GET /usuario/:id = /usuario/1
    @HttpCode(200)
    findOneById(
        //:id/notas/:idNota"
        @Param() params // {id:1, idNota:12}
    ) {
    // +"1" = 1
    return this.usuarioService.findOneById(+params.id);
}

    @Delete("/:id") // DELETE /usuario/:id = /usuario/1
    @HttpCode (200)
    delete (
    // "/:id/notas/:idNota"
    @Param() params // {id:1, idNota: 12}
    ){
        return this.usuarioService.delete (+params.id);
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Body() bodyParams // {nombres: ''...}
    ) {
        const nuevoRegistro = new UsuarioCreateDto();
        nuevoRegistro.nombres = bodyParams.nombres;
        nuevoRegistro.apellidos = bodyParams.apellidos;
        nuevoRegistro.rol = bodyParams.rol;
        const arregloErrores = await validate(
            nuevoRegistro
        ); //validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envió mal datos'
            });
        }

        return this.usuarioService.create(nuevoRegistro);
    }

    @Put("/:id") // PUT /usuario/:id
    @HttpCode(200)
    async update(
        @Param() params, // {id:1}
        @Body() bodyParams // {nombres:''...}
    ) {
        const nuevoRegistro = new UsuarioCreateDto();
        nuevoRegistro.nombres = bodyParams.nombres;
        nuevoRegistro.apellidos = bodyParams.apellidos;
        nuevoRegistro.rol = bodyParams.rol;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envío mal datos'
            });
        }
        return this.usuarioService.update(
            bodyParams,
            +params.id
        );
    }

    @Get("/") // GET /usuario/
    @HttpCode(200)
    find(
        @Query() queryParams
    ) {
        const consulta: FindManyOptions<UsuarioEntity> = {
            // relations: ['notas'],
            // select: ['id'], // Select
            // relations: { // Relaciones
            //  notas: true
            // },
            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [] as FindOptionsWhere<UsuarioEntity>[]
        if(queryParams.nombres) {
            consultaWhere.push({
                nombres: Like('%' + queryParams.nombres + '%'), // dr
                rol: queryParams.rol ? queryParams.rol : undefined, // U
            })
        }
        if(consultaWhere.length > 0) {
            consulta.where = consultaWhere
        }
        return this.usuarioService.find(consulta)
    }

}